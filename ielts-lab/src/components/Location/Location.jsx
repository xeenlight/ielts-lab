import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Location.module.css";

export default function Location() {
  const { t } = useTranslation();

  const yandexSrc =
    "https://yandex.ru/map-widget/v1/?ll=69.204552%2C41.341270&z=17&pt=69.204552,41.341270,pm2rdm";

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
          <p className={styles.subtitle}>{t("location_subtitle")}</p>

          <h2 className={styles.title}>
            {t("location_title1")}
            <br />
            {t("location_title2")}
          </h2>

          <p className={styles.description}>
            {t("location_description")}
          </p>

          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <span>📍</span>
              <p>
                {t("location_address")}
                <br />
                {t("location_coordinates")}
              </p>
            </div>

            <div className={styles.infoItem}>
              <span>🚇</span>
              <p>{t("location_transport")}</p>
            </div>

            <div className={styles.infoItem}>
              <span>⏰</span>
              <p>{t("location_hours")}</p>
            </div>
          </div>

          <div className={styles.buttons}>
            <a
              href="https://maps.app.goo.gl/kvhAscw9agTARHSJ6"
              target="_blank"
              rel="noreferrer"
              className={styles.googleBtn}
            >
              {t("location_google_maps")}
            </a>

            <a
              href="https://yandex.uz/maps/-/CPwbiBoE"
              target="_blank"
              rel="noreferrer"
              className={styles.yandexBtn}
            >
              {t("location_yandex_maps")}
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
          <div className={styles.mapWrapper}>
            <iframe
              title="IELTS LAB map"
              className={styles.mapFrame}
              src={yandexSrc}
              loading="lazy"
              allowFullScreen
            />

            <div className={styles.floatingCard}>
              <div className={styles.dot}></div>
              <div>
                <strong>{t("location_title1")}</strong>
                <p>{t("location_open_in_maps")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}