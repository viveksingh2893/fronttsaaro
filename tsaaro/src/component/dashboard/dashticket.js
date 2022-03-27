import { Col, Row } from "antd";
import SvgIcon from "../../assets/Icon_apps";
import Loginleftsvg from "../../assets/loginleftside";
import '../../assets/css/dashboard.css';
import Dashtckicon from "../../assets/dashtckicon";
const DashboardTck=(props)=>{
    return(
        <div className="dashboardtck">
            <Dashtckicon name={props.name}/> 
            <div className="dashboardtck-stat">
                <p className="dashboardtck-p">{props.number}</p>
                <p className="dashboardtck-p">{props.total}</p>
            </div>
        </div>
    )


}

export default DashboardTck;