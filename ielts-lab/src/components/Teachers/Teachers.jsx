import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Teachers.module.css';

export default function Teachers() {
  const { t } = useTranslation();
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    {
      id: 1,
      name: "Мухаммадиса Махмудов",
      name_en: "Mukhammadisa Makhmudov",
      name_uz: "Muhammadisa Mahmudov",
      band: "IELTS 9.0",
      experience: "7 years",
      students: "3500+",
      qualification: "CELTA",
      photo: "src/assets/Teachers (1).jpg",
      description: "Эксперт по Speaking и Writing. Помог более 800 студентам достичь высокого балла IELTS.",
      description_en: "Speaking and Writing expert. Helped over 800 students achieve high IELTS scores.",
      description_uz: "Speaking va Writing bo‘yicha mutaxassis. 800 dan ortiq talabaga yuqori ball olishga yordam berdi."
    },
    {
      id: 2,
      name: "Кристина Хафизова",
      name_en: "Kristina Khafizova",
      name_uz: "Kristina Xafizova",
      band: "IELTS 9.0",
      experience: "5 years",
      students: "1000+",
      qualification: "CELTA",
      photo: "src/assets/Teachers (2).jpg",
      description: "Специалист по Listening и Reading. Мастер создания эффективных стратегий подготовки.",
      description_en: "Listening and Reading specialist. Master of effective preparation strategies.",
      description_uz: "Listening va Reading bo‘yicha mutaxassis. Samarali tayyorgarlik strategiyalari ustasi."
    },
    {
      id: 3,
      name: "Нурмухаммад Равшанов",
      name_en: "Nurmuhammad Ravshanov",
      name_uz: "Nurmuhammad Ravshanov",
      band: "IELTS 9.0",
      experience: "12 years",
      students: "4000+",
      qualification: "CELTA",
      photo: "src/assets/Teachers (3).jpg",
      description: "Один из самых опытных преподавателей. Специализируется на комплексной подготовке к IELTS.",
      description_en: "One of the most experienced teachers. Specializes in comprehensive IELTS preparation.",
      description_uz: "Eng tajribali o‘qituvchilardan biri. IELTS ga kompleks tayyorgarlikka ixtisoslashgan."
    },
    {
      id: 4,
      name: "Диёр Солиев",
      name_en: "Diyor Soliyev",
      name_uz: "Diyor Soliyev",
      band: "IELTS 9.0",
      experience: "10 years",
      students: "1000+",
      qualification: "CELTA",
      photo: "src/assets/Teachers (4).jpg",
      description: "Эксперт по Writing Task 2. Помогает студентам писать эссе на Band 8.0+.",
      description_en: "Writing Task 2 expert. Helps students write essays for Band 8.0+.",
      description_uz: "Writing Task 2 bo‘yicha mutaxassis. Talabalarga 8.0+ ball uchun insho yozishga yordam beradi."
    },
    {
      id: 5,
      name: "Азиз Джалилов",
      name_en: "Aziz Jalilov",
      name_uz: "Aziz Jalilov",
      band: "IELTS 9.0",
      experience: "10 years",
      students: "3500+",
      qualification: "CELTA",
      photo: "src/assets/Teachers (5).jpg",
      description: "Специалист по Speaking. Развивает fluency и pronunciation до высокого уровня.",
      description_en: "Speaking specialist. Develops fluency and pronunciation to a high level.",
      description_uz: "Speaking bo‘yicha mutaxassis. Fluency va talaffuzni yuqori darajaga yetkazadi."
    },
    {
      id: 6,
      name: "Умида Каримова",
      name_en: "Umida Karimova",
      name_uz: "Umida Karimova",
      band: "IELTS 8.0",
      experience: "17 years",
      students: "7000+",
      qualification: "CELTA, DELTA",
      photo: "src/assets/Teachers (6).jpg",
      description: "Самый опытный преподаватель в команде. Эксперт по всем модулям IELTS.",
      description_en: "Most experienced teacher in the team. Expert in all IELTS modules.",
      description_uz: "Jamoada eng tajribali o‘qituvchi. Barcha IELTS modullarida mutaxassis."
    },
    {
      id: 6,
      name: "Умида Каримова",
      name_en: "Umida Karimova",
      name_uz: "Umida Karimova",
      band: "IELTS 8.0",
      experience: "17 years",
      students: "7000+",
      qualification: "CELTA, DELTA",
      photo: "src/assets/Teachers (7).jpg",
      description: "Самый опытный преподаватель в команде. Эксперт по всем модулям IELTS.",
      description_en: "Most experienced teacher in the team. Expert in all IELTS modules.",
      description_uz: "Jamoada eng tajribali o‘qituvchi. Barcha IELTS modullarida mutaxassis."
    },
    {
      id: 6,
      name: "Умида Каримова",
      name_en: "Umida Karimova",
      name_uz: "Umida Karimova",
      band: "IELTS 8.0",
      experience: "17 years",
      students: "7000+",
      qualification: "CELTA, DELTA",
      photo: "src/assets/Teachers (8).jpg",
      description: "Самый опытный преподаватель в команде. Эксперт по всем модулям IELTS.",
      description_en: "Most experienced teacher in the team. Expert in all IELTS modules.",
      description_uz: "Jamoada eng tajribali o‘qituvchi. Barcha IELTS modullarida mutaxassis."
    },
    {
      id: 6,
      name: "Умида Каримова",
      name_en: "Umida Karimova",
      name_uz: "Umida Karimova",
      band: "IELTS 8.0",
      experience: "17 years",
      students: "7000+",
      qualification: "CELTA, DELTA",
      photo: "src/assets/Teachers (9).jpg",
      description: "Самый опытный преподаватель в команде. Эксперт по всем модулям IELTS.",
      description_en: "Most experienced teacher in the team. Expert in all IELTS modules.",
      description_uz: "Jamoada eng tajribali o‘qituvchi. Barcha IELTS modullarida mutaxassis."
    },
    {
      id: 6,
      name: "Умида Каримова",
      name_en: "Umida Karimova",
      name_uz: "Umida Karimova",
      band: "IELTS 8.0",
      experience: "17 years",
      students: "7000+",
      qualification: "CELTA, DELTA",
      photo: "src/assets/Teachers (10).jpg",
      description: "Самый опытный преподаватель в команде. Эксперт по всем модулям IELTS.",
      description_en: "Most experienced teacher in the team. Expert in all IELTS modules.",
      description_uz: "Jamoada eng tajribali o‘qituvchi. Barcha IELTS modullarida mutaxassis."
    }
  ];

  return (
    <section className={styles.teachersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('teachers_title')}</h2>
        <p className={styles.subtitle}>{t('teachers_subtitle')}</p>

        <div className={styles.grid}>
          {teachers.map((teacher) => (
            <div 
              key={teacher.id} 
              className={styles.card}
              onClick={() => setSelectedTeacher(teacher)}
            >
              <div className={styles.imageWrapper}>
                <img src={teacher.photo} alt={teacher.name} />
              </div>
              
              <div className={styles.info}>
                <h3>
                  {t('lang') === 'ru' ? teacher.name : 
                   t('lang') === 'uz' ? teacher.name_uz : teacher.name_en}
                </h3>
                <div className={styles.band}>{teacher.band}</div>
                
                <div className={styles.stats}>
                  <div>
                    <strong>{teacher.experience}</strong>
                    <span>{t('teacher_experience')}</span>
                  </div>
                  <div>
                    <strong>{teacher.students}</strong>
                    <span>{t('teacher_students')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={styles.ctaButton}
          onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('open_form')}
        </button>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeacher(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedTeacher(null)}>✕</button>
              
              <div className={styles.modalBody}>
                <div className={styles.modalImage}>
                  <img src={selectedTeacher.photo} alt={selectedTeacher.name} />
                </div>
                
                <div className={styles.modalInfo}>
                  <h2>
                    {t('lang') === 'ru' ? selectedTeacher.name : 
                     t('lang') === 'uz' ? selectedTeacher.name_uz : selectedTeacher.name_en}
                  </h2>
                  <p className={styles.qualification}>{selectedTeacher.qualification}</p>
                  <p className={styles.description}>
                    {t('lang') === 'ru' ? selectedTeacher.description : 
                     t('lang') === 'uz' ? selectedTeacher.description_uz : selectedTeacher.description_en}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}