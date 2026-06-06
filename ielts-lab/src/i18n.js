import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
en: {
  translation: {
    home: "Home",
    about: "About Us",
    course: "Course",






    alert_1_title: "Start your journey today!",
alert_1_text:
  "Book a free trial lesson and experience our teaching approach.",
alert_1_button: "Sign Up",

alert_2_title: "Prepare for IELTS with us!",
alert_2_text:
  "Get a personalized study plan and discover your current English level.",
alert_2_button: "Go to Mock",






hero_title_1: "WANT TO START PREPARING FOR <primary>IELTS</primary> <highlight>RIGHT NOW?</highlight>",

hero_desc_1: "One-on-one lessons for every student 🥊",
hero_desc_full:
  "Sign up <accent>today</accent> and start learning as early as <accent>tomorrow</accent>!",

hero_btn: "Free Trial Lesson",






location_subtitle: "LOCATION",
    location_title1: "IELTS LAB",
    location_title2: "LEARNING CENTER",
    location_description: "Our learning center is located in a convenient area of Tashkent. You can quickly open the route via Google Maps or Yandex Maps and get there without any problems.",
    location_address: "Tashkent, 1st passage Khromi, 4A",
    location_coordinates: "41°20'28.6\"N 69°12'16.4\"E",
    location_transport: "Convenient transport accessibility",
    location_hours: "Open daily from 09:00 to 21:00",
    location_google_maps: "Google Maps",
    location_yandex_maps: "Yandex Maps",
    location_open_in_maps: "Open in maps",





hero_final_title:
  "Finally get <accent>7+ in IELTS</accent>,<br/>without wasting <money>money</money><br/>and <time>time</time> <wasted>for nothing</wasted>.",
  hero_final_title_mobile:"Finally get <accent>7+ in IELTS</accent>,<br/>without wasting <money>money</money><br/>and <time>time</time> <wasted>for nothing</wasted>.",
    hero_final_join: "Join our",
    hero_final_live_classes: "live classes",
    hero_final_save: "and save a lot of time and nerves.",
    hero_final_daily_text: "Daily live one-on-one lessons with a teacher of <accent>C1</accent> level and extensive IELTS preparation experience." ,
    hero_final_daily: "Daily live 1-on-1 classes with teachers of",
    hero_final_c1: "C1",
    hero_final_experience: "level and many years of experience in preparing students for IELTS.",
    hero_final_button: "Leave a request",





    experience_subtitle: "IELTS LAB EXPERIENCE",
    experience_title: "What awaits you in IELTS LAB?",

    experience_card1_title: "Live 1-on-1 Lessons",
    experience_card1_desc: "Full attention from the teacher, individual preparation strategy and work specifically on your weak areas.",

    experience_card2_title: "Support at Every Stage",
    experience_card2_desc: "The teacher helps you throughout the entire training, not just during lessons.",

    experience_card3_title: "Authentic IELTS materials",
    experience_card3_desc: "We use only real exam tasks and up-to-date structures.",





    about_subtitle: "ABOUT US",
    about_title: "We are an educational center with a new approach to learning",

    about_card1_title: "Individual Attention",
    about_card1_desc: "Every student receives an individual study plan and constant support from the teacher throughout the entire preparation journey.",

    about_card2_title: "Fast Results",
    about_card2_desc: "On average, students reach the required level and IELTS readiness in about 6 months of study.",

    about_card3_title: "Live Lessons",
    about_card3_desc: "In many educational centers, if a student doesn't understand the topic, it's their problem. With us it's the opposite: if a student doesn't understand something, we must explain it differently and bring them to the result.",

    about_big_title: "We believe that English is not a subject, but a tool for the future.",
    about_big_desc1: "Our team creates an atmosphere where students feel confident and motivated. We pay attention not only to grammar, but also to thinking, pronunciation, confidence in speaking and the ability to use the language in real life.",
    about_big_desc2: "Thanks to a modern approach, interactive classes and a strong support system, students achieve results much faster.",






    hybrid_title1: "We combine the advantages of",
    hybrid_title2: "online and offline learning",

    hybrid_subtitle: "We combine the flexibility of technology and live communication so that you achieve maximum results in learning English.",

    hybrid_online: "ONLINE",
    hybrid_online_1: "Convenient educational platform",
    hybrid_online_2: "Unlimited access to all lesson recordings",
    hybrid_online_3: "Homework and materials in one place",
    hybrid_online_4: "24/7 course access from any device",
    hybrid_online_5: "Interactive IELTS tests and simulators",
    hybrid_online_6: "Ability to review difficult topics",
    hybrid_online_7: "Self-paced preparation",

    hybrid_best_of_both: "BEST OF BOTH WORLDS",
    hybrid_best_1: "Flexibility of online learning",
    hybrid_best_2: "Efficiency of live classes",
    hybrid_best_3: "Maximum Speaking practice",
    hybrid_best_4: "Constant access to materials",
    hybrid_best_5: "Fast IELTS preparation",
    hybrid_best_6: "Systematic progress control",
    hybrid_best_7: "Teacher support",

    hybrid_offline: "OFFLINE",
    hybrid_offline_1: "Full teacher support",
    hybrid_offline_2: "Live lessons and constant practice",
    hybrid_offline_3: "Progress monitoring at every stage",
    hybrid_offline_4: "Instant teacher feedback",
    hybrid_offline_5: "Speaking sessions and error correction",
    hybrid_offline_6: "Motivation and discipline of the learning environment",
    hybrid_offline_7: "Support and communication with other students",







    hero_sub: "INTER NATION ENGLISH SCHOOL",
    hero_title: "ENGLISH FOR THE FUTURE",
    hero_desc: "Learn. Practice. Achieve.",
    hero_desc2:
      "Practical English courses for a confident future",

    feature1_title: "Experienced Teachers",
    feature1_desc: "Industry Experts",

    feature2_title: "Modern Methodology",
    feature2_desc: "Effective Learning",

    feature3_title: "Real Results",
    feature3_desc: "Speak with Confidence",

    results_sub: "STUDENT ACHIEVEMENTS",
    results_title: "OUR STUDENTS' RESULTS",
    results_desc:
      "Our students consistently achieve high scores. See the note below the main text.",
    results_desc2:
      "Join us and take your preparation to the next level",

    free_sub: "FREE MATERIALS",
    free_title:
      "<primary>Free</primary> materials for self-study",
    free_desc:
      "Videos, e-books, templates, and even more resources to help you prepare better",

    free_btn: "Download",

    free_item1: "IELTS Vocabulary",
    free_item2: "Grammar Guide",
    free_item3: "Speaking Tips",
    free_item4: "Writing Samples",
    free_item5: "Listening Practice",

    open_form: "Join our courses",
    form_title: "Leave an Application",
    form_name: "Your Name",
    form_phone: "Phone Number",
    form_btn: "Submit",
    form_success: "Application Sent!",

    course_title: "IELTS Lab — Complete Course",
    course_subtitle:
      "IELTS preparation in 8–12 weeks with experts",
    course_benefits_title:
      "What You Will Get from the Course",
    testimonials_title: "Student Testimonials",
    form_subtitle:
      "Leave your application and we will contact you shortly",

    testimonial1:
      "Thanks to this course, I passed IELTS on my first attempt with an 8.0! Speaking and Writing helped me the most.",
    testimonial1_name: "Alina Smirnova",

    testimonial2:
      "Excellent program. Lots of practice and real tasks. Highly recommended!",
    testimonial2_name: "Muhammad Ali",

    testimonial3:
      "The most effective course I have ever taken. The teachers are amazing!",
    testimonial3_name: "Nodira Rakhimova",

    faq_title: "Frequently Asked Questions",

    faq1_q: "What will be included in the IELTS Lab course?",
    faq1_a:
      "This is not just a series of lectures. It is an intensive practical program...",

    faq2_q: "How long does the course last?",
    faq2_a:
      "The average duration of study at IELTS LAB is around 6 months. Some students achieve their target score much faster thanks to prior preparation, while others may need more time to successfully complete the course.",

    faq3_q: "Is this course suitable for me?",
    faq3_a:
      "To determine how well our course matches your goals and current English level, we recommend booking a free consultation. To register, contact us using the phone number provided below.",

    faq4_q: "How much does the course cost?",
    faq4_a:
      "The tuition fee depends on an individual study plan created specifically for each student. On average, the main course costs 1,500,000 UZS per month.",

    faq5_q: "What will I receive after completing the course?",
    faq5_a:
      "By the end of the course, you will be fully prepared for the IELTS exam and ready to take it with confidence. In addition, the IELTS LAB team will assist you with exam registration and answer any organizational questions.",

    teachers_title: "OUR TEACHERS",
    teachers_subtitle:
      "Highly qualified professionals with years of experience",

    teacher_experience: "Experience",
    teacher_students: "Students",

    teacher_1_name: "Khushvaqt Fakhriev",
    teacher_1_role: "Founder",
    teacher_1_exp: "Over 5 Years",
    teacher_1_students: "Founder",
    teacher_1_desc:
      "Founder of IELTS Lab. IELTS preparation expert with more than 5 years of teaching experience.",

    teacher_2_name: "Asilbek Makkhamov",
    teacher_2_role: "Co-Founder",
    teacher_2_exp: "Over 5 Years",
    teacher_2_students: "Co-Founder",
    teacher_2_desc:
      "Co-Founder of IELTS Lab and a teacher with an IELTS score of 9.0.",

    teacher_3_name: "Samandar Nazirov",
    teacher_3_role: "Co-Founder",
    teacher_3_exp: "Over 5 Years",
    teacher_3_students: "Co-Founder",
    teacher_3_desc:
      "Experienced IELTS instructor and Co-Founder of IELTS Lab.",

    teacher_4_name: "Munisa Akramova",
    teacher_4_role: "Teacher",
    teacher_4_exp: "About 3 Years",
    teacher_4_students: "Teacher",
    teacher_4_desc:
      "IELTS teacher with a modern and practical teaching approach.",

    teacher_5_name: "Zebo Vakhabova",
    teacher_5_role: "Teacher",
    teacher_5_exp: "About 3 Years",
    teacher_5_students: "Teacher",
    teacher_5_desc:
      "Teacher with 3 years of successful experience preparing students for IELTS.",

    teacher_6_name: "Soburakhonim Salieva",
    teacher_6_role: "Teacher",
    teacher_6_exp: "About 3 Years",
    teacher_6_students: "Teacher",
    teacher_6_desc:
      "IELTS teacher focused on developing Speaking skills.",

    teacher_7_name: "Azamkhoja Tokhirov",
    teacher_7_role: "Teacher",
    teacher_7_exp: "About 3 Years",
    teacher_7_students: "Teacher",
    teacher_7_desc:
      "Expert with more than 3 years of experience preparing students for IELTS.",

    teacher_8_name: "Azizkhon Alikhujayev",
    teacher_8_role: "Speaking Teacher",
    teacher_8_exp: "About 3 Years",
    teacher_8_students: "Speaking Teacher",
    teacher_8_desc:
      "IELTS Speaking specialist with a perfect Speaking score of 9.0.",

    teacher_9_name: "Asadullo Sagdullayev",
    teacher_9_role: "Teacher",
    teacher_9_exp: "About 3 Years",
    teacher_9_students: "Teacher",
    teacher_9_desc:
      "IELTS teacher with 3 years of professional experience.",

    teacher_10_name: "Elnur Bakhriddinov",
    teacher_10_role: "Speaking Teacher",
    teacher_10_exp: "About 3 Years",
    teacher_10_students: "Speaking Teacher",
    teacher_10_desc:
      "Professional IELTS Speaking teacher with a 9.0 Speaking score.",
  },
},
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",
          course: "Курс",






          alert_1_title: "Начните свой путь уже сегодня!",
alert_1_text:
  "Запишитесь на бесплатный пробный урок и оцените наш подход к обучению.",
alert_1_button: "Записаться",

alert_2_title: "Подготовьтесь к IELTS вместе с нами!",
alert_2_text:
  "Получите персональный план подготовки и узнайте свой текущий уровень английского.",
alert_2_button: "Перейти к Mock",





hero_title_1: "ХОЧЕШЬ НАЧАТЬ ГОТОВИТЬСЯ К <primary>IELTS</primary> <highlight>ПРЯМО СЕЙЧАС?</highlight>",

hero_desc_1: "Уроки один на один с каждым 🥊",
hero_desc_full:
  "Запишитесь <accent>сегодня</accent> и начните обучение уже <accent>завтра</accent>!",

hero_btn: "Бесплатный урок",







location_subtitle: "LOCATION",
    location_title1: "IELTS LAB",
    location_title2: "LEARNING CENTER",
    location_description: "Наш учебный центр расположен в удобной локации Ташкента. Вы можете быстро открыть маршрут через Google Maps или Yandex Maps и добраться без проблем.",
    location_address: "Ташкент, 1-й пр. Хроми, 4А",
    location_coordinates: "41°20'28.6\"N 69°12'16.4\"E",
    location_transport: "Удобная транспортная доступность",
    location_hours: "Открыто ежедневно с 09:00 до 21:00",
    location_google_maps: "Google Maps",
    location_yandex_maps: "Yandex Maps",
    location_open_in_maps: "Open in maps",







  hero_final_title: "Наконец получи<accent> 7+ по IELTS</accent>, <br/>не тратя <money>деньги</money> и <time>время</time> <wasted>впустую</wasted>.",
  
  hero_final_title_mobile: "Наконец получи<accent><br/>7+ по IELTS</accent>, не тратя <money>деньги</money> и <time>время</time> <wasted>впустую</wasted>.",

    hero_final_join: "Присоединяйся к нашим",
    hero_final_live_classes: "живым занятиям",
    hero_final_save: "и сэкономь кучу времени и нервов.",
    hero_final_daily_text: "Ежедневные живые индивидуальные занятия с преподавателем уровня <accent>C1</accent> и многолетним опытом подготовки студентов к IELTS.",
    hero_final_button: "Оставить заявку",





    experience_subtitle: "IELTS LAB EXPERIENCE",
    experience_title: "Что вас ждёт в IELTS LAB?",

    experience_card1_title: "Живые уроки 1 на 1",
    experience_card1_desc: "Полное внимание преподавателя, индивидуальная стратегия подготовки и работа именно над вашими слабыми местами.",

    experience_card2_title: "Поддержка на каждом этапе",
    experience_card2_desc: "Учитель помогает вам во время всего обучения, а не только на уроках.",

    experience_card3_title: "Настоящие IELTS материалы",
    experience_card3_desc: "Используем только реальные экзаменационные задания и актуальные структуры.",





    about_subtitle: "ABOUT US",
    about_title: "Мы учебный центр с новым подходом к обучению",

    about_card1_title: "Индивидуальное внимание",
    about_card1_desc: "Каждый студент получает индивидуальный план обучения и постоянное сопровождение преподавателя на всём пути подготовки.",

    about_card2_title: "Быстрые результаты",
    about_card2_desc: "В среднем студенты достигают нужного уровня и готовности к IELTS примерно за 6 месяцев обучения.",

    about_card3_title: "Живые уроки",
    about_card3_desc: "Во многих учебных центрах, если студент не понял тему — это его проблема. У нас наоборот: если ученик что-то не понял, значит мы должны объяснить по-другому и довести до результата.",

    about_big_title: "Мы верим, что английский — это не предмет, а инструмент для будущего.",
    about_big_desc1: "Наша команда создаёт атмосферу, в которой студенты чувствуют уверенность и мотивацию. Мы уделяем внимание не только грамматике, но и мышлению, произношению, уверенности в разговоре и умению использовать язык в реальной жизни.",
    about_big_desc2: "Благодаря современному подходу, интерактивным занятиям и сильной системе поддержки студенты достигают результатов намного быстрее.",





    hybrid_title1: "Мы объединяем преимущества",
    hybrid_title2: "онлайн и офлайн обучения",

    hybrid_subtitle: "Сочетаем гибкость технологий и живое общение, чтобы вы достигли максимального результата в изучении английского языка.",

    hybrid_online: "ONLINE",
    hybrid_online_1: "Удобная образовательная платформа",
    hybrid_online_2: "Записи всех уроков без ограничений",
    hybrid_online_3: "Домашние задания и материалы в одном месте",
    hybrid_online_4: "Доступ к курсу 24/7 с любого устройства",
    hybrid_online_5: "Интерактивные тесты и тренажёры IELTS",
    hybrid_online_6: "Возможность пересматривать сложные темы",
    hybrid_online_7: "Самостоятельная подготовка в удобном темпе",

    hybrid_best_of_both: "ЛУЧШЕЕ ИЗ ДВУХ МИРОВ",
    hybrid_best_1: "Гибкость онлайн-обучения",
    hybrid_best_2: "Эффективность живых занятий",
    hybrid_best_3: "Максимум практики Speaking",
    hybrid_best_4: "Постоянный доступ к материалам",
    hybrid_best_5: "Быстрая подготовка к IELTS",
    hybrid_best_6: "Системный контроль прогресса",
    hybrid_best_7: "Поддержка преподавателей",

    hybrid_offline: "OFFLINE",
    hybrid_offline_1: "Полное сопровождение преподавателей",
    hybrid_offline_2: "Живые уроки и постоянная практика",
    hybrid_offline_3: "Контроль прогресса на каждом этапе",
    hybrid_offline_4: "Мгновенная обратная связь от учителя",
    hybrid_offline_5: "Speaking-сессии и работа над ошибками",
    hybrid_offline_6: "Мотивация и дисциплина учебной среды",
    hybrid_offline_7: "Поддержка и общение с другими студентами",






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
      faq2_a: "Длительность обучения в IELTS LAB в среднем составляет около 6 месяцев. Некоторые ученики достигают необходимого результата значительно раньше благодаря предварительной подготовке, тогда как другим может потребоваться больше времени для успешного завершения курса.",

      faq3_q: "Подойдет ли курс именно мне?",
      faq3_a:
        "Чтобы понять, насколько наш курс соответствует вашим целям и текущему уровню английского языка, рекомендуем пройти бесплатную консультацию. Для записи свяжитесь с нами по номеру, указанному ниже.",

      faq4_q: "Сколько стоит курс?",
      faq4_a:
        "Стоимость обучения зависит от индивидуального учебного плана, который составляется персонально для каждого ученика. В среднем цена основного курса составляет 1 500 000 сумов в месяц.",

      faq5_q: "Что я получу по окончании курса?",
      faq5_a:
        "По окончании курса вы будете полностью подготовлены к сдаче экзамена IELTS и сможете уверенно подойти к его прохождению. Кроме того, команда IELTS LAB поможет вам с регистрацией на экзамен и ответит на все организационные вопросы.",


      teachers_title: "НАШИ ПРЕПОДАВАТЕЛИ",
      teachers_subtitle:
        "Высококвалифицированные специалисты, с многолетним опытом за плечами",

      teacher_experience: "Опыт",
      teacher_students: "Студентов",


      

    teacher_1_name: "Фахриев Хушвакт",
teacher_1_role: "Основатель",
teacher_1_exp: "Более 5 лет",
teacher_1_students: "Основатель",
teacher_1_desc:
  "Основатель IELTS Lab. Эксперт по подготовке к IELTS с опытом преподавания более 5 лет.",

teacher_2_name: "Макхамов Асилбек",
teacher_2_role: "Сооснователь",
teacher_2_exp: "Более 5 лет",
teacher_2_students: "Сооснователь",
teacher_2_desc:
  "Сооснователь IELTS Lab и преподаватель с результатом IELTS 9.0.",

teacher_3_name: "Назиров Самандар",
teacher_3_role: "Сооснователь",
teacher_3_exp: "Более 5 лет",
teacher_3_students: "Сооснователь",
teacher_3_desc:
  "Опытный преподаватель IELTS, Сооснователь IELTS Lab.",

teacher_4_name: "Акрамова Муниса",
teacher_4_role: "Преподаватель",
teacher_4_exp: "Около 3 лет",
teacher_4_students: "Преподаватель",
teacher_4_desc:
  "Преподаватель IELTS с современным и практическим подходом.",

teacher_5_name: "Вахабова Зебо",
teacher_5_role: "Преподаватель",
teacher_5_exp: "Около 3 лет",
teacher_5_students: "Преподаватель",
teacher_5_desc:
  "Преподаватель с 3 летним опытом успешной подготовки студентов к IELTS.",

teacher_6_name: "Салиева Собурахоним",
teacher_6_role: "Преподаватель",
teacher_6_exp: "Около 3 лет",
teacher_6_students: "Преподаватель",
teacher_6_desc:
  "Преподаватель IELTS с акцентом на развитие Speaking.",

teacher_7_name: "Тохиров Азамходжа",
teacher_7_role: "Преподаватель",
teacher_7_exp: "Около 3 лет",
teacher_7_students: "Преподаватель",
teacher_7_desc:
  "Эксперт с более 3 летним опытом подготовки студентов к IELTS.",

teacher_8_name: "Алихужаев Азизхон",
teacher_8_role: "Speaking преподаватель",
teacher_8_exp: "Около 3 лет",
teacher_8_students: "Speaking преподаватель",
teacher_8_desc:
  "Спкциалист по IELTS Speaking с лучшим результатом 9.0.",

teacher_9_name: "Сагдулаев Асадулло",
teacher_9_role: "Преподаватель",
teacher_9_exp: "Около 3 лет",
teacher_9_students: "Преподаватель",
teacher_9_desc:
  "Преподаватель IELTS с 3 летним опытом работы.",

teacher_10_name: "Бахриддинов Элнур",
teacher_10_role: "Speaking преподаватель",
teacher_10_exp: "Около 3 лет",
teacher_10_students: "Speaking преподаватель",
teacher_10_desc:
  "Профессиональный IELTS Speaking преподаватель с результатом 9.0 Speaking.",
    },
  },
uz: {
  translation: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    course: "Kurs",





    alert_1_title: "Yo‘lingizni bugunoq boshlang!",
alert_1_text:
  "Bepul sinov darsiga yoziling va o‘qitish uslubimizni baholang.",
alert_1_button: "Yozilish",

alert_2_title: "IELTS ga biz bilan tayyorlaning!",
alert_2_text:
  "Shaxsiy tayyorgarlik rejasini oling va ingliz tilingiz darajasini bilib oling.",
alert_2_button: "Mock ga o‘tish",






hero_title_1: "<primary>IELTS</primary> GA TAYYORLANISHNI <highlight>HOZIROQ</highlight> BOSHLASHNI XOHLAYSIZMI?",

hero_desc_1: "Har bir o'quvchi bilan birga bir darslar 🥊",
hero_desc_full:
  "<accent>Bugun</accent> ro‘yxatdan o‘ting va <accent>ertagayoq</accent> o‘qishni boshlang!",

hero_btn: "Bepul dars",





location_subtitle: "JOYLASHUV",
    location_title1: "IELTS LAB",
    location_title2: "O'QUV MARKAZI",
    location_description: "Bizning o'quv markazimiz Toshkentning qulay joyida joylashgan. Google Maps yoki Yandex Maps orqali marshrutni tez ochib, muammosiz yetib olishingiz mumkin.",
    location_address: "Toshkent, 1-xromos ko'chasi, 4A",
    location_coordinates: "41°20'28.6\"N 69°12'16.4\"E",
    location_transport: "Qulay transport qulayligi",
    location_hours: "Har kuni soat 09:00 dan 21:00 gacha ochiq",
    location_google_maps: "Google Maps",
    location_yandex_maps: "Yandex Maps",
    location_open_in_maps: "Xaritada ochish",




hero_final_title:
  "Pul bilan vaqtni <wasted>bekorga</wasted> sarflamasdan, nihoyat <br><accent>IELTSdan 7+</accent> erish.",
  hero_final_title_mobile:"Pul bilan vaqtni <wasted>bekorga</wasted> sarflamasdan, nihoyat <br><accent>IELTSdan 7+</accent> erishing.",
    
    hero_final_join: "Bizning",
    hero_final_live_classes: "jonli darslarga",
    hero_final_save: " qo’shiling va vaqtingiz bilan asabingizni tejang!",

  hero_final_daily_text: "Har kuni <accent>C1</accent> va undanam baland darajaga ega bo’lgan ustozlar bilan 1 ga 1 darslar.",

    hero_final_button: "Ariza qoldirish",





    experience_subtitle: "IELTS LAB TAJRIBASI",
    experience_title: "IELTS LABda sizni nima kutmoqda?",

    experience_card1_title: "1 ga 1 jonli darslar",
    experience_card1_desc: "O‘qituvchining to‘liq e’tibori, individual tayyorgarlik strategiyasi va sizning zaif joylaringiz ustida ishlash.",

    experience_card2_title: "Har bir bosqichda qo‘llab-quvvatlash",
    experience_card2_desc: "O‘qituvchi sizga faqat darslarda emas, balki butun tayyorgarlik jarayoni davomida yordam beradi.",

    experience_card3_title: "Haqiqiy IELTS materiallari",
    experience_card3_desc: "Faqat real imtihon topshiriqlari va dolzarb strukturalardan foydalanamiz.",






    about_subtitle: "BIZ HAQIMIZDA",
    about_title: "Biz yangicha yondashuvga ega o‘quv markazmiz",

    about_card1_title: "Individual e’tibor",
    about_card1_desc: "Har bir o‘quvchi shaxsiy o‘quv rejasini va o‘qituvchining butun tayyorgarlik jarayonida doimiy qo‘llab-quvvatlashini oladi.",

    about_card2_title: "Tez natijalar",
    about_card2_desc: "O‘rtacha hisobda o‘quvchilar kerakli darajaga va IELTSga tayyor holatga taxminan 6 oy ichida erishadi.",

    about_card3_title: "Jonli darslar",
    about_card3_desc: "Ko‘pgina o‘quv markazlarida agar o‘quvchi mavzuni tushunmasa — bu uning muammosi. Bizda aksincha: agar o‘quvchi biror narsani tushunmasa, demak biz boshqacha tushuntirishimiz va natijaga olib chiqishimiz kerak.",

    about_big_title: "Biz ingliz tilini fan emas, balki kelajak uchun vosita deb hisoblaymiz.",
    about_big_desc1: "Bizning jamoamiz o‘quvchilarda ishonch va motivatsiya hissi yaratadigan muhitni shakllantiradi. Biz nafaqat grammatikaga, balki fikrlashga, talaffuzga, suhbatdagi ishonchga va tilni haqiqiy hayotda qo‘llash qobiliyatiga ham e’tibor qaratamiz.",
    about_big_desc2: "Zamonaviy yondashuv, interaktiv darslar va kuchli qo‘llab-quvvatlash tizimi tufayli o‘quvchilar natijalarga ancha tezroq erishadi.",






    hybrid_title1: "Biz onlayn va oflayn format ",
    hybrid_title2: "afzalliklarini bir kursda jamladik",

    hybrid_subtitle: "Siz maksimal natijaga erishishingiz uchun, texnologiyalar moslashuvchanligini va jonli muloqotni birlashtiramiz.",

    hybrid_online: "ONLINE",
    hybrid_online_1: "Qulay ta'lim platformasi",
    hybrid_online_2: "Barcha darslarning yozuvlari cheksiz",
    hybrid_online_3: "Uy vazifalari va materiallar bitta joyda",
    hybrid_online_4: "Kursga 24/7 istalgan qurilmadan kirish",
    hybrid_online_5: "Interaktiv IELTS testlari va trenajyorlari",
    hybrid_online_6: "Murakkab mavzularni qayta ko‘rish imkoniyati",
    hybrid_online_7: "O‘zingizga qulay sur'atda tayyorgarlik",

    hybrid_best_of_both: "IKKI DUNYONING ENG YAXSHISI",
    hybrid_best_1: "Onlayn o‘qitishning moslashuvchanligi",
    hybrid_best_2: "Jonli darslarning samaradorligi",
    hybrid_best_3: "Speaking amaliyotining maksimal darajasi",
    hybrid_best_4: "Materiallarga doimiy kirish",
    hybrid_best_5: "Tez IELTS tayyorgarligi",
    hybrid_best_6: "Progressni tizimli nazorat qilish",
    hybrid_best_7: "O‘qituvchilar qo‘llab-quvvatlashi",

    hybrid_offline: "OFFLINE",
    hybrid_offline_1: "O‘qituvchilar tomonidan to‘liq hamrohlik",
    hybrid_offline_2: "Jonli darslar va doimiy amaliyot",
    hybrid_offline_3: "Har bir bosqichda progress nazorati",
    hybrid_offline_4: "O‘qituvchidan tezkor fikr-mulohaza",
    hybrid_offline_5: "Speaking sessiyalari va xatolarni tuzatish",
    hybrid_offline_6: "O‘quv muhitining motivatsiyasi va tartibi",
    hybrid_offline_7: "Boshqa o‘quvchilar bilan qo‘llab-quvvatlash va muloqot",






    hero_sub: "INTER NATION ENGLISH SCHOOL",
    hero_title: "KELAJAK UCHUN INGLIZ TILI",
    hero_desc: "O‘rganing. Mashq qiling. Muvaffaqiyatga erishing.",
    hero_desc2:
      "Ishonchli kelajak uchun amaliy ingliz tili kurslari",

    feature1_title: "Tajribali ustozlar",
    feature1_desc: "Malakali mutaxassislar",

    feature2_title: "Zamonaviy metodika",
    feature2_desc: "Samarali ta’lim",

    feature3_title: "Haqiqiy natijalar",
    feature3_desc: "Ishonch bilan gapiring",

    results_sub: "O‘QUVCHILAR YUTUQLARI",
    results_title: "O‘QUVCHILARIMIZ NATIJALARI",
    results_desc:
      "O‘quvchilarimiz muntazam ravishda yuqori natijalarga erishadilar. Asosiy matn ostidagi izohga qarang.",
    results_desc2:
      "Bizga qo‘shiling va tayyorgarligingizni yangi bosqichga olib chiqing",

    free_sub: "BEPUL MATERIALLAR",
    free_title:
      "mustaqil tayyorlanish uchun <primary>Bepul</primary> materiallar",
    free_desc:
      "Videolar, elektron kitoblar, shablonlar va yanada ko‘plab foydali materiallar",

    free_btn: "Yuklab olish",

    free_item1: "IELTS lug‘ati",
    free_item2: "Grammatika qo‘llanmasi",
    free_item3: "Speaking bo‘yicha tavsiyalar",
    free_item4: "Writing namunalari",
    free_item5: "Listening mashqlari",

    open_form: "Kursga yozilish",
    form_title: "Ariza qoldiring",
    form_name: "Ismingiz",
    form_phone: "Telefon raqamingiz",
    form_btn: "Yuborish",
    form_success: "Ariza yuborildi!",

    course_title: "IELTS Lab — To‘liq Kurs",
    course_subtitle:
      "Mutaxassislar bilan 8–12 haftada IELTS tayyorgarligi",
    course_benefits_title:
      "Kurs davomida nimalarga ega bo‘lasiz",
    testimonials_title: "O‘quvchilar fikrlari",
    form_subtitle:
      "Ariza qoldiring va biz siz bilan tez orada bog‘lanamiz",

    testimonial1:
      "Ushbu kurs tufayli IELTS imtihonidan birinchi urinishdayoq 8.0 oldim! Ayniqsa Speaking va Writing juda yordam berdi.",
    testimonial1_name: "Alina Smirnova",

    testimonial2:
      "Ajoyib dastur. Juda ko‘p amaliyot va haqiqiy topshiriqlar. Tavsiya qilaman!",
    testimonial2_name: "Muhammad Ali",

    testimonial3:
      "Men qatnashgan kurslar ichida eng samaralisi. Ustozlar zo‘r!",
    testimonial3_name: "Nodira Rahimova",

    faq_title: "Ko‘p beriladigan savollar",

    faq1_q: "IELTS Lab kursida nimalar bo‘ladi?",
    faq1_a:
      "Bu shunchaki ma’ruzalar emas. Bu intensiv amaliy tayyorgarlik dasturidir...",

    faq2_q: "Kurs qancha davom etadi?",
    faq2_a:
      "IELTS Lab'da o'quvchilar o'rtacha 6 oy ichida muvofaqayatli natijaga erishishadi. Sizning IELTS bilan oldingi tajribangiz, kuchli ingliz tili bilimingiz va intizomingiz jarayonni tezlashtirishga yordam beradi.",

    faq3_q: "Bu kurs menga mos keladimi?",
    faq3_a:
      "Kursimiz sizning maqsadlaringiz va ingliz tili darajangizga qanchalik mos kelishini aniqlash uchun bepul konsultatsiyadan o‘tishingizni tavsiya qilamiz. Ro‘yxatdan o‘tish uchun quyidagi telefon raqamiga murojaat qiling.",

    faq4_q: "Kurs narxi qancha?",
    faq4_a:
      "Ta’lim narxi har bir o‘quvchi uchun alohida tuziladigan individual o‘quv rejasiga bog‘liq. O‘rtacha asosiy kurs narxi oyiga 1 500 000 so‘mni tashkil etadi.",

    faq5_q: "Kurs yakunida nima olaman?",
    faq5_a:
      "Kurs yakunida siz IELTS imtihoniga to‘liq tayyor bo‘lasiz va uni ishonch bilan topshirishingiz mumkin bo‘ladi. Bundan tashqari, IELTS LAB jamoasi sizga imtihonga ro‘yxatdan o‘tishda yordam beradi va barcha tashkiliy savollarga javob beradi.",

    teachers_title: "BIZNING USTOZLAR",
    teachers_subtitle:
      "Ko‘p yillik tajribaga ega yuqori malakali mutaxassislar",

    teacher_experience: "Tajriba",
    teacher_students: "Talabalar",

    teacher_1_name: "Xushvaqt Faxriyev",
    teacher_1_role: "Founder",
    teacher_1_exp: "5 yildan ortiq",
    teacher_1_students: "Founder",
    teacher_1_desc:
      "IELTS Lab asoschisi. IELTS tayyorlov bo‘yicha 5 yildan ortiq tajribaga ega mutaxassis.",

    teacher_2_name: "Asilbek Maxkamov",
    teacher_2_role: "Co-Founder",
    teacher_2_exp: "5 yildan ortiq",
    teacher_2_students: "Co-Founder",
    teacher_2_desc:
      "IELTS Lab hammuassisi va IELTS 9.0 natijasiga ega ustoz.",

    teacher_3_name: "Samandar Nazirov",
    teacher_3_role: "Co-Founder",
    teacher_3_exp: "5 yildan ortiq",
    teacher_3_students: "Co-Founder",
    teacher_3_desc:
      "Tajribali IELTS ustozi va IELTS Lab hammuassisi.",

    teacher_4_name: "Munisa Akramova",
    teacher_4_role: "Teacher",
    teacher_4_exp: "Taxminan 3 yil",
    teacher_4_students: "Teacher",
    teacher_4_desc:
      "Zamonaviy va amaliy yondashuvga ega IELTS ustozi.",

    teacher_5_name: "Zebo Vahobova",
    teacher_5_role: "Teacher",
    teacher_5_exp: "Taxminan 3 yil",
    teacher_5_students: "Teacher",
    teacher_5_desc:
      "Talabalarni IELTS imtihoniga muvaffaqiyatli tayyorlash bo‘yicha 3 yillik tajribaga ega ustoz.",

    teacher_6_name: "Soburaxonim Saliyeva",
    teacher_6_role: "Teacher",
    teacher_6_exp: "Taxminan 3 yil",
    teacher_6_students: "Teacher",
    teacher_6_desc:
      "Speaking ko‘nikmalarini rivojlantirishga ixtisoslashgan IELTS ustozi.",

    teacher_7_name: "Azamxo‘ja Toxirov",
    teacher_7_role: "Teacher",
    teacher_7_exp: "Taxminan 3 yil",
    teacher_7_students: "Teacher",
    teacher_7_desc:
      "Talabalarni IELTS imtihoniga tayyorlash bo‘yicha 3 yildan ortiq tajribaga ega mutaxassis.",

    teacher_8_name: "Azizxon Alixo‘jayev",
    teacher_8_role: "Speaking teacher",
    teacher_8_exp: "Taxminan 3 yil",
    teacher_8_students: "Speaking teacher",
    teacher_8_desc:
      "IELTS Speaking bo‘yicha mutaxassis, Speaking natijasi — 9.0.",

    teacher_9_name: "Asadullo Sag‘dullayev",
    teacher_9_role: "Ustoz",
    teacher_9_exp: "Taxminan 3 yil",
    teacher_9_students: "Ustoz",
    teacher_9_desc:
      "3 yillik ish tajribasiga ega IELTS ustozi.",

    teacher_10_name: "Elnur Baxriddinov",
    teacher_10_role: "Speaking teacher",
    teacher_10_exp: "Taxminan 3 yil",
    teacher_10_students: "Speaking teacher",
    teacher_10_desc:
      "Speaking bo‘yicha 9.0 natijaga ega professional IELTS ustozi.",
  },
},
};


const isFirstVisit = !localStorage.getItem('i18nextLng');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: isFirstVisit ? 'uz' : undefined, // 👈 ключевой момент

    fallbackLng: "uz",
    supportedLngs: ["uz", "ru", "en"],

    resources,

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    }
  });

// === Устанавливаем узбекский ТОЛЬКО при первом посещении ===

// Сохраняем при смене языка
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
  localStorage.setItem('site-language-selected', 'true');
});

export default i18n;