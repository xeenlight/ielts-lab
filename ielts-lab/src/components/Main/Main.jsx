import { useEffect, useMemo, useState } from "react";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import styles from "./Main.module.css";

function Main() {
  const [mainColor, setMainColor] = useState("#00b6b9");

  // INIT PARTICLES
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };
const isLight =
  document.documentElement.getAttribute(
    "data-theme"
  ) === "light";
  
  // THEME COLOR UPDATE
  useEffect(() => {
    const updateThemeColor = () => {
      const rootStyles = getComputedStyle(
        document.documentElement
      );

      const color = rootStyles
        .getPropertyValue("--color-bg-main")
        .trim();

      setMainColor(color);
    };

    updateThemeColor();

    const observer = new MutationObserver(
      updateThemeColor
    );

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // PARTICLES OPTIONS
const particlesOptions = useMemo(
  () => {
    const isLight =
      document.documentElement.getAttribute(
        "data-theme"
      ) === "light";

    return {
      fullScreen: false,

      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 120,

      particles: {
        number: {
          value: isLight ? 135 : 110,

          density: {
            enable: true,
            area: 1200,
          },
        },
number: {
  value: isLight ? 135 : 110,

  limit: 90,

  density: {
    enable: true,
    area: 1200,
  },
},
        color: {
          value: mainColor,
        },

        links: {
          enable: true,

          color: mainColor,

          distance: 155,

          opacity: isLight ? 0.32 : 0.14,

          width: isLight ? 1.2 : 1,

          triangles: {
            enable: true,
            opacity: isLight ? 0.04 : 0.02,
          },
        },

        move: {
          enable: true,

          speed: 0.8,

          random: false,

          straight: false,

          outModes: {
            default: "bounce",
          },

          attract: {
            enable: false,
          },
        },

        opacity: {
          value: isLight
            ? { min: 0.15, max: 1 }
            : { min: 0.05, max: 0.9 },

          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },

        size: {
          value: {
            min: isLight ? 1 : 0.6,
            max: isLight ? 4 : 3.2,
          },

          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.3,
            sync: false,
          },
        },

        shadow: {
          enable: isLight,

          color: mainColor,

          blur: 12,
        },
      },

      interactivity: {
        detectsOn: "window",

        events: {
          onHover: {
            enable: true,

            mode: ["grab"],
          },

          onClick: {
            enable: true,

            mode: ["push"],
          },

          resize: true,
        },

        modes: {
          grab: {
            distance: 220,

            links: {
              opacity: isLight ? 0.8 : 0.45,
            },
          },

          repulse: {
            distance: 140,

            duration: 0.4,

            factor: 100,
          },

          push: {
            quantity: 2,
          },
        },
      },

      detectRetina: true,
    };
  },
  [mainColor]
);

  return (
    <section className={styles.hero}>
      {/* PARTICLES */}
      {!isLight && (
  <div className={styles.clusterGlow}></div>
)}

      <Particles
        id="tsparticles"
        init={particlesInit}
        className={styles.particles}
        options={particlesOptions}
      />

      {/* GLOW */}
      <div className={styles.glow}></div>

      {/* CONTENT */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            ХОЧЕШЬ НАЧАТЬ ГОТОВИТЬСЯ К<span> IELTS </span> ПРЯМО СЕЙЧАС?
          </h1>

          <p className={styles.description}>
            Уроки один на один с каждым
            <br />
            запишись сегодня и начни учиться уже завтра.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Бесплатный урок
            </button>


          </div>


        </div>
      </div>
    </section>
  );
}

export default Main;