// Main.jsx

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styles from "./Main.module.css";

function Main() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className={styles.hero}>
      {/* PARTICLES BACKGROUND */}


<Particles
  id="tsparticles"
  init={particlesInit}
  className={styles.particles}
  options={{
    fullScreen: false,

    background: {
      color: "transparent",
    },

    fpsLimit: 120,

    particles: {
      number: {
        value: 180, // БЫЛО 90
        density: {
          enable: true,
          area: 1000,
        },
      },

      color: {
        value: "#00b6b9", // var(--color-primary)
      },

      links: {
        enable: true,

        color: "#00b6b9",

        distance: 140,

        opacity: 0.12,

        width: 1,

        triangles: {
          enable: true,
          opacity: 0.015,
        },
      },

      move: {
        enable: true,

        speed: 1.1,

        direction: "none",

        random: true,

        straight: false,

        outModes: {
          default: "bounce",
        },

        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },

      opacity: {
        value: {
          min: 0.15,
          max: 0.9,
        },

        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false,
        },
      },

      size: {
        value: {
          min: 1,
          max: 4,
        },

        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        },
      },

      shadow: {
        enable: true,

        color: "#00b6b9",

        blur: 12,
      },
    },

    interactivity: {
      detectsOn: "window",

      events: {
        onHover: {
          enable: true,

          mode: ["grab", "bubble", "repulse"],
        },

        onClick: {
          enable: false,
        },

        resize: true,
      },

      modes: {
        grab: {
          distance: 220,

          links: {
            opacity: 0.45,
          },
        },

        bubble: {
          distance: 250,

          size: 7,

          duration: 2,

          opacity: 1,
        },

        repulse: {
          distance: 120,
          duration: 0.4,
        },
      },
    },

    detectRetina: true,
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