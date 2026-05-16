import { Container } from "react-bootstrap";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { profile } from "../data/portfolio";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-inner">
          <div>
            <strong>{profile.name}</strong>
            <p>{profile.headline} based in {profile.location}.</p>
          </div>
          <div className="footer-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubLogo size={20} weight="fill" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <EnvelopeSimple size={20} weight="fill" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
