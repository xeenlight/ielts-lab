import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import hederlogo from '../../assets/headerlogo.png';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };
  const currentLang = i18n.language;

  const langs = {
    en: { label: 'EN', flag: '🇺🇸' },
    ru: { label: 'RU', flag: '🇷🇺' },
    uz: { label: 'UZ', flag: '🇺🇿' }
  };
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
                  <img className={styles.logo} src={hederlogo} alt="IELTS Lab Logo" />
        <div className={styles.left}>


          <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/about">{t('about')}</NavLink>
          </nav>
        </div>

        <div className={styles.right}>
          {/* 🌐 Language */}
          <div className={styles.lang}>
            <button
              onClick={() => setOpen(!open)}
              className={styles.langBtn}
            >
              {langs[currentLang]?.label}
            </button>

            {open && (
              <div className={styles.dropdown}>
                <button onClick={() => changeLang('en')}>🇺🇸 English</button>
                <button onClick={() => changeLang('uz')}>🇺🇿 O'zbek</button>
                <button onClick={() => changeLang('ru')}>🇷🇺 Русский</button>
              </div>
            )}
          </div>

          {/* 🍔 Burger */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}