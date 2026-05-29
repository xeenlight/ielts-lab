import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./FloatingAlert.module.css";
import giftIcon from "../../assets/gift.png";

const ALERT_DELAY = 5000;
const COOLDOWN = 60 * 1000;

const alerts = [
  {
    id: 1,
    title: "Начните свой путь уже сегодня!",
    text: "Запишитесь на бесплатный пробный урок и оцените наш подход к обучению.",
    button: "Записаться",
    type: "internal",
    link: "/course",
  },
  {
    id: 2,
    title: "Подготовьтесь к IELTS вместе с нами!",
    text: "Получите персональный план подготовки и узнайте свой текущий уровень английского.",
    button: "Перейти к Mock",
    type: "external",
    link: "https://mock.ieltslab.uz/",
  },
];

export default function FloatingAlert() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [visible, setVisible] = useState(false);
  const [currentAlert, setCurrentAlert] = useState(null);

  const secondAlertTimeout = useRef(null);

  // =========================
  // STORAGE
  // =========================

  const getCooldown = () => {
    const value = localStorage.getItem("floating-alert-cooldown");

    if (!value) return false;

    const isActive = Date.now() - Number(value) < COOLDOWN;

    // cooldown закончился → очищаем всё
    if (!isActive) {
      localStorage.removeItem("floating-alert-cooldown");

      sessionStorage.removeItem("floating-alert-first-shown");
      sessionStorage.removeItem("floating-alert-second-shown");
    }

    return isActive;
  };

  const showAlert = (alert) => {
    setCurrentAlert(alert);
    setVisible(true);
  };

  // =========================
  // SECOND ALERT
  // =========================

  const scheduleSecondAlert = () => {
    const secondShown = sessionStorage.getItem(
      "floating-alert-second-shown"
    );

    if (secondShown) return;

    clearTimeout(secondAlertTimeout.current);

    secondAlertTimeout.current = setTimeout(() => {
      sessionStorage.setItem("floating-alert-second-shown", "true");

      showAlert(alerts[1]);
    }, ALERT_DELAY);
  };

  // =========================
  // FIRST ALERT
  // =========================

  const triggerFirstAlert = () => {
    const firstShown = sessionStorage.getItem(
      "floating-alert-first-shown"
    );

    if (firstShown) return;

    sessionStorage.setItem("floating-alert-first-shown", "true");

    showAlert(alerts[0]);

    scheduleSecondAlert();
  };

  // =========================
  // MAIN LOGIC
  // =========================

  useEffect(() => {
    if (getCooldown()) return;

    const firstShown = sessionStorage.getItem(
      "floating-alert-first-shown"
    );

    const secondShown = sessionStorage.getItem(
      "floating-alert-second-shown"
    );

    // Если первый уже был,
    // но второй ещё нет → продолжаем цикл
    if (firstShown && !secondShown) {
      scheduleSecondAlert();
      return;
    }

    // Если оба уже были → ничего не делаем
    if (firstShown && secondShown) {
      return;
    }

    // =========================
    // HOME PAGE
    // =========================

    if (isHome) {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          triggerFirstAlert();

          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    // =========================
    // OTHER PAGES
    // =========================

    triggerFirstAlert();

    return () => {
      clearTimeout(secondAlertTimeout.current);
    };
  }, [location.pathname]);

  // =========================
  // CLOSE
  // =========================

  const closeAlert = () => {
    setVisible(false);

    // Если закрыли второй → cooldown
    if (currentAlert?.id === 2) {
      localStorage.setItem(
        "floating-alert-cooldown",
        Date.now().toString()
      );

      clearTimeout(secondAlertTimeout.current);

      // через минуту всё автоматически очистится
      setTimeout(() => {
        localStorage.removeItem("floating-alert-cooldown");

        sessionStorage.removeItem(
          "floating-alert-first-shown"
        );

        sessionStorage.removeItem(
          "floating-alert-second-shown"
        );
      }, COOLDOWN);
    }
  };

  // =========================
  // REDIRECT
  // =========================

  const handleRedirect = () => {
    if (!currentAlert) return;

    if (currentAlert.type === "external") {
      window.open(currentAlert.link, "_blank");
    } else {
      navigate(currentAlert.link);
    }
  };

  // =========================
  // SWIPE
  // =========================

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const distance =
      touchStartY.current - touchEndY.current;

    if (distance > 80) {
      closeAlert();
    }
  };

  if (!visible || !currentAlert) return null;

  return (
    <div
      className={styles.alert}
      onClick={handleRedirect}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className={styles.close}
        onClick={(e) => {
          e.stopPropagation();
          closeAlert();
        }}
      >
        ✕
      </button>

      <div className={styles.iconBackground}>
        <img
          className={styles.icon}
          src={giftIcon}
          alt="Gift"
        />
      </div>

      <div className={styles.content}>
        <h4>{currentAlert.title}</h4>
        <p>{currentAlert.text}</p>
      </div>

      <button
        className={styles.button}
        onClick={(e) => {
          e.stopPropagation();
          handleRedirect();
        }}
      >
        {currentAlert.button}
      </button>
    </div>
  );
}