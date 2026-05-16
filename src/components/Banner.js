import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DownloadSimple,
  Lightning,
  Database,
  BracketsCurly,
} from "@phosphor-icons/react";
import { metrics, profile } from "../data/portfolio";

const orbitItems = ["Angular", "Node", "LoopBack", "MySQL", "TS"];

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center g-5">
          <Col xs={12} lg={7}>
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">
                <Lightning size={15} weight="fill" />
                {profile.role} at BU Soft Tech
              </span>
              <h1>
                {profile.name}
                <span> builds full-stack products with enterprise precision.</span>
              </h1>
              <p>{profile.summary}</p>

              <div className="hero-actions">
                <a className="button primary" href={profile.resume} target="_blank" rel="noreferrer">
                  <DownloadSimple size={18} weight="bold" />
                  Download CV
                </a>
                <a className="button ghost" href="#projects">
                  View Work
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>

              <div className="metric-row" aria-label="Professional highlights">
                {metrics.map((metric) => (
                  <div className="metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col xs={12} lg={5}>
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="visual-shell">
                <div className="code-window">
                  <div className="window-top">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="code-lines">
                    <p><b>const</b> stack = {`["Angular", "Node", "MySQL"];`}</p>
                    <p><b>build</b>{`("enterprise-app").with(LoopBack4);`}</p>
                    <p><b>ship</b>{`({ ui: "fast", api: "reliable" });`}</p>
                  </div>
                </div>

                <div className="orbital-system" aria-hidden="true">
                  <div className="core">
                    <BracketsCurly size={42} weight="bold" />
                  </div>
                  {orbitItems.map((item, index) => (
                    <span className={`orbit-token token-${index + 1}`} key={item}>
                      {item}
                    </span>
                  ))}
                  <div className="orbit-ring ring-one" />
                  <div className="orbit-ring ring-two" />
                  <div className="orbit-ring ring-three" />
                </div>

                <div className="system-card system-card-one">
                  <Database size={18} weight="fill" />
                  MySQL data flows
                </div>
                <div className="system-card system-card-two">
                  <Lightning size={18} weight="fill" />
                  Reusable Angular modules
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
