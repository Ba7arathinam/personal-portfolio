// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
// import {SkillCard} from "./skillCard"


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

//   const skills=[
//     {
//         img:"https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
//         toolName:"HTML",
//     },
//     {
//         img:"https://devsouth.us/images/css3_badge.png",
//         toolName:"CSS",
//     },
//     {
//         img:"https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png",
//         toolName:"JavaScript",
//     },
//     {
//         img:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png",
//         toolName:"React.js",
//     },
//     {
//         img:"https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
//         toolName:"Node.js",
//     },
//     {
//         img:"https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png",
//         toolName:"MongoDB",
//     },
//     {
//         img:"https://th.bing.com/th/id/R.8251fe76d7487a28b07603515b300964?rik=H7lrBp652zDaWg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f5848309bcef1014c0b5e4a9a.png&ehk=N%2fi7UuvK4YyoLcxusdDEWeftPaGIfNJl2VmpTOtLt%2bA%3d&risl=&pid=ImgRaw&r=0",
//         toolName:"Redux",
//     },
//   ]

  return (
    <div className="skill" id="skills">
        
   
             <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <div  className="skill-slider justify-content-center align-items-center"> */}
                       
                        {/* {
                          skills.map((skill, index) => {
                            return (
                              <SkillCard
                                key={index}
                                {...skill}
                                />
                            )
                          })
                        } */}
                        <div className="flex">
                            
                        
                        <div>      
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" style={{maxHeight:'160px'}} alt="css3" /> </a> 
                        </div>
                        <div>
                        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" style={{maxHeight:'160px'}} alt="html5"/> </a> 
                        </div>
                        <div>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" style={{maxHeight:'160px'}} alt="javascript" /> </a> 
                        </div>
                        <div>
                        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" style={{maxHeight:'160px'}} alt="bootstrap" /> </a>
                        </div>
                        {/* <div>       
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
 <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" style={{maxHeight:'260px'}}  width="150%"/> </a> 
                         </div> */}
                        <div>
<a href="https://expressjs.com" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" style={{maxHeight:'160px'}} alt="express" /> </a>
                        </div>
                        {/* <div>
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" style={{maxHeight:'160px'}}  alt="git"/> </a> 
                        </div> */}
                        <div>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" style={{maxHeight:'160px'}}alt="mongodb" /> </a>  
                        </div>
                        <div>
                        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"style={{maxHeight:'160px'}} alt="mysql" /> </a>   
                        </div>
                        <div>    
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" style={{maxHeight:'160px'}} alt="nodejs"/> </a> 
                        </div>
                         <div>
<a href="https://postman.com" target="_blank" rel="noreferrer">
 <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" style={{minHeight:'120px'}}  alt="postman" /> </a> 
                         </div>
                         <div>
                         <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" style={{maxHeight:'160px'}} alt="react" /> </a>
                         </div>
                         <div>
                         <a href="https://redux.js.org" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" style={{maxHeight:'160px'}} alt="redux" /> </a>
                         </div>
                         <div>                          
 <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" style={{maxHeight:'160px'}} alt="sass" /> </a> 
                         </div>
                         <div>                          
 <a href="https://mui.com/material-ui/getting-started/" target="_blank" rel="noreferrer">
 <img src="https://mui.com/static/logo.png" style={{maxHeight:'160px'}} alt="material ui" /> </a> 
                         </div>
                         <div>                          
 <a href="https://www.npmjs.com/products/teams" target="_blank" rel="noreferrer">
 <img src="https://www.logolynx.com/images/logolynx/7f/7fb976a537620fed310872d533cd161c.png" style={{maxHeight:'160px'}} alt="material ui" /> </a> 
                         </div>
                         <div>                          
 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
 <img src="https://mobilemancerblog.blob.core.windows.net/blog/2020/08/vs-code-logo-transp.png" style={{maxHeight:'160px'}} alt="material ui" /> </a> 
                         </div>
                        

                         </div>
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
                   
        <img className="background-image-left" src={colorSharp} alt="Image" /> 
        </div>
        </div>
  )
}
