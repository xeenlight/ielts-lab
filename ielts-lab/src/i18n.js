import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",

      hero_title: "Achieve IELTS",
      hero_desc: "We help you confidently pass the exam with expert teachers.",
      hero_btn: "Start learning"
    }
  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",

      hero_title: "Сдай IELTS на",
      hero_desc: "Подготовим тебя к экзамену с сильными преподавателями.",
      hero_btn: "Начать обучение"
    }
  },
  uz: {
    translation: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",

      hero_title: "IELTS dan",
      hero_desc: "Biz sizni kuchli ustozlar bilan tayyorlaymiz.",
      hero_btn: "Boshlash"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,

  lng: localStorage.getItem('lang') || 'ru', // 🔥 берём сохранённый язык
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;