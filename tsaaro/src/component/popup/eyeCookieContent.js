import React from "react";
import '../../assets/css/eyepop.css';

const EyeCookieContent =(props)=>{ 
    return(
        <div style={{display:'flex',flexDirection:'row', margin:'1vw',marginTop:'2vh', backgroundColor:'#E5E5E5', justifyContent:'center',borderRadius:'4px', alignItems:'center'}}>
                <p className="eye-text-content">{props.id}</p>
                <p className="eye-text-content">{props.type}</p>
                <p className="eye-text-content">{props.duration}</p>
                <p className="eye-text-content">{props.description}</p>
            </div>
    )
}

export default EyeCookieContent;