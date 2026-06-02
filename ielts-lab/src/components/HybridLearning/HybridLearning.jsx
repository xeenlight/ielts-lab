import { useTranslation } from "react-i18next";
import styles from "./HybridLearning.module.css";

import laptop from "../../assets/laptop.png";
import courthouse from "../../assets/courthouse.png";
import christmas from "../../assets/christmas.png";

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

        <div className={styles.cards}>
          {/* ONLINE */}
          <div className={styles.card}>
            <div className={styles.header}>
              <div className={styles.icon}>
                <img src={laptop} alt="Laptop Icon" className={styles.iconImage} />
              </div>
              <h3>{t("hybrid_online")}</h3>
            </div>

            <ul>
              <li>{t("hybrid_online_1")}</li>
              <li>{t("hybrid_online_2")}</li>
              <li>{t("hybrid_online_3")}</li>
              <li>{t("hybrid_online_4")}</li>
              <li>{t("hybrid_online_5")}</li>
              <li>{t("hybrid_online_6")}</li>
              <li>{t("hybrid_online_7")}</li>
            </ul>
          </div>

          {/* CENTER */}
          <div className={styles.centerWrapper}>
            <div className={`${styles.plus} ${styles.plusLeft}`}>+</div>

            <div className={styles.centerCard}>
              <div className={styles.centerIcon}>
                <img src={christmas} alt="Center Icon" className={styles.iconImage} />
              </div>

              <h3>{t("hybrid_best_of_both")}</h3>

              <ul>
                <li>{t("hybrid_best_1")}</li>
                <li>{t("hybrid_best_2")}</li>
                <li>{t("hybrid_best_3")}</li>
                <li>{t("hybrid_best_4")}</li>
                <li>{t("hybrid_best_5")}</li>
                <li>{t("hybrid_best_6")}</li>
                <li>{t("hybrid_best_7")}</li>
              </ul>
            </div>

            <div className={`${styles.plus} ${styles.plusRight}`}>+</div>
          </div>

          {/* OFFLINE */}
          <div className={styles.card}>
            <div className={styles.header}>
              <div className={styles.icon}>
                <img src={courthouse} alt="Courthouse Icon" className={styles.iconImage} />
              </div>
              <h3>{t("hybrid_offline")}</h3>
            </div>

            <ul>
              <li>{t("hybrid_offline_1")}</li>
              <li>{t("hybrid_offline_2")}</li>
              <li>{t("hybrid_offline_3")}</li>
              <li>{t("hybrid_offline_4")}</li>
              <li>{t("hybrid_offline_5")}</li>
              <li>{t("hybrid_offline_6")}</li>
              <li>{t("hybrid_offline_7")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}