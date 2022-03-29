import React from "react";
import '../../assets/css/dashboard.css';

const PieLabelName=(props)=>{
    return(
        <div style={{display:'flex', flexDirection:'row', width:'15vw',margin:'.5vw'}}>
            <div style={{height:'1.1vw', width:'1.1vw', backgroundColor:props.color}}/>
            <p className="color-name">{props.name}</p>
        </div>
    )
}

export default PieLabelName;