import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import hederlogo from '../../assets/headerlogo.png';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Загрузка темы из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

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
      <div className={styles.header}>
        <img className={styles.logo} src={hederlogo} alt="IELTS Lab Logo" />

        <div className={styles.left}>
          <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/about">{t('about')}</NavLink>
          </nav>
        </div>

        <div className={styles.right}>
          {/* 🌗 Кнопка смены темы */}
          <button
            onClick={toggleTheme}
            className={styles.themeBtn}
            title="Сменить тему"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* 🌐 Language */}
          <div className={styles.lang}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={styles.langBtn}
            >
              {langs[currentLang]?.label}
            </button>

            {langOpen && (
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