import React, { useState } from "react";
import "../../assets/css/consentlog.css";
  
function ConsentPopView(props) {

  return ( 
    <div className="consent-containerpop">
        <p className="consent-poptitle">Export Options</p>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'28vw', marginTop:'3vh'}}>
            <p className="consent-contentpop">Date Range:</p>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width:'28vw', marginTop:'3vh'}}>
            <div className="consent-submitpop">
                <button onClick={()=>{props.closeScan(false)}} className="consent-cancel">Cancel</button>
                <button onClick={()=>{props.closeScan(false)}} className="consent-submit">Export as CSV</button>
            </div>
    </div>
    </div>
  )
}

export default ConsentPopView;
