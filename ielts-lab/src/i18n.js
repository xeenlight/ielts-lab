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
  feature3_desc: "Speak confidently",

  results_sub: "STUDENT ACHIEVEMENTS",
results_title: "REAL IELTS RESULTS",
results_desc: "Our students consistently achieve high band scores and reach their goals.",
results_desc2: "Join them and take your English to the next level",


free_sub: "FREE MATERIALS",
free_title: "START LEARNING FOR FREE",
free_desc: "Download useful materials and improve your English today",

free_btn: "Download",

free_item1: "IELTS Vocabulary List",
free_item2: "Grammar Guide",
free_item3: "Speaking Tips",
free_item4: "Writing Samples",
free_item5: "Listening Practice",


open_form: "Enroll now",
form_title: "Leave your request",
form_name: "Your name",
form_phone: "Phone number",
form_btn: "Send",
form_success: "Application sent!"
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
  feature3_desc: "Говорите уверенно",


  results_sub: "ДОСТИЖЕНИЯ УЧЕНИКОВ",
results_title: "РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ IELTS",
results_desc: "Наши студенты стабильно получают высокие баллы и достигают своих целей.",
results_desc2: "Присоединяйся и выведи свой английский на новый уровень",



free_sub: "БЕСПЛАТНЫЕ МАТЕРИАЛЫ",
free_title: "НАЧНИ УЧИТЬСЯ БЕСПЛАТНО",
free_desc: "Скачай полезные материалы и улучшай свой английский уже сегодня",

free_btn: "Скачать",

free_item1: "Словарь IELTS",
free_item2: "Грамматический гид",
free_item3: "Советы по Speaking",
free_item4: "Примеры Writing",
free_item5: "Практика Listening",


open_form: "Записаться на курс",
form_title: "Оставьте заявку",
form_name: "Ваше имя",
form_phone: "Номер телефона",
form_btn: "Отправить",
form_success: "Заявка отправлена!"
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
  feature3_desc: "Ishonch bilan gapiring",

  results_sub: "O‘QUVCHILAR NATIJALARI",
results_title: "HAQIQIY IELTS NATIJALARI",
results_desc: "Bizning o‘quvchilarimiz yuqori ballarga erishib, o‘z maqsadlariga yetishmoqda.",
results_desc2: "Siz ham qo‘shiling va ingliz tilingizni yangi bosqichga olib chiqing",

free_sub: "BEPUL MATERIALLAR",
free_title: "BEPUL O‘RGANISHNI BOSHLANG",
free_desc: "Foydali materiallarni yuklab oling va ingliz tilingizni rivojlantiring",

free_btn: "Yuklab olish",

free_item1: "IELTS lug‘ati",
free_item2: "Grammatika qo‘llanma",
free_item3: "Speaking bo‘yicha maslahatlar",
free_item4: "Writing namunalar",
free_item5: "Listening mashqlari",



open_form: "Kursga yozilish",
form_title: "Ariza qoldiring",
form_name: "Ismingiz",
form_phone: "Telefon raqami",
form_btn: "Yuborish",
form_success: "Ariza yuborildi!"
}
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// 🔥 сохраняем язык при каждом изменении
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export default i18n;