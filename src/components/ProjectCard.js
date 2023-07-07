import { Col } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';



export const ProjectCard = ({ title, description, imgUrl,projectLink,gitLink,gitLink1 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="imgbx">
        <img src={imgUrl} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <br/>
          <div className="pro-link">
          <a  href={projectLink} id="btn btn--contact"  target="_blank"> < CodeOutlinedIcon color="blue" sx={{ fontSize:35}}/>Demo</a>
          <a  href={gitLink} id="btn btn--contact" target="_blank"><GitHubIcon color="white" sx={{ fontSize:35}}/>Frontend</a>
          <a  href={gitLink1} id="btn btn--contact" target="_blank"><GitHubIcon color="white" sx={{ fontSize:35}}/>Backend</a>
            
          </div>
         
        </div>
      </div>
    </Col>
  )
}
