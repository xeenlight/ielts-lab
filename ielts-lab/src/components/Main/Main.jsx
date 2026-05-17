import styles from "./Main.module.css";

function Main() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT */}
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

        {/* RIGHT */}
        <div className={styles.image}></div>
      </div>
    </section>
  );
}

export default Main;