import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Certificate, GraduationCap } from "@phosphor-icons/react";
import { certifications } from "../data/portfolio";

export const Certifications = () => {
  return (
    <section className="certifications section-panel" id="certifications">
      <Container>
        <div className="section-heading">
          <span className="section-kicker">Credentials</span>
          <h2>Certifications that support the stack.</h2>
          <p>
            Frontend, database, and full-stack learning credentials from the latest LinkedIn profile
            export.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.article
              className="cert-card"
              key={cert.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="cert-icon">
                {index === certifications.length - 1 ? (
                  <GraduationCap size={24} weight="fill" />
                ) : (
                  <Certificate size={24} weight="fill" />
                )}
              </div>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
