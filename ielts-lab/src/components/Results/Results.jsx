import styles from './Results.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useTranslation } from 'react-i18next';

import img1 from '../../assets/ielts Lab Result 1.jpg';
import img2 from '../../assets/ielts Lab Result 2.jpg';
import img3 from '../../assets/ielts Lab Result 3.jpg';
import img4 from '../../assets/ielts Lab Result 4.jpg';
import img5 from '../../assets/ielts Lab Result 5.jpg';
import img6 from '../../assets/ielts Lab Result 6.jpg';
import img7 from '../../assets/ielts Lab Result 7.jpg';
import img8 from '../../assets/ielts Lab Result 8.jpg';
import img9 from '../../assets/ielts Lab Result 9.jpg';
import img10 from '../../assets/ielts Lab Result 10.jpg';
import img11 from '../../assets/ielts Lab Result 11.jpg';
import img12 from '../../assets/ielts Lab Result 12.jpg';
import img13 from '../../assets/ielts Lab Result 13.jpg';
import img14 from '../../assets/ielts Lab Result 14.jpg';
import img15 from '../../assets/ielts Lab Result 15.jpg';
import img16 from '../../assets/ielts Lab Result 16.jpg';

export default function Results() {
  const [activeImg, setActiveImg] = useState(null);
  const [zoom, setZoom] = useState(false);
  const { t } = useTranslation();

  const data = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

  return (
    <section className={styles.section}>
      <p className={styles.sub}>{t('results_sub')}</p>
      <h2 className={styles.title}>{t('results_title')}</h2>
      <p className={styles.desc}>{t('results_desc')}</p>

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        loopAdditionalSlides={4}           // ← Важно для симметрии
        slidesPerView={3}
        speed={800}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: false,        // ← Убирает залипание
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 5 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,           // уменьшил для лучшей симметрии
          modifier: 2.4,
          slideShadows: false,
        }}
        className={styles.slider}
      >
        {data.map((img, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <motion.img
              src={img}
              alt={`Результат ${i + 1}`}
              className={styles.resultImg}
              onClick={() => setActiveImg(img)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}