import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
en: {
  translation: {
    home: "Home",
    about: "About Us",




hero_title_1: "WANT TO START PREPARING FOR",
hero_title_2: "RIGHT NOW?",

hero_desc_1: "One-on-one lessons for every student 🥊",
hero_desc_2: "Sign up",
hero_desc_3: "today",
hero_desc_4: "and start learning",
hero_desc_5: "tomorrow",

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





    hero_final_get: "Finally get",
    hero_final_ielts: "7+ in IELTS",
    hero_final_without: "without wasting",
    hero_final_money: "money",
    hero_final_time: "time",
    hero_final_wasted: "in vain",
    hero_final_join: "Join our",
    hero_final_live_classes: "live classes",
    hero_final_save: "and save a lot of time and nerves.",
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

    experience_card3_title: "Real IELTS Materials",
    experience_card3_desc: "We use only real exam tasks and up-to-date structures.",






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

    open_form: "Enroll in a Course",
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





hero_title_1: "ХОЧЕШЬ НАЧАТЬ ГОТОВИТЬСЯ К",
hero_title_2: "ПРЯМО СЕЙЧАС?",

hero_desc_1: "Уроки один на один с каждым 🥊",
hero_desc_2: "Запишись",
hero_desc_3: "сегодня",
hero_desc_4: "и начни учиться уже",
hero_desc_5: "завтра",

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






    hero_final_get: "Наконец получи",
    hero_final_ielts: "7+ по IELTS",
    hero_final_without: "не тратя",
    hero_final_money: "деньги",
    hero_final_time: "время",
    hero_final_wasted: "впустую",
    hero_final_join: "Присоединяйся к нашим",
    hero_final_live_classes: "живых занятиях",
    hero_final_save: "и сэкономь кучу времени и нервов.",
    hero_final_daily: "Ежедневные живые занятия 1 на 1 с преподавателями уровня от",
    hero_final_c1: "C1",
    hero_final_experience: "и многолетним опытом подготовки студентов к IELTS.",
    hero_final_button: "Оставить заявку",





    experience_subtitle: "IELTS LAB EXPERIENCE",
    experience_title: "Что вас ждёт в IELTS LAB?",

    experience_card1_title: "Живые уроки 1 на 1",
    experience_card1_desc: "Полное внимание преподавателя, индивидуальная стратегия подготовки и работа именно над вашими слабыми местами.",

    experience_card2_title: "Поддержка на каждом этапе",
    experience_card2_desc: "Учитель помогает вам во время всего обучения, а не только на уроках.",

    experience_card3_title: "Настоящие IELTS материалы",
    experience_card3_desc: "Используем только реальные экзаменационные задания и актуальные структуры.",







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





hero_title_1: "IELTS GA TAYYORLANISHNI",
hero_title_2: "HOZIROQ BOSHLASHNI XOHLAYSIZMI?",

hero_desc_1: "Har bir o‘quvchi uchun individual darslar 🥊",
hero_desc_2: "Bugunoq",
hero_desc_3: "ro‘yxatdan o‘ting",
hero_desc_4: "va o‘qishni",
hero_desc_5: "ertaga boshlang",

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




    hero_final_get: "Nihoyat erish",
    hero_final_ielts: "IELTSdan 7+",
    hero_final_without: "sarflamasdan",
    hero_final_money: "pulni",
    hero_final_time: "vaqtni",
    hero_final_wasted: "bekorga",
    hero_final_join: "Bizning",
    hero_final_live_classes: "jonli darslarimizga",
    hero_final_save: "qo‘shiling va ko‘p vaqt hamda asablarni tejang.",
    hero_final_daily: "Har kuni 1 nafar o‘qituvchi bilan jonli individual darslar",
    hero_final_c1: "C1",
    hero_final_experience: "darajadagi va ko‘p yillik IELTS tayyorlash tajribasiga ega o‘qituvchilar bilan.",
    hero_final_button: "Ariza qoldirish",





    experience_subtitle: "IELTS LAB TAJRIBASI",
    experience_title: "IELTS LABda sizni nima kutmoqda?",

    experience_card1_title: "Jonli 1 nafar o‘qituvchi bilan darslar",
    experience_card1_desc: "O‘qituvchining to‘liq e’tibori, individual tayyorgarlik strategiyasi va sizning zaif joylaringiz ustida ishlash.",

    experience_card2_title: "Har bir bosqichda qo‘llab-quvvatlash",
    experience_card2_desc: "O‘qituvchi sizga faqat darslarda emas, balki butun o‘qish davomida yordam beradi.",

    experience_card3_title: "Haqiqiy IELTS materiallari",
    experience_card3_desc: "Faqat real imtihon topshiriqlari va dolzarb strukturalardan foydalanamiz.",





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
      "<primary>Bepul</primary> mustaqil tayyorgarlik materiallari",
    free_desc:
      "Videolar, elektron kitoblar, shablonlar va yanada samarali tayyorgarlik ko‘rishingiz uchun ko‘plab foydali materiallar",

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
      "IELTS LAB’da o‘qish muddati o‘rtacha 6 oy atrofida. Ba’zi o‘quvchilar oldindan tayyorgarligi sababli kerakli natijaga tezroq erishadilar, boshqalarga esa kursni muvaffaqiyatli yakunlash uchun ko‘proq vaqt kerak bo‘lishi mumkin.",

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
    teacher_1_role: "Asoschi",
    teacher_1_exp: "5 yildan ortiq",
    teacher_1_students: "Asoschi",
    teacher_1_desc:
      "IELTS Lab asoschisi. IELTS tayyorlov bo‘yicha 5 yildan ortiq tajribaga ega mutaxassis.",

    teacher_2_name: "Asilbek Maxkamov",
    teacher_2_role: "Hammuassis",
    teacher_2_exp: "5 yildan ortiq",
    teacher_2_students: "Hammuassis",
    teacher_2_desc:
      "IELTS Lab hammuassisi va IELTS 9.0 natijasiga ega ustoz.",

    teacher_3_name: "Samandar Nazirov",
    teacher_3_role: "Hammuassis",
    teacher_3_exp: "5 yildan ortiq",
    teacher_3_students: "Hammuassis",
    teacher_3_desc:
      "Tajribali IELTS ustozi va IELTS Lab hammuassisi.",

    teacher_4_name: "Munisa Akramova",
    teacher_4_role: "Ustoz",
    teacher_4_exp: "Taxminan 3 yil",
    teacher_4_students: "Ustoz",
    teacher_4_desc:
      "Zamonaviy va amaliy yondashuvga ega IELTS ustozi.",

    teacher_5_name: "Zebo Vahobova",
    teacher_5_role: "Ustoz",
    teacher_5_exp: "Taxminan 3 yil",
    teacher_5_students: "Ustoz",
    teacher_5_desc:
      "Talabalarni IELTS imtihoniga muvaffaqiyatli tayyorlash bo‘yicha 3 yillik tajribaga ega ustoz.",

    teacher_6_name: "Soburaxonim Saliyeva",
    teacher_6_role: "Ustoz",
    teacher_6_exp: "Taxminan 3 yil",
    teacher_6_students: "Ustoz",
    teacher_6_desc:
      "Speaking ko‘nikmalarini rivojlantirishga ixtisoslashgan IELTS ustozi.",

    teacher_7_name: "Azamxo‘ja Toxirov",
    teacher_7_role: "Ustoz",
    teacher_7_exp: "Taxminan 3 yil",
    teacher_7_students: "Ustoz",
    teacher_7_desc:
      "Talabalarni IELTS imtihoniga tayyorlash bo‘yicha 3 yildan ortiq tajribaga ega mutaxassis.",

    teacher_8_name: "Azizxon Alixo‘jayev",
    teacher_8_role: "Speaking ustozi",
    teacher_8_exp: "Taxminan 3 yil",
    teacher_8_students: "Speaking ustozi",
    teacher_8_desc:
      "IELTS Speaking bo‘yicha mutaxassis, Speaking natijasi — 9.0.",

    teacher_9_name: "Asadullo Sag‘dullayev",
    teacher_9_role: "Ustoz",
    teacher_9_exp: "Taxminan 3 yil",
    teacher_9_students: "Ustoz",
    teacher_9_desc:
      "3 yillik ish tajribasiga ega IELTS ustozi.",

    teacher_10_name: "Elnur Baxriddinov",
    teacher_10_role: "Speaking ustozi",
    teacher_10_exp: "Taxminan 3 yil",
    teacher_10_students: "Speaking ustozi",
    teacher_10_desc:
      "Speaking bo‘yicha 9.0 natijaga ega professional IELTS ustozi.",
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