import styles from './Main.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ielts_Lab_Team from '../../assets/ieltsLabTeam1.png';

export default function Main() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            {t('hero_sub')}
          </div>
<img className={styles.teamImage} src={ielts_Lab_Team} alt="IELTS Lab Team1" />
          <h1 className={styles.title}>
            ENGLISH <br />
            <span>FOR THE FUTURE</span>
          </h1>

          <p className={styles.desc}>
            {t('hero_desc')}
          </p>

          <div className={styles.actions}>
            <Link to="/course" className={styles.primaryBtn}>
              {t('open_form')}
            </Link>

            <button className={styles.secondaryBtn}>
              ▶ Смотреть видео
            </button>
          </div>

          <div className={styles.stats}>
            <div>
              <h3>500+</h3>
              <p>Студентов</p>
            </div>

            <div>
              <h3>7.5</h3>
              <p>Средний IELTS</p>
            </div>

            <div>
              <h3>95%</h3>
              <p>Довольных учеников</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.glow}></div>
        </div>
      </div>

      {/* FEATURES */}
      <div className={styles.features}>
        <div className={styles.card}>
          <h4>Опытные преподаватели</h4>
          <p>Международные сертификаты и опыт от 5 лет</p>
        </div>

        <div className={styles.card}>
          <h4>Современная методика</h4>
          <p>Практика, speaking club и реальные кейсы</p>
        </div>

        <div className={styles.card}>
          <h4>IELTS подготовка</h4>
          <p>Подготовка к IELTS, CEFR и TOEFL</p>
        </div>
      </div>
    </section>
  );
}