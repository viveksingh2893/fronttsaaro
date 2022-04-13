import React from "react";
import '../../assets/css/accsettings.css';
import PlansComp from "./plansComp";


const Plans=()=>{
    return(
        <div className="as-website">
            <div className='as' style={{display:"flex",paddingLeft:'1.2vw',marginTop:'5vh',color:'#6F6F6F',flexDirection:'row', justifyContent:'flex-start',fontSize:'1vw', alignItems:'center'}}>
                <p style={{width:'12vw',flex:'1.25',margin:0}}>Plan</p>
                <p style={{width:'12vw',flex:'1.2',margin:0}}>Status</p>
                <p style={{width:'12vw',flex:'1.15', margin:0}}>Recurrence</p>
                <p style={{width:'16.5vw',flex:'1.6', margin:0}}>Website</p>
                <p style={{width:'12vw',flex:'1.2', margin:0}}></p>
                <p style={{width:'12vw',flex:'1.2', margin:0}}></p>
            </div>
            <PlansComp
            plan='Utimate'
            status='Past due'
            recurrence='40.00 USD/Month'
            website='http://www.destratum.com'
            />
            <PlansComp
            plan='Ultimate'
            status='Past due'
            recurrence='40.00 USD/Month'
            website='http://www.destratum.com'
            />
        </div>
    )
}

export default Plans;