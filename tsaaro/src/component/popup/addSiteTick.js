import React from "react";
import SvgIcon from "../../assets/Icon_apps";
import "../../assets/css/addsitepop.css";

const AddSiteTick=()=>{
    return(
        <div className="plan-item">
            <SvgIcon name='green tick'/>
            <p className="text">Scan upto 100 pages at a time.</p>
        </div>
    )
}

export default AddSiteTick;