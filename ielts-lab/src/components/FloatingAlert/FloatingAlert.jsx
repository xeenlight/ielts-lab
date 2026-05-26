import { useEffect, useRef, useState } from "react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import styles from "./FloatingAlert.module.css";

import giftIcon from "../../assets/gift.png";

export default function FloatingAlert() {
  const navigate = useNavigate();

  const location = useLocation();

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  // ALERT TYPES
  const alerts = [
    {
      id: 1,

      title: "Начните свой путь уже сегодня!",

      text:
        "Запишитесь на бесплатный пробный урок и оцените наш подход к обучению.",

      button: "Записаться",

      type: "internal",

      link: "/course",
    },

    {
      id: 2,

      title: "Подготовьтесь к IELTS вместе с нами!",

      text:
        "Получите персональный план подготовки и узнайте свой текущий уровень английского.",

      button: "Перейти к Mock",

      type: "external",

      link: "https://mock.ieltslab.uz/",
    },
  ];

  const [visible, setVisible] = useState(false);

  const [alertIndex, setAlertIndex] =
    useState(0);

  // SHOW ALERT
  useEffect(() => {
    const closedTime =
      localStorage.getItem(
        "floatingAlertClosed"
      );

    if (closedTime) {
      const now = Date.now();

      const diff =
        now - Number(closedTime);

      // 5 MINUTES
      const fiveMinutes =
        1 * 60 * 200;

      if (diff < fiveMinutes) return;
    }

    // IF USER IS NOT ON HOME PAGE
    // SHOW ALERT IMMEDIATELY
    if (location.pathname !== "/") {
      setVisible(true);

      return;
    }

    // HOME PAGE -> SHOW AFTER SCROLL
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const windowHeight =
        window.innerHeight;

      const documentHeight =
        document.documentElement
          .scrollHeight;

      // USER REACHED BOTTOM
      if (
        scrollTop + windowHeight >=
        documentHeight - 960
      ) {
        setVisible(true);

        window.removeEventListener(
          "scroll",
          handleScroll
        );
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [location.pathname]);

  // CLOSE ALERT
const closeAlert = () => {
  setVisible(false);

  // IF THERE IS NEXT ALERT
  if (alertIndex < alerts.length - 1) {
    setTimeout(() => {
      setAlertIndex((prev) => prev + 1);

      setVisible(true);
    }, 5000);
  } else {
    // SAVE CLOSE TIME ONLY
    // AFTER LAST ALERT
    localStorage.setItem(
      "floatingAlertClosed",
      Date.now().toString()
    );
  }
};

  const currentAlert = alerts[alertIndex];

  // REDIRECT
  const handleRedirect = () => {
    if (currentAlert.type === "external") {
      window.open(
        currentAlert.link,
        "_blank"
      );
    } else {
      navigate(currentAlert.link);
    }
  };

  // SWIPE MOBILE
  const handleTouchStart = (e) => {
    touchStartY.current =
      e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current =
      e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const distance =
      touchStartY.current -
      touchEndY.current;

    // SWIPE UP
    if (distance > 80) {
      closeAlert();
    }
  };

  if (!visible) return null;

  return (
    <div
      className={styles.alert}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleRedirect}
    >
      {/* CLOSE */}
      <button
        className={styles.close}
        onClick={(e) => {
          e.stopPropagation();

          closeAlert();
        }}
      >
        ✕
      </button>

      {/* ICON */}
      <div
        className={styles.iconBackground}
      >
        <img
          className={styles.icon}
          src={giftIcon}
          alt="Gift"
        />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h4>{currentAlert.title}</h4>

        <p>{currentAlert.text}</p>
      </div>

      {/* BUTTON */}
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