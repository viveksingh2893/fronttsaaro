import React from "react";
import "../../assets/css/scanhistory.css";

function ScanHistoryItem(props) {
  return (
    <div className="scan-hist-box">
      <div className="scan-hist-item">{props.time}</div>
      <div className="scan-hist-status">{props.status}</div>
      <div className="scan-hist-item">{props.url}</div>
      <div className="scan-hist-item">{props.category}</div>
      <div className="scan-hist-item">{props.cookies}</div>
      <div className="scan-hist-item">{props.scripts}</div>
    </div>
  );
}

export default ScanHistoryItem;
