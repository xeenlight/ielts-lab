import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
  home: "Home",
  about: "About",

  hero_sub: "INTER NATION ENGLISH SCHOOL",
  hero_title: "ENGLISH FOR THE FUTURE",
  hero_desc: "Learn. Practice. Succeed.",
  hero_desc2: "Practical English courses for a confident future",

  feature1_title: "Experienced teachers",
  feature1_desc: "Practicing experts",

  feature2_title: "Modern methodology",
  feature2_desc: "Effective learning",

  feature3_title: "Real results",
  feature3_desc: "Speak confidently"
    }
  },
  ru: {
translation: {
  home: "Главная",
  about: "О нас",

  hero_sub: "INTER NATION ENGLISH SCHOOL",
  hero_title: "ENGLISH FOR THE FUTURE",
  hero_desc: "Учись. Практикуйся. Достигай.",
  hero_desc2: "Практические курсы английского языка для уверенного будущего",

  feature1_title: "Опытные преподаватели",
  feature1_desc: "Практикующие эксперты",

  feature2_title: "Современная методика",
  feature2_desc: "Эффективное обучение",

  feature3_title: "Реальные результаты",
  feature3_desc: "Говорите уверенно"
}
  },
  uz: {
translation: {
  home: "Bosh sahifa",
  about: "Biz haqimizda",

  hero_sub: "INTER NATION ENGLISH SCHOOL",
  hero_title: "ENGLISH FOR THE FUTURE",
  hero_desc: "O‘rganing. Mashq qiling. Muvaffaqiyatga erishing.",
  hero_desc2: "Ishonchli kelajak uchun amaliy ingliz tili kurslari",

  feature1_title: "Tajribali o‘qituvchilar",
  feature1_desc: "Amaliyotchi mutaxassislar",

  feature2_title: "Zamonaviy metodika",
  feature2_desc: "Samarali ta’lim",

  feature3_title: "Haqiqiy natijalar",
  feature3_desc: "Ishonch bilan gapiring"
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