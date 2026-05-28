import styles from "./About.module.css";
import brain from '../../assets/brain.png';
import growth from '../../assets/growth.png';
import earth from '../../assets/earth.png';
import ieltsLabTeam3 from '../../assets/ieltsLabTeam3.jpg';
import ieltslabteam1 from '../../assets/ieltslabteamtree.png';
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
              Мы учебный центр с новым подходом к обучению
            </h2>
          </div>

<div className={styles.right}>
  <div className={styles.topImage}>
    <img src={ieltslabteam1} alt="IELTS LAB" />
  </div>


</div>

        </div>

<section className={styles.hybridSection}>

  <div className={styles.hybridGlow}></div>

  <div className={styles.hybridContainer}>

    <div className={styles.hybridHeader}>
      <span className={styles.hybridBadge}>
        HYBRID SYSTEM
      </span>

      <h2>
        Онлайн + Офлайн = <span>единая система</span>
      </h2>

      <p>
        Полноценное обучение в любом формате
      </p>
    </div>

    <div className={styles.hybridGrid}>

      {/* LEFT */}

      <div className={styles.hybridCard}>

        <div className={styles.hybridCardGlow}></div>

        <div className={styles.hybridIcon}>
          🌐
        </div>

        <div className={styles.hybridInfo}>

          <span>Онлайн</span>

          <h3>Гибкость</h3>

          <ul>
            <li>Записи уроков</li>
            <li>Платформа</li>
            <li>Из любой точки</li>
          </ul>

        </div>

      </div>

      {/* CENTER */}

      <div className={styles.hybridCenter}>

        <div className={styles.hybridRing}></div>

        <div className={styles.hybridOrb}>
          SYNC
        </div>

      </div>

      {/* RIGHT */}

      <div className={styles.hybridCard}>

        <div className={styles.hybridCardGlow}></div>

        <div className={styles.hybridIcon}>
          🏛️
        </div>

        <div className={styles.hybridInfo}>

          <span>Офлайн</span>

          <h3>Практика</h3>

          <ul>
            <li>Speaking club</li>
            <li>Живое общение</li>
            <li>Контроль прогресса</li>
          </ul>

        </div>

      </div>

    </div>

  </div>

</section>





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
   Мы не только проходим уроки по IELTS , но также сопровождаем вас во всем пути и доводим каждого ученика до успешного результата
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