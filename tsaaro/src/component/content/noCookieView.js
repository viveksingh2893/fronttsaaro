import React from "react";
import SvgIcon from "../../assets/Icon_apps";

const NoCookieView=()=>{
    return(
        <div style={{justifyContent:"center", padding: '3vw'}}>
            <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                <SvgIcon name='no cookie'/>
                <p className="no-cookie">No Cookies found for this category</p>

            </div>

        </div>
    )
}

export default NoCookieView;