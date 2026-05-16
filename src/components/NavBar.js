import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from "@phosphor-icons/react";
import { profile } from "../data/portfolio";

const navItems = ["home", "about", "experience", "skills", "projects", "certifications", "contact"];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" aria-label="Balarathinam portfolio home">
          <span className="brand-mark">BT</span>
          <span>Balarathinam</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item}
                href={`#${item}`}
                className={activeLink === item ? "active navbar-link" : "navbar-link"}
                onClick={() => setActiveLink(item)}
              >
                {item === "certifications" ? "Credentials" : item.charAt(0).toUpperCase() + item.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <div className="navbar-actions">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinLogo size={18} weight="fill" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubLogo size={18} weight="fill" />
            </a>
            <a className="nav-cta" href="#contact">
              <PaperPlaneTilt size={16} weight="fill" />
              Hire Me
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
