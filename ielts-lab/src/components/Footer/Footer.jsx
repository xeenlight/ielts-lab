import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogoFooter from "../../assets/LogoFooter.png";
import IconTg from "../../assets/IconTg.webp";
import IconYT from "../../assets/IconYT.webp";
import IconInst from "../../assets/IconInst.webp";
import IconOff from "../../assets/IconOff.webp";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <img src={LogoFooter} alt="Logo" className={styles.logo} />

          <div className={styles.socials}>
            <div className={styles.socialsIcon}>
              <img src={IconTg} alt="Telegram" />
            </div>

            <div className={styles.socialsIcon}>
              <img src={IconYT} alt="YouTube" />
            </div>

            <div className={styles.socialsIcon}>
              <img src={IconInst} alt="Instagram" />
            </div>

            <div className={styles.socialsIcon}>
              <img src={IconOff} alt="Threads" />
            </div>

          </div>
        </div>

        {/* CENTER */}
        <div className={styles.nav}>
          <NavLink to="/">{t('home')}</NavLink>
          <NavLink to="/about">{t('about')}</NavLink>
          <NavLink to="/course">{t('course')}</NavLink>
        </div>



      </div>

      <div className={styles.bottom}>
        © 2026 IELTS Lab
      </div>
    </footer>
  );
}