import React from "react";
import '../../assets/css/eyepop.css';
import Dashtckicon from "../../assets/dashtckicon";
import DashboardTck from "../dashboard/dashticket";

const EyeDetail = (props)=>{
    return(
        <div className="detail-container" >
            <Dashtckicon name={props.name} width='5vw' height='5vw'/>
            <p className="eye-title">{props.number}</p>
            <p className="title-scan">{props.title}</p>
        </div>
    )
}

export default EyeDetail;