import React,{useState} from "react";
import "../../assets/css/dashboard.css";
import InputView from '../input/inputView';
import Postapi from "../../api/Postapi";
const WebsitePop=({active,setActive})=> {
    const [url,setUrl] =useState()
    const AddWebsite=async ()=>{
        const response=await Postapi('/auth/add_website',{url:url})
        setActive(false);
        console.log(response)
    
      }
  return (
    <div className="dashboard-website-modal">
        <div className="dashboard-website-modal-content">
            <div className="dashboard-website-container">
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <p className="dashboard-website-p">Please enter the URL</p>
                </div>
                <InputView name='URL' placeholder='example.com' onChange={(e)=>setUrl(e)}/>
                <div className="dashboard-website-submitpop">
                    <button onClick={AddWebsite} className="dashboard-website-submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WebsitePop;