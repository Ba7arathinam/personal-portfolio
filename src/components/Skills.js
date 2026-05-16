import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export const Skills = () => {
  return (
    <section className="skill section-panel" id="skills">
      <Container>
        <div className="section-heading">
          <span className="section-kicker">Skills</span>
          <h2>Modern JavaScript stack with enterprise delivery depth.</h2>
          <p>
            Official technology logos are presented in readable, consistent tiles so the section
            feels sharp instead of noisy.
          </p>
        </div>

        <div className="skill-categories">
          {skills.map((category, categoryIndex) => (
            <motion.article
              className="skill-category-card"
              key={category.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.08 }}
            >
              <div className="skill-category-head">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <div className="skill-grid">
                {category.items.map((skill) => (
                  <motion.div
                    className="skill-tile"
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <span className="logo-box">
                      <img src={skill.icon} alt={`${skill.name} logo`} loading="lazy" />
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};
