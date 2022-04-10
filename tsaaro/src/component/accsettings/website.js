import React from "react";
import '../../assets/css/accsettings.css';
import WebsiteComp from "./websiteComp";


const Website=()=>{
    return(
        <div className="as-website">
            <div className='as' style={{display:"flex",paddingLeft:'1.2vw',marginTop:'5vh',color:'#6F6F6F',flexDirection:'row', justifyContent:'flex-start',fontSize:'1vw', alignItems:'center'}}>
                <p style={{width:'16.5vw',flex:'1.5',margin:0}}>Website</p>
                <p style={{width:'12vw',flex:'1.2',textAlign:'center',margin:0}}>Plan</p>
                <p style={{width:'12vw',flex:'1.2',textAlign:'center', margin:0}}>Banner</p>
                <p style={{width:'12vw',flex:'2',textAlign:'center', margin:0}}></p>
                <p style={{width:'12vw',flex:'1.2',textAlign:'center', margin:0}}></p>
            </div>
            <WebsiteComp
            website='http://www.destratum.com'
            plan='utimate'
            banner='Active'
            subscriptionEnd='May 3, 2022'
            />
            <WebsiteComp
            website='http://www.destratum.com'
            plan='utimate'
            banner='Active'
            subscriptionEnd='May 3, 2022'
            />
        </div>
    )
}

export default Website;