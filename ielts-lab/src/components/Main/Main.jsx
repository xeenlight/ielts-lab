import styles from './Main.module.css';
import { useTranslation } from 'react-i18next';

import teacher1 from '../../assets/teacher1.png';
import teacher2 from '../../assets/teacher2.png';


export default function Main() {
  const { t } = useTranslation();

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${teacher1})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        
        {/* TEXT */}
        <div className={styles.left}>
          <h1>
            {t('hero_title')}
            <span> 7+</span>
          </h1>

          <p>
            {t('hero_desc')}
          </p>

          <button className={styles.cta}>
            {t('hero_btn')}
          </button>
        </div>

        {/* MOBILE IMAGES */}
        <div className={styles.mobileImages}>
          <img src={teacher2} alt="teacher" />
          <img src={teacher2} alt="teacher" />
        </div>

      </div>
    </section>
  );
}