import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ToDo-App",
      description: "Here I use basic react,redux,css styles to create this ToDo app",
      imgUrl: "https://wallpapercave.com/wp/wp4924025.jpg",
      projectLink:"https://incredible-lolly-4b8de3.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/To-do-Guvi-react-redux-session",

    },
    {
      title: "Calculatur",
      description: "Designed by HTML & CSS",
      imgUrl:"https://wallpapercave.com/wp/wp7718051.jpg",
      projectLink:"https://dreamy-smakager-959409.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/DAY-15-TASK-DOM-calculator-",
    },
    {
      title: "Dashboard",
      description: "Simple dashbord created by Bootstrap with ReactJS",
      imgUrl: "https://wallpapercave.com/dwp1x/wp6350573.jpg",
      projectLink:"https://admirable-dieffenbachia-cf4f49.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/TASK-25-DashBoard",
    },
    {
      title: "Room Booking site(Demo)",
      description: "Design & Developed by ReactJS",
      imgUrl:"https://wallpapercave.com/wp/wp7718000.jpg",
      projectLink:"https://zinroom-booking.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Front-end-repo-ZenBook-Balarathinam-T-frontend",
    },
    {
      title: "Rental product UI design",
      description: "Design and built by ReactJs & MaterialUI",
      imgUrl: "https://wallpapercave.com/wp/wp6734584.png",
      projectLink:"https://helpful-bublanina-7fda66.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/webcode-rentalx-Ui-design",
    },
    {
      title: "Newspaper UI design ",
      description: "Design by HTML & CSS",
      imgUrl: "https://wallpapercave.com/dwp1x/wp6351045.jpg",
      projectLink:"https://spiffy-yeot-1484d3.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/DAY12-TASK2",
    },
  ];
  const projects1 = [
    {
      title: "PokemonApi",
      description: "fetch 50 pokemon Api with power",
      imgUrl: "https://wallpapercave.com/wp/wp4924025.jpg",
      projectLink:"https://moonlit-vacherin-d242d4.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/pokemon-2nd",

    },
    {
      title: "Calculatur",
      description: "Designed by HTML & CSS",
      imgUrl:"https://wallpapercave.com/wp/wp7718051.jpg",
      projectLink:"https://dreamy-smakager-959409.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/DAY-15-TASK-DOM-calculator-",
    },
    {
      title: "Dashboard",
      description: "Simple dashbord created by Bootstrap with ReactJS",
      imgUrl: "https://wallpapercave.com/dwp1x/wp6350573.jpg",
      projectLink:"https://admirable-dieffenbachia-cf4f49.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/TASK-25-DashBoard",
    },
    {
      title: "Room Booking site(Demo)",
      description: "Design & Developed by ReactJS",
      imgUrl:"https://wallpapercave.com/wp/wp7718000.jpg",
      projectLink:"https://zinroom-booking.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Front-end-repo-ZenBook-Balarathinam-T-frontend",
    },
    {
      title: "Rental product UI design",
      description: "Design and built by ReactJs & MaterialUI",
      imgUrl: "https://wallpapercave.com/wp/wp6734584.png",
      projectLink:"https://helpful-bublanina-7fda66.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/webcode-rentalx-Ui-design",
    },
    {
      title: "Newspaper UI design ",
      description: "Design by HTML & CSS",
      imgUrl: "https://wallpapercave.com/dwp1x/wp6351045.jpg",
      projectLink:"https://spiffy-yeot-1484d3.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/DAY12-TASK2",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Empty</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
