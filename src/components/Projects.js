import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';


export const Projects = () => {

  const projects = [
    {
      title: "PokemonApi",
      description: "fetch 50 pokemon Api with power",
      imgUrl: "https://www.dealntech.com/wp-content/uploads/2022/12/Pokemon-Card-Price-Checker.jpg",
      projectLink:"https://moonlit-vacherin-d242d4.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/webcode-TASK",

    },
    {
      title: "Calculator",
      description: "Designed by HTML & CSS",
      imgUrl:"https://i.ytimg.com/vi/EuwzyB_FQNs/maxresdefault.jpg",
      projectLink:"https://dreamy-smakager-959409.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/DAY-15-TASK-DOM-calculator-",
    },
    {
      title: "Room Booking site(Demo)",
      description: "Design & Developed by ReactJS",
      imgUrl:"https://uizard.io/static/4546ab451250ca3c17bbfbe28c1132e8/d9bdf/hotel-booking-web-cover.png",
      projectLink:"https://zinroom-booking.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Front-end-repo-ZenBook-Balarathinam-T-frontend",
    },
    {
      title: "Rental product UI design",
      description: "Design and built by ReactJs & MaterialUI",
      imgUrl: "https://reactjsexample.com/content/images/2022/04/Code-2022-20-08-10.jpg",
      projectLink:"https://helpful-bublanina-7fda66.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/webcode-rentalx-Ui-design",
    },
    // {
    //   title: "Newspaper UI design ",
    //   description: "Design by HTML & CSS",
    //   imgUrl: "https://wallpapercave.com/dwp1x/wp6351045.jpg",
    //   projectLink:"https://spiffy-yeot-1484d3.netlify.app/",
    //   gitLink:"https://github.com/Ba7arathinam/DAY12-TASK2",
    // },
    {
      title: "ToDo-App",
      description: "Here I use basic react,redux,css styles to create this ToDo app",
      imgUrl: "https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-14/d2480830-3df5-11eb-9513-43e7f40c9d54.jpg",
      projectLink:"https://incredible-lolly-4b8de3.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/To-do-Guvi-react-redux-session",

    },
    {
      title: "Movies-Rating-App",
      description: "In this app ,I use Advance JS,mongoDB,mock API for data,MaterialUI for Design",
      imgUrl:"https://i.dailymail.co.uk/1s/2021/09/29/18/48555609-10042105-image-a-9_1632934826024.jpg",
      projectLink:"https://resplendent-strudel-4e8f07.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/movie-rating-app",
    },
    {
      title: "Dashboard",
      description: "This dashbord created by ReactJS with Bootstrap and some additional design tools like materialUI ",
      imgUrl: "https://i.ytimg.com/vi/aT4hBwdoEyw/maxresdefault.jpg",
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
