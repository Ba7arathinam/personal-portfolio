import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';


export const Projects = () => {

  const projects = [
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
    {
      title: "ToDo-App",
      description: "Here I use basic react,redux,css styles to create this ToDo app",
      imgUrl: "https://wallpapercave.com/wp/wp7718000.jpg",
      projectLink:"https://incredible-lolly-4b8de3.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/To-do-Guvi-react-redux-session",

    },
    {
      title: "Movies-Rating-App",
      description: "In this app ,I use Advance JS,mongoDB,mock API for data,MaterialUI for Design",
      imgUrl:"https://wallpapercave.com/dwp1x/wp6351045.jpg",
      projectLink:"https://resplendent-strudel-4e8f07.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/movie-rating-app",
    },
    {
      title: "Dashboard",
      description: "This dashbord created by ReactJS with Bootstrap and some additional design tools like materialUI ",
      imgUrl: "https://wallpapercave.com/wp/wp4924025.jpg",
      projectLink:"https://storied-sunflower-23b681.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/dashboard-app",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
          
              <div>
                <h2>Projects</h2>
                
                 
                  
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
                   
                  
                

              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
