import React, { useEffect,useState } from "react";
import ScanAlertView from "./scanAlertView";
import ScanTableHeadView from "./scanTableHeadView";
import ScanHistoryItem from "./scanHistoryItem";

import "../../assets/css/scanhistory.css";
 
function ScanHistoryView(props) {

  console.log(".................inside child",props.scandata);
  return (
    <div style={{display:'flex',alignItems:'center', flexDirection:'column', borderTop:'2px solid #F0EDFF', marginBottom:'5vh'}}>
      <ScanAlertView />
      <ScanTableHeadView />  
      <div style={{marginBottom:'2vh'}}>
        <div className="scan-history-item">
          {props.scandata?
          props.scandata.map((value,index)=>{
            return (
            <ScanHistoryItem key={index}
            time={value.created_date.split('.')[0]}
            id={value.id}
            status={value.scan_status}
            url={value.pages_scanned} 
            category={value.total_category} 
            cookies={value.total_cookie} 
            scripts={value.total_script}
          />)
            
            return}):null}
        </div>
      </div>
    </div>
  );
}

export default ScanHistoryView;
