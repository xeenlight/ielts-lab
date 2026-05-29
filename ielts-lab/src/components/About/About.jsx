import styles from "./About.module.css";

import brain from '../../assets/brain.png';
import growth from '../../assets/growth.png';
import earth from '../../assets/earth.png';

import ieltsLabTeam3 from '../../assets/ieltsLabTeam3.jpg';
import ieltslabteam1 from '../../assets/ieltslabteamtree.png';

import molecule1 from "../../assets/ielts Lab (1).png";
import molecule2 from "../../assets/ielts Lab (2).png";
import molecule3 from "../../assets/ielts Lab (3).png";
import molecule4 from "../../assets/ielts Lab (4).png";
import molecule5 from "../../assets/ielts Lab (5).png";
import molecule6 from "../../assets/ielts Lab (6).png";

function About() {
  return (
    <section className={styles.about}>
      {/* BACKGROUND GLOW */}
      <div className={styles.glow}></div>

{/* FLOATING MOLECULES */}

<img
  src={molecule1}
  className={`${styles.floating} ${styles.float1}`}
  alt=""
/>

<img
  src={molecule2}
  className={`${styles.floating} ${styles.float2}`}
  alt=""
/>

<img
  src={molecule3}
  className={`${styles.floating} ${styles.float3}`}
  alt=""
/>

<img
  src={molecule4}
  className={`${styles.floating} ${styles.float4}`}
  alt=""
/>

<img
  src={molecule5}
  className={`${styles.floating} ${styles.float5}`}
  alt=""
/>

<img
  src={molecule6}
  className={`${styles.floating} ${styles.float6}`}
  alt=""
/>

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

{/* HYBRID SECTION */}
<section className={styles.hybridSection}>
  <div className={styles.container}>

    <div className={styles.hybridHeader}>
      <p className={styles.hybridLabel}>
        HYBRID FORMAT
      </p>

      <h2>
        Мы сочетаем преимущества
        каждого из форматов
      </h2>
    </div>

    <div className={styles.hybridGrid}>

      {/* ONLINE */}
      <div className={styles.hybridCard}>

        <div className={styles.hybridTop}>
          <div className={styles.hybridIcon}>
            💻
          </div>

          <h3>Онлайн</h3>
        </div>

        <ul>
          <li>Удобная платформа</li>
          <li>Записи уроков</li>
          <li>
            Возможности для самостоятельной подготовки
          </li>
        </ul>

      </div>

      {/* OFFLINE */}
      <div className={styles.hybridCard}>

        <div className={styles.hybridTop}>
          <div className={styles.hybridIcon}>
            🎓
          </div>

          <h3>Офлайн</h3>
        </div>

        <ul>
          <li>Полное сопровождение</li>
          <li>Живые уроки</li>
          <li>Контроль прогресса</li>
        </ul>

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

            <h3>Живые уроки</h3>

<p>
   Во многих учебных центрах, если студент не понял тему — это его проблема. У нас наоборот: если ученик что-то не понял, значит мы должны объяснить по-другому и довести до результата.

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


          </div>
        </div>
      </div>
    </section>
  );
}

export default About;