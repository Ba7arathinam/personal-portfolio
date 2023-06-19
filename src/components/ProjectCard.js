import { Col } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';



export const ProjectCard = ({ title, description, imgUrl,projectLink,gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="imgbx">
        <img src={imgUrl} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <br/>
          <span>{description}</span>
          <br/>
          <a  href={projectLink}>< LaunchIcon color="blue" sx={{ fontSize:35}}/>Live Code</a>
          <a  href={gitLink}><GitHubIcon color="white" sx={{ fontSize:35}}/>GitHub</a>
        </div>
      </div>
    </Col>
  )
}
