import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Teachers.module.css';

export default function Teachers() {
  const { t, i18n } = useTranslation();
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // Только технические данные (id, фото, ключ для перевода)
  const teachers = [
    {
      id: 1,
      key: "teacher_1",
      photo: "src/assets/Teachers (1).jpg",
    },
    {
      id: 2,
      key: "teacher_2",
      photo: "src/assets/Teachers (2).jpg",
    },
    {
      id: 3,
      key: "teacher_3",
      photo: "src/assets/Teachers (3).jpg",
    },
    {
      id: 4,
      key: "teacher_4",
      photo: "src/assets/Teachers (4).jpg",
    },
    {
      id: 5,
      key: "teacher_5",
      photo: "src/assets/Teachers (5).jpg",
    },
    {
      id: 6,
      key: "teacher_6",
      photo: "src/assets/Teachers (6).jpg",
    },
    {
      id: 7,
      key: "teacher_7",
      photo: "src/assets/Teachers (7).jpg",
    },
    {
      id: 8,
      key: "teacher_8",
      photo: "src/assets/Teachers (8).jpg",
    },
    {
      id: 9,
      key: "teacher_9",
      photo: "src/assets/Teachers (9).jpg",
    },
    {
      id: 10,
      key: "teacher_10",
      photo: "src/assets/Teachers (10).jpg",
    },
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
                <img src={teacher.photo} alt={t(`${teacher.key}_name`)} />
              </div>
              
              <div className={styles.info}>
                <h3>{t(`${teacher.key}_name`)}</h3>
                <div className={styles.band}>{t(`${teacher.key}_band`)}</div>
                
                <div className={styles.stats}>
                  <div>
                    <strong>{t(`${teacher.key}_exp`)}</strong>
                    <span>{t('teacher_experience')}</span>
                  </div>
                  <div>
                    <strong>{t(`${teacher.key}_students`)}</strong>
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
                  <img src={selectedTeacher.photo} alt={t(`${selectedTeacher.key}_name`)} />
                </div>
                
                <div className={styles.modalInfo}>
                  <h2>{t(`${selectedTeacher.key}_name`)}</h2>
                  <p className={styles.qualification}>{t(`${selectedTeacher.key}_role`)}</p>
                  <p className={styles.description}>
                    {t(`${selectedTeacher.key}_desc`)}
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