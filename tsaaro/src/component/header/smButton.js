import SvgIcon from "../../assets/Icon_apps"
import '../../assets/css/sidemenu.css'
import { Row,Col } from "antd"
 
const SmButton= (props)=>{
return(
    <Row gutter={5} className="button">
      <Row className={`${props.inactive ? "button-child2" : "button-child"}`}>

       <div style={{flex:.7}}><SvgIcon name={props.name.toLowerCase()}/></div>
       {props.inactive?null:
      <p style={{flex:2}} className="button-para">{props.name}
      </p>}
      
      </Row>
</Row> 
)}
export default SmButton