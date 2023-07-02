import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <b>𝐓 𝐁𝐀𝐋𝐀𝐑𝐀𝐓𝐇𝐈𝐍𝐀𝐌 </b>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/balarathinam-t-350b5821b" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Ba7arathinam" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:bala01225@gmail.com" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved by Balarathinam</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
