import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Reviews.module.css";
import  user  from "../../assets/photoUser.jpg";


const reviews = [
  {
    id: 1,
    name: "Владимир Будников",
    text: "Спасибо за превосходную подготовку к IELTS",
    rating: 5,
    date: "2 месяца назад",
    avatar: user,
    source: "Yandex",
    color: "#FF0000",
    url: "https://yandex.uz/maps/org/ielts_lab/184670589711/reviews/"
  },
  {
    id: 2,
    name: "Козим муминов",
    text: "Лучший центр в мире",
    rating: 5,
    date: "1 месяц назад",
    avatar: user,
    source: "Yandex",
    color: "#FF0000",
    url: "https://yandex.uz/maps/org/ielts_lab/184670589711/reviews/"
  },
    {
    id: 3,
    name: "Fakhriev Khushvakt",
    text: "Отличный ученый центр по подготовке к IELTS",
    rating: 5,
    date: "1 месяц назад",
    avatar: user,
    source: "Yandex",
    color: "#FF0000",
    url: "https://yandex.uz/maps/org/ielts_lab/184670589711/reviews/"
  },
  {
    id: 4,
    name: "Феруза Хусанбаева",
    text: "Самый лучший учебный центр советую, здесь делают реальные результаты и учителя очень вежливые и опытные особенно Самандар",
    rating: 5,
    date: "1 month ago",
    avatar: user,
    source: "Google",
    color: "#4285F4",
    url: "https://maps.app.goo.gl/AEBEpwroZUwbDb2q7"
  },
  {
    id: 5,
    name: "Асилбек Махкамхожаев 4 20",
    text: "Хорошее место для интенсивной подготовке к предстоящему экзамену",
    rating: 5,
    date: "2 weeks ago",
    avatar: user,
    source: "Google",
    color: "#4285F4",
    url: "https://maps.app.goo.gl/AEBEpwroZUwbDb2q7"
  },
    {
    id: 6,
    name: "Азиз",
    text: "Лучший центр в мире",
    rating: 5,
    date: "2 weeks ago",
    avatar: user,
    source: "Google",
    color: "#4285F4",
    url: "https://maps.app.goo.gl/AEBEpwroZUwbDb2q7"
  },
      {
    id: 7,
    name: "Sobura Solieva",
    text: "Отличный учебный центр для подготовки к IELTS! Профессиональные преподаватели, понятные объяснения и дружелюбная атмосфера. Рекомендую IELTS Lab всем, кто хочет получить высокий балл на IELTS.",
    rating: 5,
    date: "2 weeks ago",
    avatar: user,
    source: "Google",
    color: "#4285F4",
    url: "https://maps.app.goo.gl/AEBEpwroZUwbDb2q7"
  },
        {
    id: 8,
    name: "Asadulloh",
    text: "Highly recomended for inteligent students who want to show real result",
    rating: 5,
    date: "2 weeks ago",
    avatar: user,
    source: "Google",
    color: "#4285F4",
    url: "https://maps.app.goo.gl/AEBEpwroZUwbDb2q7"
  },
        {
    id: 9,
    name: "Islombek Torabekov",
    text: "The best learning center in the world",
    rating: 5,
    date: "2 weeks ago",
    avatar: user,
    source: "Google",
    color: "#4285F4",
    url: "https://maps.app.goo.gl/AEBEpwroZUwbDb2q7"
  },
          {
    id: 10,
    name: "Шердор",
    text: "The best learning centre",
    rating: 5,
    date: "2 weeks ago",
    avatar: user,
    source: "Google",
    color: "#4285F4",
    url: "https://maps.app.goo.gl/AEBEpwroZUwbDb2q7"
  },
            {
    id: 11,
    name: "A A",
    text: "WOW!!!",
    rating: 5,
    date: "2 weeks ago",
    avatar: user,
    source: "Google",
    color: "#4285F4",
    url: "https://maps.app.goo.gl/AEBEpwroZUwbDb2q7"
  },
  {
    id: 12,
    name: "Azizbek Sattorov",
    text: "Good.",
    rating: 5,
    date: "3 недели назад",
    avatar: user,
    source: "2GIS",
    color: "#00A85A",
    url: "https://2gis.uz/tashkent/firm/70000001114206612"
  },
  {
    id: 13,
    name: "Vladimir",
    text: "Лучшие на рынке по подготовки к сдаче IELTS",
    rating: 5,
    date: "2 месяца назад",
    avatar: user,
    source: "2GIS",
    color: "#00A85A",
    url: "https://2gis.uz/tashkent/firm/70000001114206612"
  }
];

export default function Reviewss({ onOpenForm }) {
  const { t } = useTranslation();
const sliderRef = useRef(null);
useEffect(() => {
  const slider = sliderRef.current;

  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  const scrollToForm = () => {

    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  const mouseDown = (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const mouseLeave = () => {
    isDown = false;
  };

  const mouseUp = () => {
    isDown = false;
  };

  const mouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;

    const walk = (x - startX) * 2;

    slider.scrollLeft = scrollLeft - walk;
  };

  slider.addEventListener("mousedown", mouseDown);
  slider.addEventListener("mouseleave", mouseLeave);
  slider.addEventListener("mouseup", mouseUp);
  slider.addEventListener("mousemove", mouseMove);

  return () => {
    slider.removeEventListener("mousedown", mouseDown);
    slider.removeEventListener("mouseleave", mouseLeave);
    slider.removeEventListener("mouseup", mouseUp);
    slider.removeEventListener("mousemove", mouseMove);
  };
}, []);
  const shouldAnimate = reviews.length > 3;

  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t("testimonials_title") || "Что говорят о нас"}
          </h2>

          <div className={styles.platforms}>
            <span>Google</span>
            <span>Yandex</span>
            <span>2GIS</span>
          </div>
        </div>

        <div className={styles.sliderWrapper} ref={sliderRef}>
          <div
            className={`${styles.sliderTrack} ${
              shouldAnimate ? styles.animate : ""
            }`}
          >
            {[
              ...reviews,
              ...(shouldAnimate ? reviews : [])
            ].map((review, index) => (
              <a
                key={`${review.id}-${index}`}
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.reviewCard}
              >
                <div className={styles.top}>
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className={styles.avatar}
                  />

                  <div>
                    <h4>{review.name}</h4>
                  </div>

                  <div
                    className={styles.badge}
                    style={{
                      background: review.color
                    }}
                  >
                    {review.source}
                  </div>
                </div>

                <div className={styles.stars}>
                  {"★".repeat(review.rating)}
                </div>

                <p>{review.text}</p>
              </a>
            ))}
          </div>
        </div>
                        <div className={styles.ctaCenter}>
      <button
        onClick={onOpenForm}
        className={styles.ctaBig}
      >
        {t('open_form')}
      </button>
      </div>
      </div>

    </section>
  );
}