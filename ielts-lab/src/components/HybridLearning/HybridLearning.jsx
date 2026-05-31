import styles from "./HybridLearning.module.css";
import laptop from "../../assets/laptop.png";
import monitor from "../../assets/monitor.png";
import video from "../../assets/video.png";
import folder from "../../assets/folder.png";
import hours from "../../assets/hours.png";
import growth from "../../assets/growth.png";
import sync from "../../assets/sync.png";
import user from "../../assets/user.png";
import courthouse from "../../assets/courthouse.png";
import christmas from "../../assets/christmas.png";
import silhouette from "../../assets/silhouette.png";
import dart from "../../assets/dart.png";
import rocket from "../../assets/rocket.png";
import openbook from "../../assets/openbook.png";
import earth from "../../assets/earth.png";

export default function HybridLearning() {
  return (
    <section className={styles.hybrid}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Мы объединяем преимущества
          <span> онлайн и офлайн обучения</span>
        </h2>

        <p className={styles.subtitle}>
          Сочетаем гибкость технологий и живое общение, чтобы вы достигли
          максимального результата в изучении английского языка.
        </p>

        <div className={styles.cards}>
          {/* ONLINE */}
          <div className={styles.card}>
            <div className={styles.header}>
            <div className={styles.icon}>
                <img src={laptop} alt="Laptop Icon" className={styles.iconImage} />
            </div>
              <h3>ONLINE</h3>
            </div>

            <ul>
              <li>Удобная образовательная платформа</li>
              <li>Записи всех уроков без ограничений</li>
              <li>Домашние задания и материалы в одном месте</li>
              <li>Доступ к курсу 24/7 с любого устройства</li>
              <li>Интерактивные тесты и тренажёры IELTS</li>
              <li>Возможность пересматривать сложные темы</li>
              <li>Самостоятельная подготовка в удобном темпе</li>
            </ul>
          </div>

          {/* CENTER */}
<div className={styles.centerWrapper}>
  <div className={`${styles.plus} ${styles.plusLeft}`}>
    +
  </div>

  <div className={styles.centerCard}>
    <div className={styles.centerIcon}>
      <img src={christmas} alt="Christmas Icon" className={styles.iconImage} />
    </div>

    <h3>ЛУЧШЕЕ ИЗ ДВУХ МИРОВ</h3>

    <ul>
      <li>Гибкость онлайн-обучения</li>
      <li>Эффективность живых занятий</li>
      <li>Максимум практики Speaking</li>
      <li>Постоянный доступ к материалам</li>
      <li>Быстрая подготовка к IELTS</li>
      <li>Системный контроль прогресса</li>
      <li>Поддержка преподавателей</li>
    </ul>
  </div>

  <div className={`${styles.plus} ${styles.plusRight}`}>
    +
  </div>
</div>

          {/* OFFLINE */}
          <div className={styles.card}>
            <div className={styles.header}>
              <div className={styles.icon}>
                <img src={courthouse} alt="Courthouse Icon" className={styles.iconImage} />
              </div>
              <h3>OFFLINE</h3>
            </div>

            <ul>
              <li>Полное сопровождение преподавателей</li>
              <li>Живые уроки и постоянная практика</li>
              <li>Контроль прогресса на каждом этапе</li>
              <li>Мгновенная обратная связь от учителя</li>
              <li>Speaking-сессии и работа над ошибками</li>
              <li>Мотивация и дисциплина учебной среды</li>
              <li>Поддержка и общение с другими студентами</li>
            </ul>
          </div>
        </div>

        {/* RESULTS */}

        <div className={styles.results}>
          <div className={styles.resultsTitle}>

                <img src={silhouette} alt="Sync Icon" className={styles.iconImage} />


            <h3>
              Результат,
              <br />
              который вы получаете
            </h3>
          </div>

          <div className={styles.resultItem}>
                        <div className={styles.smallIcon}>
                <img src={dart} alt="Dart Icon" className={styles.iconsmallIcon} />
            </div>
            <span>Высокий балл на IELTS</span>
          </div>

          <div className={styles.resultItem}>
                                    <div className={styles.smallIcon}>
                <img src={rocket} alt="Rocket Icon" className={styles.iconsmallIcon} />
            </div>
            <span>Реальный прогресс каждую неделю</span>
          </div>

          <div className={styles.resultItem}>
                                    <div className={styles.smallIcon}>
                <img src={openbook} alt="Open Book Icon" className={styles.iconsmallIcon} />
            </div>
            <span>Глубокое понимание языка</span>
          </div>

          <div className={styles.resultItem}>
                                    <div className={styles.smallIcon}>
                <img src={earth} alt="Earth Icon" className={styles.iconsmallIcon} />
            </div>
            <span>Свобода и возможности</span>
          </div>
        </div>
      </div>
    </section>
  );
}