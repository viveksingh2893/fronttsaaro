import React, { useState } from "react";
import "../../assets/css/accsettings.css";

const DeleteAccPop=(props)=> {
    const [check, setCheck]= useState(false);
    const toggleCheck=()=>{
        setCheck(!check);
    }
  return (
    <div className="as-del-modal">
        <div className="as-del-modal-content">
            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
            <p className="as-del-title">Do you really want to delete your account?</p>
            <div style={{display:'flex', flexDirection:'column',padding:'2vh',border:'1px solid #ADADAD' }}>
                <p className="as-del-content" style={{color:'#373737'}}>When you delete your account, you will immediately lose access to any settings, 
                    customization or data associated with this account. This action cannot be reversed!</p>
                <p style={{color:'#373737',flexDirection:'row', fontSize:'.9vw',margin:'0vw'}}>
                    If there is any issue that is making you leave, please feel free to <a>contact us</a> anytime.
                    We will be happy to help resolve your issues and get you back on track.</p>
            </div>
            <div style={{display:'flex', flexDirection:'row', marginTop:'1vw',marginBottom:'1vw',alignItems:'flex-start'}}>
                    <div onClick={toggleCheck} className='as-check' style={{backgroundColor:check?'#7A4EB6':''}}/>
                    <p style={{marginBottom:0,fontSize:'1vw', lineHeight:'1.2vw'}}>
                    Yes, I want to permanently delete my CookieYes account and all its data. 
                    <b> I understand that this will automatically cancel all my subscriptions.</b>
                    </p>
            </div>
            <div className="as-del-submitpop">
                <button onClick={() => {props.closeDel(false)}} className="as-del-cancel">Cancel</button>
                <button onClick={() => {props.closeDel(false)}} className="as-del-submit">Delete Account</button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default DeleteAccPop;
