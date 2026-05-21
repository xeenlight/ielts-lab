import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FloatingAlert.module.css";
import giftIcon from "../../assets/gift.png";

export default function FloatingAlert() {
  const [visible, setVisible] = useState(false);

  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closeAlert = () => {
    setVisible(false);
  };

  const goToCourse = () => {
    navigate("/course");
  };

  // Swipe for mobile
  const handleTouchStart = (e) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const distance = touchStartY.current - touchEndY.current;

    // свайп вверх
    if (distance > 80) {
      closeAlert();
    }
  };

  // mobile click redirect
  const handleAlertClick = () => {
    if (window.innerWidth <= 768) {
      goToCourse();
    }
  };

  if (!visible) return null;

  return (
    <div
      className={styles.alert}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleAlertClick}
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
        <h4>Начните свой путь уже сегодня!</h4>

        <p>
          Запишитесь на бесплатный пробный урок
          <br />
          и оцените наш подход к обучению.
        </p>
      </div>

      <button
        className={styles.button}
        onClick={(e) => {
          e.stopPropagation();
          goToCourse();
        }}
      >
        Записаться
      </button>
    </div>
  );
}