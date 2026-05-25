import styles from "./About.module.css";
import brain from '../../assets/brain.png';
import growth from '../../assets/growth.png';
import earth from '../../assets/earth.png';
import ieltsLabTeam3 from '../../assets/ieltsLabTeam3.jpg';
function About() {
  return (
    <section className={styles.about}>
      {/* BACKGROUND GLOW */}
      <div className={styles.glow}></div>

      {/* MOLECULES */}
      <div className={`${styles.molecule} ${styles.molecule1}`}></div>
      <div className={`${styles.molecule} ${styles.molecule2}`}></div>

      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.left}>
            <p className={styles.subtitle}>ABOUT US</p>

            <h2 className={styles.title}>
              Мы создаём современное - мы учебный центр с новым подходом к обучению
            </h2>
          </div>

          <div className={styles.right}>
            <p>
              Наша школа помогает студентам уверенно говорить на английском,
              готовиться к IELTS, поступать в зарубежные университеты и строить
              международную карьеру.
            </p>

            <p>
              Мы объединяем современные методики, живую практику и сильную
              поддержку преподавателей, чтобы обучение было не только
              эффективным, но и действительно интересным.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
                <img src={brain} alt="Brain Icon" className={styles.iconImage} />
            </div>

            <h3>Индивидуальное внимание</h3>

            <p>
              Максимум разговорной практики, реальные ситуации и современный
              формат обучения без скучной теории.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={growth} alt="Growth Icon" className={styles.iconImage} />
            </div>

            <h3>Быстрые результаты</h3>

            <p>
              Наша программа помогает студентам быстрее преодолевать языковой
              барьер и уверенно использовать английский каждый день.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={earth} alt="Earth Icon" className={styles.iconImage} />
            </div>

            <h3>Полное сопровождение</h3>

            <p>
              IELTS, работа за границей, международные компании и зарубежные
              университеты — всё начинается с языка.
            </p>
          </div>
        </div>

        {/* BIG BLOCK */}
        <div className={styles.bigBlock}>
          <div className={styles.imageBlock}>
            {/* ВСТАВЬ СЮДА ФОТО */}
              <div className={styles.fakeImage}>
  <img src={ieltsLabTeam3} alt="About us" />
</div>
          </div>

          <div className={styles.info}>
            <h3>
              Мы верим, что английский — это не предмет, а инструмент для
              будущего.
            </h3>

            <p>
              Наша команда создаёт атмосферу, в которой студенты чувствуют
              уверенность и мотивацию. Мы уделяем внимание не только грамматике,
              но и мышлению, произношению, уверенности в разговоре и умению
              использовать язык в реальной жизни.
            </p>

            <p>
              Благодаря современному подходу, интерактивным занятиям и сильной
              системе поддержки студенты достигают результатов намного быстрее.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span>✔</span>
                <p>Современная методика обучения</p>
              </div>

              <div className={styles.feature}>
                <span>✔</span>
                <p>Подготовка к IELTS и экзаменам</p>
              </div>

              <div className={styles.feature}>
                <span>✔</span>
                <p>Постоянная практика разговорного английского</p>
              </div>

              <div className={styles.feature}>
                <span>✔</span>
                <p>Поддержка преподавателей и комьюнити</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;