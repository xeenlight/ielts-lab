import styles from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import hederlogo from '../../assets/headerlogo.png';

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  /* theme init */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  /* close burger on route change */
  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const currentLang = i18n.language;

  const langs = {
    en: { label: 'EN', flag: '🇺🇸' },
    ru: { label: 'RU', flag: '🇷🇺' },
    uz: { label: 'UZ', flag: '🇺🇿' }
  };

  return (
    <header className={styles.wrapper}>
      <div
        className={`${styles.header} ${
          menuOpen ? styles.headerOpen : ''
        }`}
      >
        {/* LOGO */}
        <img
          className={styles.logo}
          src={hederlogo}
          alt="IELTS Lab Logo"
        />

        {/* NAV */}
        <nav
          className={`${styles.nav} ${
            menuOpen ? styles.show : ''
          }`}
        >
          <NavLink to="/">{t('home')}</NavLink>
          <NavLink to="/about">{t('about')}</NavLink>
          <NavLink to="/course">{t('course')}</NavLink>
        </nav>

        {/* RIGHT */}
        <div className={styles.right}>
          {/* THEME */}
          <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            title="Change theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* LANGUAGE */}
          <div className={styles.lang}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={styles.langBtn}
            >
              {langs[currentLang]?.label}
            </button>

            {langOpen && (
              <div className={styles.dropdown}>
                <button onClick={() => changeLang('en')}>
                  🇺🇸 English
                </button>

                <button onClick={() => changeLang('uz')}>
                  🇺🇿 O'zbek
                </button>

                <button onClick={() => changeLang('ru')}>
                  🇷🇺 Русский
                </button>
              </div>
            )}
          </div>

          {/* BURGER */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}