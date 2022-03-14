import React from "react";
import SvgIcon from "../../assets/Icon_apps";
import "../../assets/css/addsitepop.css";

const AddSiteCross=()=>{
    return(
        <div className="plan-item">
            <SvgIcon name='red cross'/>
            <p className="text">Scan upto 100 pages at a time.</p>
        </div>
    )
}

export default AddSiteCross;