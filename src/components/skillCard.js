import { Col } from "react-bootstrap";

export const SkillCard =({img,toolName})=>{
    return (
        // sm={6} md={4}
         <Col size={12} > 
            <div className="item">
             <img src={img} alt={toolName}/>
             <h5>{toolName}</h5>
            </div>
        </Col>
    )
}