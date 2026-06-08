import { useTranslation } from "react-i18next";
import styles from "./HybridLearning.module.css";

import teacher1 from "../../assets/about1.jpg";
import teacher2 from "../../assets/about2.jpg";
import teacher3 from "../../assets/about3.jpg";

import teacher4 from "../../assets/about4.png";
import teacher5 from "../../assets/about5.png";
import teacher6 from "../../assets/about6.png";

export default function HybridLearning() {
  const { t } = useTranslation();

  return (
    <section className={styles.hybrid}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t("hybrid_title1")}
          <span>{t("hybrid_title2")}</span>
        </h2>

        <p className={styles.subtitle}>
          {t("hybrid_subtitle")}
        </p>

        {/* OFFLINE */}

        <div className={styles.block}>
          <div className={styles.images}>
            <img src={teacher1} alt="" />
            <img src={teacher2} alt="" />
            <img src={teacher3} alt="" />
          </div>

          <div className={styles.content}>
            <span className={styles.badge}>
              OFFLINE FORMAT
            </span>

            <h3>{t("hybrid_offline")}</h3>

            <p>
              {t("hybrid_offline_description")}
            </p>

            <ul>
              <li>{t("hybrid_offline_1")}</li>
              <li>{t("hybrid_offline_2")}</li>
              <li>{t("hybrid_offline_3")}</li>
              <li>{t("hybrid_offline_4")}</li>
              <li>{t("hybrid_offline_5")}</li>
            </ul>
          </div>
        </div>

        {/* ONLINE */}

        <div className={`${styles.block} ${styles.reverse}`}>
          <div className={styles.content}>
            <span className={styles.badge}>
              ONLINE FORMAT
            </span>

            <h3>{t("hybrid_online")}</h3>

            <p>
              {t("hybrid_online_description")}
            </p>

            <ul>
              <li>{t("hybrid_online_1")}</li>
              <li>{t("hybrid_online_2")}</li>
              <li>{t("hybrid_online_3")}</li>
              <li>{t("hybrid_online_4")}</li>
              <li>{t("hybrid_online_5")}</li>
            </ul>
          </div>

          <div className={styles.images}>
            <img src={teacher4} alt="" />
            <img src={teacher5} alt="" />
            <img src={teacher6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}