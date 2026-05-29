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
      results_desc:
        "Our students consistently achieve high band scores and reach their goals.",
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
      form_success: "Application sent!",

      teachers_title: "OUR TEACHERS",
      teachers_subtitle:
        "Highly qualified specialists with CELTA certificates and IELTS 9.0 results",

      // Для модального окна
      teacher_experience: "Experience",
      teacher_students: "Students",




      teacher_1_role: "Founder",
teacher_1_exp: "More than 5 years",
teacher_1_students: "7.0+/8.0",
teacher_1_band: "IELTS 9.0",
teacher_1_desc:
  "Founder of IELTS Lab. Expert in IELTS preparation with more than 5 years of teaching experience.",

teacher_2_name: "Maxkamov Asilbek",
teacher_2_role: "Co-Founder",
teacher_2_exp: "More than 5 years",
teacher_2_band: "IELTS 9.0",
teacher_2_students: "3000+",
teacher_2_desc:
  "Co-founder of IELTS Lab and IELTS 9.0 instructor.",

teacher_3_name: "Nazirov Samandar",
teacher_3_role: "Co-Founder",
teacher_3_exp: "More than 5 years",
teacher_3_band: "IELTS 9.0",
teacher_3_students: "2500+",
teacher_3_desc:
  "Experienced IELTS instructor specializing in comprehensive preparation.",

teacher_4_name: "Akramova Munisa",
teacher_4_role: "Teacher",
teacher_4_exp: "About 3 years",
teacher_4_band: "IELTS 9.0",
teacher_4_students: "1000+",
teacher_4_desc:
  "IELTS teacher with a modern and practical teaching approach.",

teacher_5_name: "Vahabova Zebo",
teacher_5_role: "Teacher",
teacher_5_exp: "About 3 years",
teacher_5_band: "IELTS 9.0",
teacher_5_students: "1200+",
teacher_5_desc:
  "Reading and Listening specialist.",

teacher_6_name: "Salieva Soburahonim",
teacher_6_role: "Teacher",
teacher_6_exp: "About 3 years",
teacher_6_band: "IELTS 9.0",
teacher_6_students: "900+",
teacher_6_desc:
  "IELTS teacher focused on Speaking development.",

teacher_7_name: "Toxirov Azamhoja",
teacher_7_role: "Teacher",
teacher_7_exp: "About 3 years",
teacher_7_band: "IELTS 9.0",
teacher_7_students: "850+",
teacher_7_desc:
  "Writing and grammar expert.",

teacher_8_name: "Alikhujaev Azizhon",
teacher_8_role: "Speaking Teacher",
teacher_8_exp: "About 3 years",
teacher_8_band: "IELTS 9.0",
teacher_8_students: "1500+",
teacher_8_desc:
  "IELTS Speaking specialist focused on fluency and pronunciation.",

teacher_9_name: "Sagdulayev Asadullo",
teacher_9_role: "Teacher",
teacher_9_exp: "About 3 years",
teacher_9_band: "IELTS 9.0",
teacher_9_students: "1000+",
teacher_9_desc:
  "IELTS teacher with an individual approach to every student.",

teacher_10_name: "Baxriddinov Elnur",
teacher_10_role: "Speaking Teacher",
teacher_10_exp: "About 3 years",
teacher_10_band: "IELTS 9.0",
teacher_10_students: "1400+",
teacher_10_desc:
  "Professional IELTS Speaking instructor with a 9.0 Speaking score.",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",

      hero_sub: "INTER NATION ENGLISH SCHOOL",
      hero_title: "ENGLISH FOR THE FUTURE",
      hero_desc: "Учись. Практикуйся. Достигай.",
      hero_desc2:
        "Практические курсы английского языка для уверенного будущего",

      feature1_title: "Опытные преподаватели",
      feature1_desc: "Практикующие эксперты",

      feature2_title: "Современная методика",
      feature2_desc: "Эффективное обучение",

      feature3_title: "Реальные результаты",
      feature3_desc: "Говорите уверенно",

      results_sub: "ДОСТИЖЕНИЯ УЧЕНИКОВ",
      results_title: "РЕЗУЛЬТАТЫ НАШИХ УЧЕНИКОВ",
      results_desc:
        "Наши студенты стабильно получают высокий бал сноска внизу под главным текстом",
      results_desc2: "Присоединяйся и выведи свою подготовку на новый уровень",

      free_sub: "БЕСПЛАТНЫЕ МАТЕРИАЛЫ",
      free_title: "<primary>Бесплатные</primary> материалы для самостоятельной подготовки",
      free_desc:
        "Видео, электронные книги, шаблоны и ещё больше помощи что бы помочь вам подготовиться лучше",

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
      form_success: "Заявка отправлена!",

      // В ru:
      course_title: "IELTS Lab — Полный Курс",
      course_subtitle: "Подготовка к IELTS за 8–12 недель с экспертами",
      course_benefits_title: "Что вы получите на курсе",
      testimonials_title: "Отзывы наших студентов",
      form_subtitle: "Оставьте заявку и мы свяжемся с вами в ближайшее время",

      testimonial1:
        "Благодаря курсу я сдал IELTS с первого раза на 8.0! Особенно помог Speaking и Writing.",
      testimonial1_name: "Алина Смирнова",

      testimonial2:
        "Отличная программа. Много практики и реальных заданий. Рекомендую!",
      testimonial2_name: "Мухаммад Али",

      testimonial3:
        "Самый эффективный курс из всех, что я проходила. Преподаватели — огонь!",
      testimonial3_name: "Нодира Рахимова",

      // Аналогично добавь в en и uz

      faq_title: "Часто задаваемые вопросы",

      faq1_q: "Что будет на курсе IELTS Lab?",
      faq1_a: "Это не просто лекции. Это интенсивная практическая программа...",

      faq2_q: "Сколько длится курс?",
      faq2_a: "Курс длится 8–12 недель. Занятия 3 раза в неделю.",

      faq3_q: "Подойдёт ли курс мне?",
      faq3_a:
        "Курс подходит для уровня B1 и выше. Подходит как новичкам, так и тем, кто хочет улучшить свой результат.",

      faq4_q: "Сколько стоит курс?",
      faq4_a:
        "Стоимость начинается от X сум. Оставьте заявку — мы подберём лучший вариант для вас.",

      faq5_q: "Что я получу по окончании курса?",
      faq5_a:
        "Вы получите уверенность в английском, стратегии сдачи IELTS и желаемый балл.",

      // ... твои существующие ключи ...

      teachers_title: "НАШИ ПРЕПОДАВАТЕЛИ",
      teachers_subtitle:
        "Высококвалифицированные специалисты, с многолетним опытом за плечами",

      teacher_experience: "Опыт",
      teacher_students: "Студентов",


      

    teacher_1_name: "Фахриев Хушвакт",
teacher_1_role: "Основатель",
teacher_1_exp: "Более 5 лет",
teacher_1_students: "7.0+/8.0",
teacher_1_desc:
  "Основатель IELTS Lab. Эксперт по подготовке к IELTS с опытом преподавания более 5 лет.",

teacher_2_name: "Макхамов Асилбек",
teacher_2_role: "Сооснователь",
teacher_2_exp: "Более 5 лет",
teacher_2_students: "3000+",
teacher_2_desc:
  "Сооснователь IELTS Lab и преподаватель с результатом IELTS 9.0.",

teacher_3_name: "Назиров Самандар",
teacher_3_role: "Сооснователь",
teacher_3_exp: "Более 5 лет",
teacher_3_students: "2500+",
teacher_3_desc:
  "Опытный преподаватель IELTS, специализирующийся на комплексной подготовке.",

teacher_4_name: "Акрамова Муниса",
teacher_4_role: "Преподаватель",
teacher_4_exp: "Около 3 лет",
teacher_4_students: "1000+",
teacher_4_desc:
  "Преподаватель IELTS с современным и практическим подходом.",

teacher_5_name: "Вахабова Зебо",
teacher_5_role: "Преподаватель",
teacher_5_exp: "Около 3 лет",
teacher_5_students: "1200+",
teacher_5_desc:
  "Специалист по Reading и Listening.",

teacher_6_name: "Салиева Собурахоним",
teacher_6_role: "Преподаватель",
teacher_6_exp: "Около 3 лет",
teacher_6_students: "900+",
teacher_6_desc:
  "Преподаватель IELTS с акцентом на развитие Speaking.",

teacher_7_name: "Тохиров Азамходжа",
teacher_7_role: "Преподаватель",
teacher_7_exp: "Около 3 лет",
teacher_7_students: "850+",
teacher_7_desc:
  "Эксперт по Writing и грамматике.",

teacher_8_name: "Алихужаев Азизхон",
teacher_8_role: "Speaking преподаватель",
teacher_8_exp: "Около 3 лет",
teacher_8_students: "1500+",
teacher_8_desc:
  "Специалист по IELTS Speaking. Развивает fluency и pronunciation.",

teacher_9_name: "Сагдулаев Асадулло",
teacher_9_role: "Преподаватель",
teacher_9_exp: "Около 3 лет",
teacher_9_students: "1000+",
teacher_9_desc:
  "Преподаватель IELTS с индивидуальным подходом к каждому студенту.",

teacher_10_name: "Бахриддинов Элнур",
teacher_10_role: "Speaking преподаватель",
teacher_10_exp: "Около 3 лет",
teacher_10_students: "1400+",
teacher_10_desc:
  "Профессиональный IELTS Speaking преподаватель с результатом 9.0 Speaking.",
    },
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
      results_desc:
        "Bizning o‘quvchilarimiz yuqori ballarga erishib, o‘z maqsadlariga yetishmoqda.",
      results_desc2:
        "Siz ham qo‘shiling va ingliz tilingizni yangi bosqichga olib chiqing",

      free_sub: "BEPUL MATERIALLAR",
      free_title: "BEPUL O‘RGANISHNI BOSHLANG",
      free_desc:
        "Foydali materiallarni yuklab oling va ingliz tilingizni rivojlantiring",

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
      form_success: "Ariza yuborildi!",

      teachers_title: "BIZNING O‘QITUVCHILARIMIZ",
      teachers_subtitle:
        "CELTA sertifikatiga ega va IELTS 9.0 natijasiga erishgan yuqori malakali mutaxassislar",

      teacher_experience: "Tajriba",
      teacher_students: "O‘quvchilar",



      


    teacher_1_name: "Faxriyev Xushvaqt",
teacher_1_role: "Asoschi",
teacher_1_exp: "5 yildan ortiq",
teacher_1_students: "7.0+/8.0",
teacher_1_desc:
  "IELTS Lab asoschisi. 5 yildan ortiq tajribaga ega IELTS mutaxassisi.",

teacher_2_name: "Maxkamov Asilbek",
teacher_2_role: "Hammuassis",
teacher_2_exp: "5 yildan ortiq",
teacher_2_students: "3000+",
teacher_2_desc:
  "IELTS Lab hammuassisi va IELTS 9.0 natijaga ega o‘qituvchi.",

teacher_3_name: "Nazirov Samandar",
teacher_3_role: "Hammuassis",
teacher_3_exp: "5 yildan ortiq",
teacher_3_students: "2500+",
teacher_3_desc:
  "Kompleks IELTS tayyorgarligi bo‘yicha tajribali o‘qituvchi.",

teacher_4_name: "Akramova Munisa",
teacher_4_role: "O‘qituvchi",
teacher_4_exp: "Taxminan 3 yil",
teacher_4_students: "1000+",
teacher_4_desc:
  "Zamonaviy va amaliy yondashuvga ega IELTS o‘qituvchisi.",

teacher_5_name: "Vahabova Zebo",
teacher_5_role: "O‘qituvchi",
teacher_5_exp: "Taxminan 3 yil",
teacher_5_students: "1200+",
teacher_5_desc:
  "Reading va Listening bo‘yicha mutaxassis.",

teacher_6_name: "Salieva Soburahonim",
teacher_6_role: "O‘qituvchi",
teacher_6_exp: "Taxminan 3 yil",
teacher_6_students: "900+",
teacher_6_desc:
  "Speaking rivojlantirishga ixtisoslashgan IELTS o‘qituvchisi.",

teacher_7_name: "Toxirov Azamhoja",
teacher_7_role: "O‘qituvchi",
teacher_7_exp: "Taxminan 3 yil",
teacher_7_students: "850+",
teacher_7_desc:
  "Writing va grammatika bo‘yicha mutaxassis.",

teacher_8_name: "Alikhujaev Azizhon",
teacher_8_role: "Speaking o‘qituvchisi",
teacher_8_exp: "Taxminan 3 yil",
teacher_8_students: "1500+",
teacher_8_desc:
  "IELTS Speaking mutaxassisi. Fluency va pronunciation ustida ishlaydi.",

teacher_9_name: "Sagdulayev Asadullo",
teacher_9_role: "O‘qituvchi",
teacher_9_exp: "Taxminan 3 yil",
teacher_9_students: "1000+",
teacher_9_desc:
  "Har bir talabaga individual yondashuvga ega IELTS o‘qituvchisi.",

teacher_10_name: "Baxriddinov Elnur",
teacher_10_role: "Speaking o‘qituvchisi",
teacher_10_exp: "Taxminan 3 yil",
teacher_10_students: "1400+",
teacher_10_desc:
  "9.0 Speaking natijaga ega professional IELTS Speaking o‘qituvchisi.",
    },
  },
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