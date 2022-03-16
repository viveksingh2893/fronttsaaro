import React from "react";
import '../../assets/css/eyepop.css';
import EyeCookieContent from "./eyeCookieContent";

const EyeContent=(props)=>{
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
                <EyeCookieContent
                id='cky-active-check'
                type='https'
                duration='1 day'
                description="Cookie Yes sets this cookie to check if the consent banner is active on the website."
                />
                <EyeCookieContent
                id='_ga'
                type='https'
                duration='2 day'
                description="The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and also keeps track of site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognize unique visitors."
                />
            </div>
            </div>
        </div>
    )
}

export default EyeContent;