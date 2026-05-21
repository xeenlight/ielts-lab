// Main.jsx

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styles from "./Main.module.css";

function Main() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
const rootStyles = getComputedStyle(document.documentElement);

const mainColor =
  rootStyles.getPropertyValue("--color-bg-main").trim();
  return (
    <section className={styles.hero}>
      {/* PARTICLES BACKGROUND */}

<div className={styles.clusterGlow}></div>
<Particles
  id="tsparticles"
  init={particlesInit}
  className={styles.particles}
options={{
  fullScreen: false,

  background: {
    color: "transparent",
  },

  fpsLimit: 60,

  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        area: 1400,
      },
    },

    color: {
      value: "#00b6b9",
    },

    links: {
      enable: true,

        color: mainColor,

      distance: 150,

      opacity: 0.12,

      width: 1,

      triangles: {
        enable: true, // ВАЖНО
      },
    },

    move: {
      enable: true,

      speed: 0.6, // меньше лагов

      random: true,

      outModes: {
        default: "out",
      },
    },

opacity: {
  value: {
    min: 0.05,
    max: 0.9,
  },

  animation: {
    enable: true,
    speed: 0.3,
    sync: false,
  },
},

size: {
  value: {
    min: 0.6,
    max: 3.2,
  },

  animation: {
    enable: true,
    speed: 1,
    minimumValue: 0.3,
    sync: false,
  },
},

    shadow: {
      enable: false, // ОЧЕНЬ ЖРЕТ FPS
    },
  },

  interactivity: {
    detectsOn: "canvas",

    events: {
      onHover: {
        enable: true,

        mode: "grab",
      },

      resize: true,
    },
    number: {
  value: 140,
  density: {
    enable: true,
    area: 1300,
  },
},

    modes: {
      grab: {
        distance: 180,

        links: {
          opacity: 0.35,
        },
      },
    },
  },

  detectRetina: false, // ОЧЕНЬ ВАЖНО
}}
/>

      {/* GLOW */}
      <div className={styles.glow}></div>

      {/* CONTENT */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            ENGLISH
            <span>FOR THE FUTURE</span>
          </h1>

          <p className={styles.description}>
            Практические курсы английского языка
            <br />
            для учебы, карьеры и уверенного будущего.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Бесплатный урок
            </button>

            <button className={styles.secondaryBtn}>
              Смотреть видео
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>Студентов</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.statItem}>
              <h3>7.5</h3>
              <p>Средний IELTS</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.statItem}>
              <h3>95%</h3>
              <p>Довольных учеников</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;