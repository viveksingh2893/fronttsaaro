import React from "react";
import '../../assets/css/eyepop.css';

const EyeCookieContent =(props)=>{
    return(
        <div style={{display:'flex',flexDirection:'row', margin:'1vw',paddingTop:'2vh', backgroundColor:'#E5E5E5', justifyContent:'center', alignItems:'center'}}>
                <p className="eye-text-content">{props.id}</p>
                <p className="eye-text-content">{props.type}</p>
                <p className="eye-text-content">{props.duration}</p>
                <p className="eye-text-content">{props.description}</p>
            </div>
    )
}

export default EyeCookieContent;