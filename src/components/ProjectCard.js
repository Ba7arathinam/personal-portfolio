import { motion } from "framer-motion";
import { ArrowUpRight, GithubLogo, StackSimple } from "@phosphor-icons/react";

export const ProjectCard = ({
  title,
  type,
  description,
  tags = [],
  projectLink,
  gitLink,
  gitLink1,
  accent = "blue",
}) => {
  return (
    <motion.article
      className={`project-card accent-${accent}`}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
    >
      <div className="project-art">
        <div className="project-node node-one" />
        <div className="project-node node-two" />
        <div className="project-node node-three" />
        <StackSimple size={42} weight="duotone" />
      </div>

      <div className="project-body">
        <span className="project-type">{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {projectLink && (
          <a href={projectLink} target="_blank" rel="noreferrer">
            Live
            <ArrowUpRight size={15} weight="bold" />
          </a>
        )}
        {gitLink && (
          <a href={gitLink} target="_blank" rel="noreferrer">
            <GithubLogo size={16} weight="fill" />
            Frontend
          </a>
        )}
        {gitLink1 && (
          <a href={gitLink1} target="_blank" rel="noreferrer">
            <GithubLogo size={16} weight="fill" />
            Backend
          </a>
        )}
      </div>
    </motion.article>
  );
};
