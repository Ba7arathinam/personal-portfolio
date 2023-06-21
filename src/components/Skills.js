import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import {SkillCard} from "./skillCard"


export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  const skills=[
    {
        img:"https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
        toolName:"HTML",
    },
    {
        img:"https://devsouth.us/images/css3_badge.png",
        toolName:"CSS",
    },
    {
        img:"https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png",
        toolName:"JavaScript",
    },
    {
        img:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png",
        toolName:"React.js",
    },
    {
        img:"https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
        toolName:"Node.js",
    },
    {
        img:"https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png",
        toolName:"MongoDB",
    },
    {
        img:"https://th.bing.com/th/id/R.8251fe76d7487a28b07603515b300964?rik=H7lrBp652zDaWg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f5848309bcef1014c0b5e4a9a.png&ehk=N%2fi7UuvK4YyoLcxusdDEWeftPaGIfNJl2VmpTOtLt%2bA%3d&risl=&pid=ImgRaw&r=0",
        toolName:"Redux",
    },
  ]

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col size={12}>
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <div  className="skill-slider justify-content-center align-items-center"> */}
                        <Row>
                        {
                          skills.map((skill, index) => {
                            return (
                              <SkillCard
                                key={index}
                                {...skill}
                                />
                            )
                          })
                        }
                      </Row>
                            {/* <div className="item">
                                <img src="" alt="Image"/>
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src="" alt="Image"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="" alt="Image"/>
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src="" alt="Image"/>
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src="" alt="Image"/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src="" alt="Image"/>
                                <h5>Redux</h5>
                            </div> */}
                        {/* </div> */}
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" /> 
    </section>
  )
}
