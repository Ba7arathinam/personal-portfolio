import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Code, Database, GitBranch, Stack } from "@phosphor-icons/react";
import { education, profile } from "../data/portfolio";

const principles = [
  {
    icon: <Stack size={22} weight="bold" />,
    title: "Product-minded frontend",
    text: "I build Angular modules and interfaces that stay readable, reusable, and friendly to real product teams.",
  },
  {
    icon: <Database size={22} weight="bold" />,
    title: "Connected backend thinking",
    text: "I work close to APIs, LoopBack services, and MySQL flows so the UI and data model move together.",
  },
  {
    icon: <GitBranch size={22} weight="bold" />,
    title: "Delivery discipline",
    text: "I value clean implementation, debugging depth, and steady collaboration with developers, QA, and project teams.",
  },
];

export const About = () => {
  return (
    <section className="about section-panel" id="about">
      <Container>
        <div className="section-heading align-left">
          <span className="section-kicker">About</span>
          <h2>Full-stack developer with a strong enterprise application foundation.</h2>
        </div>

        <div className="about-layout">
          <motion.div
            className="about-story"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I started at BU Soft Tech as a Software Engineer Trainee and moved into an Associate
              Software Engineer role after hands-on work across frontend development, backend
              services, and database integration.
            </p>
            <p>
              My strongest day-to-day work is Angular and TypeScript, backed by Node.js, LoopBack 4,
              and MySQL. I enjoy turning complex business workflows into clear modules, reliable API
              interactions, and user interfaces that feel calm to use.
            </p>
            <div className="focus-grid">
              {profile.focus.map((item) => (
                <span key={item}>
                  <Code size={16} weight="bold" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="principle-grid">
            {principles.map((item, index) => (
              <motion.article
                className="principle-card"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="principle-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="education-strip">
          {education.map((item) => (
            <div className="education-item" key={item.school}>
              <span>{item.period}</span>
              <strong>{item.program}</strong>
              <p>{item.school}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
