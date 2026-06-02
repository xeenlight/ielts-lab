import styles from './Course.module.css';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';

// BACKGROUND IMAGES
import molecule1 from '../../assets/ielts Lab (1).png';
import molecule2 from '../../assets/ielts Lab (2).png';
import molecule3 from '../../assets/ielts Lab (3).png';
import molecule4 from '../../assets/ielts Lab (4).png';
import molecule5 from '../../assets/ielts Lab (5).png';
import molecule6 from '../../assets/ielts Lab (6).png';

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

    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <div className={styles.coursePage}>

      {/* FLOATING BACKGROUND */}

      <img
        src={molecule1}
        className={`${styles.bgShape} ${styles.shape1}`}
        alt=""
      />

      <img
        src={molecule2}
        className={`${styles.bgShape} ${styles.shape2}`}
        alt=""
      />

      <img
        src={molecule3}
        className={`${styles.bgShape} ${styles.shape3}`}
        alt=""
      />

      <img
        src={molecule4}
        className={`${styles.bgShape} ${styles.shape4}`}
        alt=""
      />

      <img
        src={molecule5}
        className={`${styles.bgShape} ${styles.shape5}`}
        alt=""
      />

      <img
        src={molecule6}
        className={`${styles.bgShape} ${styles.shape6}`}
        alt=""
      />

      {/* HERO */}

<section className={styles.hero}>
  <div className={styles.heroGlow}></div>

  <div className={styles.container}>
    <div className={styles.heroTop}>
      <h1 className={styles.heroTitle}>
        {t("hero_final_get")}
        <br />
        <span className={styles.accent}>{t("hero_final_ielts")}</span>,
        <br />
        {t("hero_final_without")}{" "}
        <span className={styles.money}>{t("hero_final_money")}</span>
        {" и "}
        <span className={styles.time}>{t("hero_final_time")}</span>{" "}
        <span className={styles.wasted}>{t("hero_final_wasted")}</span>.
      </h1>

      <p className={styles.heroText}>
        {t("hero_final_join")}{" "}
        <span>{t("hero_final_live_classes")}</span>{" "}
        {t("hero_final_save")}
      </p>
    </div>

    {/* VIDEO */}
    <div className={styles.videoBlock}>
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="IELTS Lab Course"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className={styles.heroText}>
        <p>
          {t("hero_final_daily")}{" "}
          <span>{t("hero_final_c1")}</span>{" "}
          {t("hero_final_experience")}
        </p>
      </div>

      <button onClick={scrollToForm} className={styles.ctaBig}>
        {t("hero_final_button")}
      </button>
    </div>
  </div>
</section>

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
                <strong>
                  {t('testimonial1_name')}
                </strong>

                <span>
                  Band 8.0
                </span>
              </div>

            </div>

            <div className={styles.testimonialCard}>

              <p className={styles.quote}>
                {t('testimonial2')}
              </p>

              <div className={styles.author}>
                <strong>
                  {t('testimonial2_name')}
                </strong>

                <span>
                  Band 7.5
                </span>
              </div>

            </div>

            <div className={styles.testimonialCard}>

              <p className={styles.quote}>
                {t('testimonial3')}
              </p>

              <div className={styles.author}>
                <strong>
                  {t('testimonial3_name')}
                </strong>

                <span>
                  Band 8.5
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* EXPERIENCE */}

<section className={styles.experienceSection}>
  <div className={styles.container}>
    <div className={styles.sectionHead}>
      <p>{t("experience_subtitle")}</p>

      <h2 className={styles.sectionTitle}>
        {t("experience_title")}
      </h2>
    </div>

    <div className={styles.experienceLayout}>
      {/* BIG CARD */}
      <div className={styles.experienceMain}>
        <div className={styles.cardGlow}></div>

        <span>01</span>

        <h3>{t("experience_card1_title")}</h3>

        <p>{t("experience_card1_desc")}</p>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.experienceSide}>
        <div className={styles.miniCard}>
          <span>02</span>
          <h4>{t("experience_card2_title")}</h4>
          <p>{t("experience_card2_desc")}</p>
        </div>

        <div className={styles.miniCard}>
          <span>03</span>
          <h4>{t("experience_card3_title")}</h4>
          <p>{t("experience_card3_desc")}</p>
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
                  openIndex === index
                    ? styles.active
                    : ''
                }`}
                onClick={() =>
                  toggleAccordion(index)
                }
              >

                <div className={styles.faqQuestion}>

                  <h3>
                    {item.q}
                  </h3>

                  <span className={styles.plus}>
                    {openIndex === index
                      ? '−'
                      : '+'}
                  </span>

                </div>

                <div className={styles.faqAnswer}>
                  <p>
                    {item.a}
                  </p>
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