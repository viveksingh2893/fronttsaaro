import { Col, Row } from "antd";
import SvgIcon from "../../assets/Icon_apps";
import Loginleftsvg from "../../assets/loginleftside";
import '../../assets/css/dashboard.css';
import Dashtckicon from "../../assets/dashtckicon";
const DashboardTck=(props)=>{
    return(
        <Row className="dashboardtck">

            <Col className="dashboardtck-icon">

            <Dashtckicon name={props.name}/>

            </Col>
            <Col className="dashboardtck-stat">
                <p className="dashboardtck-p">{props.number}</p>
                <p className="dashboardtck-p">{props.total}</p>
            </Col>
        </Row>
    )


}

export default DashboardTck;