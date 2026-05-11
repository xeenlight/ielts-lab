import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CourseFAQ.module.css';

export default function CourseFAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0); // первый открыт по умолчанию

  const faqs = [
    {
      q: t('faq1_q'),
      a: t('faq1_a')
    },
    {
      q: t('faq2_q'),
      a: t('faq2_a')
    },
    {
      q: t('faq3_q'),
      a: t('faq3_a')
    },
    {
      q: t('faq4_q'),
      a: t('faq4_a')
    },
    {
      q: t('faq5_q'),
      a: t('faq5_a')
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {t('faq_title') || "Часто задаваемые вопросы"}
        </h2>

        <div className={styles.accordion}>
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.faqQuestion}>
                <h3>{item.q}</h3>
                <span className={styles.plus}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Большая кнопка в стиле референса */}
        <div className={styles.ctaCenter}>
          <button 
            onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
            className={styles.ctaBig}
          >
            {t('open_form') || "Я ГОТОВ(А) ЗАПИСАТЬСЯ"}
          </button>
        </div>
      </div>
    </section>
  );
}