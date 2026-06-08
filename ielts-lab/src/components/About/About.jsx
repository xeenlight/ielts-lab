import styles from "./About.module.css";


import { useTranslation } from "react-i18next";

import brain from '../../assets/brain.png';
import growth from '../../assets/growth.png';
import earth from '../../assets/earth.png';



import ieltsLabTeam3 from '../../assets/ieltsLabTeam3.jpg';
import ieltslabteam1 from '../../assets/ieltslabteamtree.jpg';

import molecule1 from "../../assets/ielts Lab (1).png";
import molecule2 from "../../assets/ielts Lab (2).png";
import molecule3 from "../../assets/ielts Lab (3).png";
import molecule4 from "../../assets/ielts Lab (4).png";
import molecule5 from "../../assets/ielts Lab (5).png";
import molecule6 from "../../assets/ielts Lab (6).png";
import HybridLearning from "../HybridLearning/HybridLearning";

function About() {
  const { t } = useTranslation();
  return (
    <section className={styles.about}>
      {/* BACKGROUND GLOW */}
      <div className={styles.glow}></div>

{/* FLOATING MOLECULES */}

<img
  src={molecule1}
  className={`${styles.floating} ${styles.float1}`}
  alt=""
/>

<img
  src={molecule2}
  className={`${styles.floating} ${styles.float2}`}
  alt=""
/>

<img
  src={molecule3}
  className={`${styles.floating} ${styles.float3}`}
  alt=""
/>

<img
  src={molecule4}
  className={`${styles.floating} ${styles.float4}`}
  alt=""
/>

<img
  src={molecule5}
  className={`${styles.floating} ${styles.float5}`}
  alt=""
/>

<img
  src={molecule6}
  className={`${styles.floating} ${styles.float6}`}
  alt=""
/>

<div className={styles.container}>
  {/* TOP */}
  <div className={styles.top}>
    <div className={styles.left}>
      <p className={styles.subtitle}>{t("about_subtitle")}</p>

      <h2 className={styles.title}>
        {t("about_title")}
      </h2>
    </div>

    <div className={styles.right}>
      <div className={styles.topImage}>
        <img src={ieltslabteam1} alt="IELTS LAB" />
      </div>
    </div>
  </div>

  {/* HYBRID SECTION */}
  <HybridLearning />

  {/* CARDS */}
  <div className={styles.cards}>
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={brain} alt="Brain Icon" className={styles.iconImage} />
      </div>
      <h3>{t("about_card1_title")}</h3>
      <p>{t("about_card1_desc")}</p>
    </div>

    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={growth} alt="Growth Icon" className={styles.iconImage} />
      </div>
      <h3>{t("about_card2_title")}</h3>
      <p>{t("about_card2_desc")}</p>
    </div>

    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={earth} alt="Earth Icon" className={styles.iconImage} />
      </div>
      <h3>{t("about_card3_title")}</h3>
      <p>{t("about_card3_desc")}</p>
    </div>
  </div>

  {/* BIG BLOCK */}
  <div className={styles.bigBlock}>
    <div className={styles.imageBlock}>
      <div className={styles.fakeImage}>
        <img src={ieltsLabTeam3} alt="About us" />
      </div>
    </div>

    <div className={styles.info}>
      <h3>{t("about_big_title")}</h3>

      <p>{t("about_big_desc1")}</p>
      <p>{t("about_big_desc2")}</p>
    </div>
  </div>
</div>
    </section>
  );
}

export default About;