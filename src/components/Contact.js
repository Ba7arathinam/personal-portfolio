import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Envelope, GithubLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react";
import { profile } from "../data/portfolio";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm("service_anzujzt", "template_9sk1kic", form.current, "ftNggnWzizmIdkOpW")
      .then(() => {
        setStatus({ success: true, message: "Message sent. I will get back to you soon." });
        form.current.reset();
      })
      .catch(() => {
        setStatus({ success: false, message: "Message could not be sent. Please email me directly." });
      })
      .finally(() => setButtonText("Send Message"));
  };

  return (
    <section className="contact section-panel" id="contact">
      <Container>
        <Row className="g-4 align-items-start">
          <Col xs={12} lg={5}>
            <motion.div
              className="contact-copy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <span className="section-kicker">Contact</span>
              <h2>Let's build something reliable, useful, and polished.</h2>
              <p>
                Open to full-stack JavaScript roles, Angular-heavy product work, and enterprise
                application development opportunities.
              </p>

              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>
                  <Envelope size={20} weight="fill" />
                  {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinLogo size={20} weight="fill" />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <GithubLogo size={20} weight="fill" />
                  GitHub
                </a>
                <span>
                  <MapPin size={20} weight="fill" />
                  {profile.location}
                </span>
              </div>
            </motion.div>
          </Col>

          <Col xs={12} lg={7}>
            <motion.form
              ref={form}
              className="contact-form"
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <div className="form-grid">
                <input type="text" placeholder="First name" name="user_name" required />
                <input type="text" placeholder="Last name" name="user_last" />
                <input type="email" placeholder="Email address" name="user_email" required />
                <input type="tel" placeholder="Phone number" name="user_num" />
              </div>
              <textarea rows="5" placeholder="Tell me about the role or project" name="message" required />
              <button className="button primary" type="submit">
                {buttonText}
              </button>
              {status.message && (
                <p className={status.success ? "success" : "danger"}>{status.message}</p>
              )}
            </motion.form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
