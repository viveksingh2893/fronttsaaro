import React from "react";
import '../../assets/css/eyepop.css';
import EyeCookieContent from "./eyeCookieContent";

const EyeContent=(props)=>{
    console.log('eye content.........',props.data)
    return(
        <div className="eye-content-container">
            <div className="eye-textbox">
                <p className="eye-text-category">{props.category}</p>
            </div>
            <div>
            <div style={{display:'flex',flexDirection:'row', margin:'1vw', alignItems:'flex-start', justifyContent:'center'}}>
                <p className="eye-text-title"> ID</p>
                <p className="eye-text-title">Type</p>
                <p className="eye-text-title"> Duration</p>
                <p className="eye-text-title">Description</p>
            </div>
            <div>
             {props.data?props.data.map((value,index)=>{
                 return(
                    <EyeCookieContent
                    id={value.name}
                    type={value.httponly?'http':'https'}
                    duration={value.expiry}
                    description={value.description?value.description:'N/A'}
                    />

                 )
             }): null}
                
            </div>
            </div>
        </div>
    )
}

export default EyeContent;