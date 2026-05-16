import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "@phosphor-icons/react";
import { experiences } from "../data/portfolio";

export const Experience = () => {
  return (
    <section className="experience section-panel" id="experience">
      <Container>
        <div className="section-heading">
          <span className="section-kicker">Experience</span>
          <h2>Professional work shaped by enterprise product delivery.</h2>
          <p>
            A practical journey from trainee roles into full-stack JavaScript engineering, with
            current emphasis on Angular, LoopBack 4, and MySQL-backed applications.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <motion.article
              className="experience-card"
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="experience-meta">
                <span className="type-pill">{item.type}</span>
                <span>{item.period}</span>
              </div>
              <div className="experience-content">
                <div>
                  <h3>{item.role}</h3>
                  <h4>
                    <Briefcase size={16} weight="fill" />
                    {item.company}
                  </h4>
                  <span className="location">
                    <MapPin size={15} weight="fill" />
                    {item.location}
                  </span>
                </div>
                <div>
                  <p>{item.summary}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
