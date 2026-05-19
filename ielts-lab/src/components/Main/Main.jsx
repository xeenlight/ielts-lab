import styles from "./Main.module.css";

function Main() {
  return (
    <section className={styles.hero}>
      {/* MOLECULES */}
      <div className={`${styles.molecule} ${styles.molecule1}`}></div>
      <div className={`${styles.molecule} ${styles.molecule2}`}></div>
      <div className={`${styles.molecule} ${styles.molecule3}`}></div>

      <div className={`${styles.molecule} ${styles.molecule4}`}></div>
      <div className={`${styles.molecule} ${styles.molecule5}`}></div>
      <div className={`${styles.molecule} ${styles.molecule6}`}></div>

      {/* GLOW */}
      <div className={styles.glow}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            ENGLISH
            <span>FOR THE FUTURE</span>
          </h1>

          <p className={styles.description}>
            Практические курсы английского языка
            <br />
            для учебы, карьеры и уверенного будущего.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Бесплатный урок
            </button>

            <button className={styles.secondaryBtn}>
              Смотреть видео
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>Студентов</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.statItem}>
              <h3>7.5</h3>
              <p>Средний IELTS</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.statItem}>
              <h3>95%</h3>
              <p>Довольных учеников</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;