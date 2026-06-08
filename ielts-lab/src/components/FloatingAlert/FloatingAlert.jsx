import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./FloatingAlert.module.css";
import giftIcon from "../../assets/gift.png";

const ALERT_DELAY = 5000;
const COOLDOWN = 60 * 1000;

export default function FloatingAlert() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // States
  const [languageSelected, setLanguageSelected] = useState(
    !!localStorage.getItem("site-language-selected")
  );
  const [visible, setVisible] = useState(false);
  const [currentAlert, setCurrentAlert] = useState(null);

  const timeoutRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const isHome = location.pathname === "/";

  const alerts = [
    {
      id: 1,
      title: t("alert_1_title"),
      text: t("alert_1_text"),
      button: t("alert_1_button"),
      type: "internal",
      link: "/course",
    },
    {
      id: 2,
      title: t("alert_2_title"),
      text: t("alert_2_text"),
      button: t("alert_2_button"),
      type: "external",
      link: "https://mock.ieltslab.uz/",
    },
  ];

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("site-language-selected", "true");
    localStorage.setItem("i18nextLng", lang);
    setLanguageSelected(true);
  };

  const isCooldownActive = () => {
    const cooldown = localStorage.getItem("floating-alert-cooldown");
    if (!cooldown) return false;

    const active = Date.now() - Number(cooldown) < COOLDOWN;

    if (!active) {
      localStorage.removeItem("floating-alert-cooldown");
      // Очищаем все сессионные флаги
      sessionStorage.removeItem("floating-alert-first-shown");
      sessionStorage.removeItem("floating-alert-first-closed");
      sessionStorage.removeItem("floating-alert-second-shown");
      sessionStorage.removeItem("floating-alert-second-pending");
    }
    return active;
  };

  const showAlert = (alert) => {
    setCurrentAlert(alert);
    setVisible(true);
  };

  const closeAlert = () => {
    setVisible(false);

    if (currentAlert?.id === 1) {
      sessionStorage.setItem("floating-alert-first-closed", "true");
      scheduleSecondAlert();
    } else if (currentAlert?.id === 2) {
      localStorage.setItem("floating-alert-cooldown", Date.now().toString());

      setTimeout(() => {
        localStorage.removeItem("floating-alert-cooldown");
        sessionStorage.clear(); // или удаляем только нужные ключи
      }, COOLDOWN);
    }
  };

  const handleRedirect = () => {
    if (!currentAlert) return;

    if (currentAlert.type === "external") {
      window.open(currentAlert.link, "_blank");
    } else {
      navigate(currentAlert.link);
    }
    closeAlert();
  };

  const scheduleSecondAlert = () => {
    if (sessionStorage.getItem("floating-alert-second-shown")) return;

    clearTimeout(timeoutRef.current);

    const now = Date.now();
    sessionStorage.setItem("floating-alert-second-pending", now.toString());

    timeoutRef.current = setTimeout(() => {
      sessionStorage.setItem("floating-alert-second-shown", "true");
      sessionStorage.removeItem("floating-alert-second-pending");
      showAlert(alerts[1]);
    }, ALERT_DELAY);
  };

  // Touch swipe to close
  const handleTouchStart = (e) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const distance = touchStartY.current - touchEndY.current;
    if (distance > 80) closeAlert();
  };

  // Main logic
  useEffect(() => {
    if (!languageSelected) return;
    if (isCooldownActive()) return;

    const firstShown = sessionStorage.getItem("floating-alert-first-shown");
    const firstClosed = sessionStorage.getItem("floating-alert-first-closed");
    const secondShown = sessionStorage.getItem("floating-alert-second-shown");
    const secondPending = sessionStorage.getItem("floating-alert-second-pending");

    // Восстановление второго алерта после навигации
    if (firstClosed && !secondShown && secondPending) {
      const startTime = Number(secondPending);
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(ALERT_DELAY - elapsed, 0);

      timeoutRef.current = setTimeout(() => {
        sessionStorage.setItem("floating-alert-second-shown", "true");
        sessionStorage.removeItem("floating-alert-second-pending");
        showAlert(alerts[1]);
      }, remaining);
      return;
    }

    if (firstShown) return;

    const triggerFirstAlert = () => {
      sessionStorage.setItem("floating-alert-first-shown", "true");
      showAlert(alerts[0]);
    };

    if (isHome) {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          triggerFirstAlert();
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    // На других страницах показываем сразу
    triggerFirstAlert();

    return () => clearTimeout(timeoutRef.current);
  }, [location.pathname, languageSelected]);

  // Language selector
  if (!languageSelected) {
    return (
      <div className={styles.languageAlert}>
        <div className={styles.languageInner}>
          <div>
            <h3>
        Выберите язык сайта
        <br />
        Sayt tilini tanlang
        <br />
        Choose website language
      </h3>
          </div>

          <div className={styles.languageButtons}>
            <button onClick={() => selectLanguage("ru")}>RU</button>
            <button onClick={() => selectLanguage("en")}>EN</button>
            <button onClick={() => selectLanguage("uz")}>UZ</button>
          </div>
        </div>
      </div>
    );
  }

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
        <img className={styles.icon} src={giftIcon} alt="Gift" />
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