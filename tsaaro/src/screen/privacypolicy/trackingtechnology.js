import { Input } from "antd";
import React from "react";

const TrackingTechnology=()=>{
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <p className="privacy-policy-maintitle">Tracking Techonologies</p>
            <p className="privacy-policy-content" style={{marginTop:'2vh'}}>Provide the link to the cookie policy</p>
            <Input style={{width:'70vw',height:'5.2vh'}} placeholder='http://www.mysite.com/cookiepolicy'/>
            <div className="save">
                <button className="submit" style={{margin:'0vw', height:'6vh', width:'10vw'}}>Save & Proceed</button>
            </div>
        </div>
    )
}

export default TrackingTechnology;