import { motion } from "framer-motion";
import styles from "./MockPlatform.module.css";

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
            Practice in a real exam environment with
            timer, analytics, band prediction and
            detailed feedback.
          </p>

          <div className={styles.features}>
            <div>✓ Real exam simulation</div>
            <div>✓ Instant band prediction</div>
            <div>✓ AI-powered analytics</div>
            <div>✓ Speaking & Writing evaluation</div>
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
              <div className={styles.fakeChart}></div>

              <div className={styles.stats}>
                <div>
                  <h3>7.5</h3>
                  <p>Predicted Band</p>
                </div>

                <div>
                  <h3>92%</h3>
                  <p>Accuracy</p>
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