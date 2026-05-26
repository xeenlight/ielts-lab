import styles from "./About.module.css";
import brain from '../../assets/brain.png';
import growth from '../../assets/growth.png';
import earth from '../../assets/earth.png';
import ieltsLabTeam3 from '../../assets/ieltsLabTeam3.jpg';
import ieltslabteam1 from '../../assets/ieltslabteamtree.jpg';
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
  <div className={styles.topImage}>
    <img src={ieltslabteam1} alt="IELTS LAB" />
  </div>


</div>

        </div>
<div className={styles.timeline}>
  <div className={styles.timelineLine}></div>

  <div className={styles.timelineItem}>
    <span>START</span>
    <p>Базовый английский</p>
  </div>

  <div className={styles.timelineItem}>
    <span>STEP 2</span>
    <p>Подготовка к IELTS</p>
  </div>

  <div className={styles.timelineItem}>
    <span>STEP 3</span>
    <p>Регистрация на экзамен</p>
  </div>

  <div className={styles.timelineItem}>
    <span>6 MONTHS</span>
    <p>Средний путь студента</p>
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
  Каждый студент получает индивидуальный план обучения и постоянное
  сопровождение преподавателя на всём пути подготовки.
</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={growth} alt="Growth Icon" className={styles.iconImage} />
            </div>

            <h3>Быстрые результаты</h3>

<p>
  В среднем студенты достигают нужного уровня и готовности к IELTS
  примерно за 6 месяцев обучения.
</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img src={earth} alt="Earth Icon" className={styles.iconImage} />
            </div>

            <h3>Полное сопровождение</h3>

<p>
  Мы помогаем подготовиться к IELTS, зарегистрироваться на экзамен и
  уверенно пройти весь путь до результата.
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