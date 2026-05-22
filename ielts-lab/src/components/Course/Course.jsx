import styles from './Course.module.css';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';

const videoId = "M3FNjV4br7k";

export default function Course() {
  const { t } = useTranslation();
  const formRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(0);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

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
    <div className={styles.coursePage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.glow}></div>

        <div className={styles.container}>
          <p className={styles.subtitle}>
            IELTS LAB COURSE
          </p>

          <h1 className={styles.title}>
            IELTS TO <span>8.0+</span>
          </h1>

          <p className={styles.heroDesc}>
            {t('course_subtitle')}
          </p>

          <div className={styles.videoWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title="IELTS Lab Course"
              frameBorder="0"
              allowFullScreen
            />
          </div>

          <button
            onClick={scrollToForm}
            className={styles.ctaBig}
          >
            {t('open_form')}
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>3000+</h3>
              <p>Students trained</p>
            </div>

            <div className={styles.statCard}>
              <h3>8.0 Avg</h3>
              <p>Average band score</p>
            </div>

            <div className={styles.statCard}>
              <h3>8–12 Weeks</h3>
              <p>Structured preparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            What You Get
          </h2>

          <div className={styles.benefitsGrid}>
            <div className={styles.card}>
              <h3>Writing Templates</h3>
              <p>
                Band 8+ structures for Task 1 & Task 2.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Speaking Practice</h3>
              <p>
                Mock speaking sessions with expert feedback.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Reading Strategies</h3>
              <p>
                Time-saving techniques for every question type.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Listening System</h3>
              <p>
                Train accuracy, speed, and vocabulary recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className={styles.program}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Course Program
          </h2>

          <div className={styles.programGrid}>
            <div className={styles.card}>
              <span className={styles.week}>
                Week 1–2
              </span>

              <h3>Foundation</h3>

              <p>
                Assessment, strategy building,
                weak area analysis.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.week}>
                Week 3–6
              </span>

              <h3>Skill Development</h3>

              <p>
                Writing, speaking, listening
                and reading systems.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.week}>
                Week 7–12
              </span>

              <h3>Exam Simulation</h3>

              <p>
                Mocks, corrections, timing
                and exam psychology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {t('testimonials_title')}
          </h2>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                {t('testimonial1')}
              </p>

              <div className={styles.author}>
                <strong>{t('testimonial1_name')}</strong>
                <span>Band 8.0</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                {t('testimonial2')}
              </p>

              <div className={styles.author}>
                <strong>{t('testimonial2_name')}</strong>
                <span>Band 7.5</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                {t('testimonial3')}
              </p>

              <div className={styles.author}>
                <strong>{t('testimonial3_name')}</strong>
                <span>Band 8.5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {t('faq_title')}
          </h2>

          <div className={styles.accordion}>
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  openIndex === index ? styles.active : ''
                }`}
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

          <div className={styles.ctaCenter}>
            <button
              onClick={scrollToForm}
              className={styles.ctaBig}
            >
              {t('open_form')}
            </button>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        ref={formRef}
        id="form"
        className={styles.formSection}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {t('form_title')}
          </h2>

          <p className={styles.formSubtitle}>
            {t('form_subtitle')}
          </p>

          <div className={styles.formCard}>
            {/* amoCRM form */}
          </div>
        </div>
      </section>
    </div>
  );
}