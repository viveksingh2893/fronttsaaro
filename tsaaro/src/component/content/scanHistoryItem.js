import React from "react";
import "../../assets/css/scanhistory.css";
import SvgIcon from "../../assets/Icon_apps";

function ScanHistoryItem(props) {
  return (
    <div style={{display:'flex',flexDirection:'row', width:'78vw'}}>
      <div className="scan-hist-item">{props.time}</div>
      <div className="scan-hist-item" style={{color:'#4ACD96'}}>{props.status}</div>
      <div className="scan-hist-item">{props.url}</div>
      <div className="scan-hist-item">{props.category}</div>
      <div className="scan-hist-item">{props.cookies}</div>
      <div className="scan-hist-item">{props.scripts}</div>
      <div className="scan-hist-item"><SvgIcon name='eye'/></div>
    </div>
  );
}

export default ScanHistoryItem;
