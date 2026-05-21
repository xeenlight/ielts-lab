import { motion } from "framer-motion";
import styles from "./Location.module.css";

import locationImage from "../../assets/gift.png"; // можешь поставить фото центра / здания

export default function Location() {
  return (
    <section className={styles.location}>
      {/* Glow */}
      <div className={styles.glow}></div>

      {/* Molecules */}
      <div className={`${styles.molecule} ${styles.molecule1}`}></div>
      <div className={`${styles.molecule} ${styles.molecule2}`}></div>

      <div className={styles.container}>
        {/* LEFT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className={styles.subtitle}>LOCATION</p>

          <h2 className={styles.title}>
            IELTS LAB
            <br />
            LEARNING CENTER
          </h2>

          <p className={styles.description}>
            Наш учебный центр расположен в удобной локации Ташкента.
            Вы можете быстро открыть маршрут через Google Maps
            или Yandex Maps и добраться без проблем.
          </p>

          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <span>📍</span>
              <p>
                Ташкент, Yunusabad district
                <br />
                41°20'29.1"N 69°12'17.0"E
              </p>
            </div>

            <div className={styles.infoItem}>
              <span>🚇</span>
              <p>Удобная транспортная доступность</p>
            </div>

            <div className={styles.infoItem}>
              <span>⏰</span>
              <p>Открыто ежедневно с 09:00 до 21:00</p>
            </div>
          </div>

          <div className={styles.buttons}>
            <a
              href="https://maps.google.com/?q=41.341405,69.204709"
              target="_blank"
              rel="noreferrer"
              className={styles.googleBtn}
            >
              Google Maps
            </a>

            <a
              href="https://yandex.uz/maps/?pt=69.204709,41.341405&z=16&l=map"
              target="_blank"
              rel="noreferrer"
              className={styles.yandexBtn}
            >
              Yandex Maps
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.imageWrapper}>
            <img src={locationImage} alt="IELTS Lab Location" />

            <div className={styles.floatingCard}>
              <div className={styles.dot}></div>

              <div>
                <strong>IELTS LAB</strong>
                <p>Open in maps</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}