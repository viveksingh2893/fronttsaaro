import React from "react";
import SvgIcon from "../../assets/Icon_apps";
import { Input, Switch} from "antd";

const CookieTypes=()=>{
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <p className="privacy-policy-maintitle">Types of Cookies</p>
            <div className="input-box">
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p className="input-label">Heading</p>
                        <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                    </div>
                    <Input style={{width:'70vw',height:'5.2vh',}} placeholder=''/>
                </div> 
            </div>
            <p className="privacy-policy-content" style={{marginTop:'5vh'}}>Show 'cookie audit table'?</p>
            <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
            <p style={{marginTop:'2vh'}}>Before you proceed, make sure you have scanned your website for cookies with 
                our "Cookie Scanner". This action is required to have the cookie audit table added
                to your Cookie Policy automatically. If you haven't scanned your site for cookies yet, 
                <a href="#"> Scan Now!</a></p>
            <div className="save">
                <button className="submit" style={{margin:'0vw', height:'6vh', width:'10vw'}}>Save & Proceed</button>
            </div>
        </div>
    )
}

export default CookieTypes;