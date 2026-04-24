import styles from './Main.module.css';
import { useTranslation } from 'react-i18next';

import ielts_Lab_Team from '../../assets/ieltsLabTeam.png';
import ielts_Lab_Team_Mob from '../../assets/ieltsLabTeamMob.png';
import iconteam from '../../assets/iconteam_ieltsLab.png';
import iconprofit from '../../assets/iconprofit_ieltsLabTeam.png';
import iconbook from '../../assets/iconbook_ieltsLabTeam.png';

export default function Main() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      
      <img src={ielts_Lab_Team} alt="bg" className={styles.bg} />
      <img src={ielts_Lab_Team_Mob} alt="bg" className={styles.bgmobile} />
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        
        <p className={styles.sub}>{t('hero_sub')}</p>

        <h1 className={styles.title}>
          {t('hero_title')}
        </h1>

        <p className={styles.desc}>{t('hero_desc')}</p>
        <p className={styles.desc2}>{t('hero_desc2')}</p>

        {/* FEATURES */}
        <div className={styles.features}>
          
          <div className={styles.feature}>
            <div className={styles.icon}>
              <img className={styles.img} src={iconbook} alt="" />
            </div>
            <div>
              <h4>{t('feature1_title')}</h4>
              <p>{t('feature1_desc')}</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}>
              <img className={styles.img} src={iconteam} alt="" />
            </div>
            <div>
              <h4>{t('feature2_title')}</h4>
              <p>{t('feature2_desc')}</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}>
              <img className={styles.img} src={iconprofit} alt="" />
            </div>
            <div>
              <h4>{t('feature3_title')}</h4>
              <p>{t('feature3_desc')}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}