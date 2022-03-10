import React from "react";
import ScanAlertView from "./scanAlertView";
import ScanTableHeadView from "./scanTableHeadView";
import ScanHistoryItem from "./scanHistoryItem";

import "../../assets/css/scanhistory.css";
 
function ScanHistoryView() {
  return (
    <div style={{display:'flex',alignItems:'center', flexDirection:'column' }}>
      <div>
        <ScanAlertView />
      </div>
      <div>
        <ScanTableHeadView />
      </div>
      <div>
        <div className="scan-history-item">
          <ScanHistoryItem 
            time="14-02-2022, 08:02:22" 
            status="completed" 
            url="3" 
            category="3" 
            cookies="3" 
            scripts="3"
          />
          <ScanHistoryItem 
            time="18-05-2022, 15:12:52" 
            status="completed" 
            url="7" 
            category="5" 
            cookies="4" 
            scripts="9"
          />
          <ScanHistoryItem 
            time="14-02-2022, 08:02:22" 
            status="completed" 
            url="3" 
            category="3" 
            cookies="3" 
            scripts="3"
          />
        </div>
      </div>
    </div>
  );
}

export default ScanHistoryView;
