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
      imgUrl: "https://blog.ezrentout.com/wp-content/uploads/2017/07/equipment-rental-software-1.png",
      projectLink:"https://equipment-rental-app.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Equipment-Rental-Frontend",
      gitLink1:'https://github.com/Ba7arathinam/Equipment-Rental-Backend',

    },
    {
      title: "Login-Auth",
      description: "In this project i build full Authentication for login use of JWT,Mongodb",
      imgUrl: "https://media.licdn.com/dms/image/D4D12AQEKIhATYKXNfg/article-cover_image-shrink_720_1280/0/1662483669699?e=2147483647&v=beta&t=pYKbV88rZpLIAyzcJRCHjZqnhSoOEhhSUtSCi3-sX5M",
      projectLink:"https://password-resets.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Password_Reset_Flow_Frontend",
      gitLink1:'https://github.com/Ba7arathinam/Password_Reset_Flow_Backend',

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
      title: "Blog-App",
      description: "In this app I use CRUD operation to build a backend and in frontent i setup with react.js",
      imgUrl: "https://i1.wp.com/theappentrepreneur.com/wp-content/uploads/2013/02/Blogging-Apps-For-Bloggers.jpg?fit=710%2C372&ssl=1",
      projectLink:"https://blogging-apps.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Blog-app-Frontend",
      gitLink1:'https://github.com/Ba7arathinam/Blog-app-Backend',

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
    {
      title: "Disney+ Hotstar UI design",
      description: "Design and built by ReactJs & MaterialUI",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Oc0kBtwKgA1ZxrJ39JKSTE4K9GkVqRfRw1NFDrGBXehlJx1Ko6xnnmnemRfCSJ10nvE&usqp=CAU",
      projectLink:"https://disneyplusehotstar.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/Disney-Hostar-UI",
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
      projectLink:"https://too-do-apz.netlify.app/",
      gitLink:"https://github.com/Ba7arathinam/todo-app-frontend",
      gitLink1:"https://github.com/Ba7arathinam/todo-app-backend",

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
