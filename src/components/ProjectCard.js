import { Col } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';


export const ProjectCard = ({ title, description, imgUrl,projectLink,gitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <a  href={projectLink}>< LaunchIcon color="blue" sx={{ fontSize:35}}/></a>
          <a  href={gitLink}><GitHubIcon color="action" sx={{ fontSize:35}}/></a>
        </div>
      </div>
    </Col>
  )
}
