import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/portfolio";

export const Projects = () => {
  return (
    <section className="project section-panel" id="projects">
      <Container>
        <div className="section-heading">
          <span className="section-kicker">Projects</span>
          <h2>Selected product work and full-stack builds.</h2>
          <p>
            A mix of professional enterprise contributions and personal projects that show frontend,
            backend, data, and product implementation range.
          </p>
        </div>

        <motion.div
          className="project-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
