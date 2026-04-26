import styles from './Results.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useTranslation } from 'react-i18next';

import img1 from '../../assets/result1.jpg';
import img2 from '../../assets/result1.jpg';
import img3 from '../../assets/result1.jpg';
import img4 from '../../assets/result1.jpg';
import img5 from '../../assets/result1.jpg';
import img6 from '../../assets/result1.jpg';
import img7 from '../../assets/result1.jpg';
import img8 from '../../assets/result1.jpg';
import img9 from '../../assets/result1.jpg';

export default function Results() {
  const [activeImg, setActiveImg] = useState(null);
  const [zoom, setZoom] = useState(false);
  const { t } = useTranslation();
  const data = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className={styles.section}>
      
      {/* 🔥 ТЕКСТ КАК В HERO */}
      <p className={styles.sub}>{t('results_sub')}</p>

      <h2 className={styles.title}>
        {t('results_title')}
      </h2>

      <p className={styles.desc}>{t('results_desc')}</p>


<Swiper
  modules={[EffectCoverflow]}
  effect="coverflow"
  centeredSlides
  grabCursor
  loop

  slidesPerView={3} // база (мобилка)

  breakpoints={{
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }}

  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 2,
    slideShadows: false,
  }}

  className={styles.slider}
>
        {data.map((img, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <motion.img
              src={img}
              onClick={() => setActiveImg(img)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className={styles.desc2}>{t('results_desc2')}</p>
      {/* MODAL */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            className={styles.modal}
            onClick={() => {
              setActiveImg(null);
              setZoom(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={activeImg}
              className={`${styles.modalImg} ${zoom ? styles.zoomed : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setZoom(!zoom);
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}