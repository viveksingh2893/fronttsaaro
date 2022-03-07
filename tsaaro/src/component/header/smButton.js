import SvgIcon from "../../assets/Icon_apps"
import '../../assets/css/sidemenu.css'
import { Row,Col } from "antd"

const SmButton= (props)=>{
return(
    <Row gutter={0} className="button">
      <Row  className="button-child">
       
      <SvgIcon name={props.name.toLowerCase()}/>
      <p className="button-para">{props.name}
      </p>
      
      </Row>
</Row>
)}
export default SmButton