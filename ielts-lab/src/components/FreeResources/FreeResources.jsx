import styles from './FreeResources.module.css';
import { useTranslation } from 'react-i18next';

import img1 from '../../assets/LogoFooter.png';
import img2 from '../../assets/LogoFooter.png';
import img3 from '../../assets/LogoFooter.png';
import img4 from '../../assets/LogoFooter.png';
import img5 from '../../assets/LogoFooter.png';

export default function FreeResources() {
  const { t } = useTranslation();

  const data = [
    { img: img1, title: t('free_item1') },
    { img: img2, title: t('free_item2') },
    { img: img3, title: t('free_item3') },
    { img: img4, title: t('free_item4') },
    { img: img5, title: t('free_item5') },
  ];

  return (
    <section className={styles.section}>
      
      <p className={styles.sub}>{t('free_sub')}</p>

      <h2 className={styles.title}>
        {t('free_title')}
      </h2>

      <p className={styles.desc}>{t('free_desc')}</p>

      <div className={styles.grid}>
        {data.map((item, i) => (
          <div key={i} className={styles.card}>
            
            <img src={item.img} alt="" />

            <h3>{item.title}</h3>

            <button>{t('free_btn')}</button>

          </div>
        ))}
      </div>

    </section>
  );
}