import React from "react";
import '../../assets/css/eyepop.css';

const PagesScanned=(props)=>{
    return(
        <div style={{display:'flex', flexDirection:'row',backgroundColor:'#E5E5E5', alignItems:'flex-start',justifyContent:'space-between',marginTop:'3vh', width:'65vw'}}>
            <p className="eye-text-content">{props.url}</p>
            <p className="eye-text-content">{props.cookie}</p>
        </div>
    )
}

export default PagesScanned;
