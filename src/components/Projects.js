import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';


export const Projects = () => {

  const projects = [
    {
      title: "Spotify-Clone",
      description: "In this project,I Create a simple spotify UI and fetch Api to get all songs.i get a api from Spotify for Developer",
      imgUrl: "https://www.nd.codes/img/spotify2.png",
      projectLink:"https://spotify-clone-app-bala.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Spotify-clone-Frontend",
      gitLink1:'https://github.com/Ba7arathinam/Spotify-clone-Backend',

    },
    {
      title: "Equipment-Rental-App",
      description: "This project build with good UI and create product Api with MockApi.com to get product information",
      imgUrl: "https://www.vevs.com/images/equipment-rental-software-3.jpg",
      projectLink:"https://equipment-rental-app.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Equipment-Rental-Frontend",
      gitLink1:'https://github.com/Ba7arathinam/Equipment-Rental-Backend',

    },
    {
      title: "Chat-Engine-App",
      description: "It was basic chat-engine which was designed inbuild by npm-chat-engine package",
      imgUrl: "https://chat-engine-assets.s3.amazonaws.com/tutorials/pretty/thumbnail.png",
      projectLink:"https://chat-engine-app-bala.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/chat-app-Frontend",
      gitLink1:'https://github.com/Ba7arathinam/chat-app-Backend',

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
      gitLink1:'https://github.com/Ba7arathinam/Front-end-repo-ZenBook-BookingSystem-Backend',
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
    <section className="project" id="projects">
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
