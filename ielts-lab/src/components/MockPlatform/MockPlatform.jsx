import { motion } from "framer-motion";
import styles from "./MockPlatform.module.css";
import previewVideo from "../../assets/mock.mp4";

export default function MockPlatform() {
  return (
    <section className={styles.mockSection}>
      <div className={styles.glow}></div>

      <div className={styles.background}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            IELTS MOCK PLATFORM
          </span>

          <h2>
            Real IELTS Experience
            <br />
            Before The Real Exam
          </h2>

          <p>
            Practice in a real exam environment and receive a detailed feedback from an expert.
          </p>

          <div className={styles.features}>
            <div>✓ No ai involved</div>
            <div>✓ Instant band prediction</div>
            <div>✓ Results in 1-3 days</div>
            <div>✓ Face-to-face speaking only</div>
          </div>

          <a
            href="https://mock.ieltslab.uz/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Start Mock Test
          </a>
        </motion.div>

        <motion.div
          className={styles.preview}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.mockCard}>
            <div className={styles.topBar}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.screen}>
              <div className={styles.fakeChart}>
  <video
    className={styles.video}
    src={previewVideo}
    autoPlay
    muted
    loop
    playsInline
  />
</div>

              <div className={styles.stats}>
                <div>
                  <h3>7.5</h3>
                  <p>Free online mock tests</p>
                </div>

                <div>
                  <h3>92%</h3>
                  <p>100 similar to the real test platform</p>
                </div>
              </div>

              <div className={styles.lines}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}