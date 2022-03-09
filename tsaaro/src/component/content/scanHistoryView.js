import React from "react";
import ScanAlertView from "./scanAlertView";
import ScanTableHeadView from "./scanTableHeadView";
import ScanHistoryItem from "./scanHistoryItem";

import "../../assets/css/scanhistory.css";

function ScanHistoryView() {
  return (
    <div className="scan-history-box">
      <div className="scan-history-alert">
        <ScanAlertView />
      </div>
      <div className="scan-history-title">
        <ScanTableHeadView />
      </div>
      <div className="scan-history-cont">
        <div className="scan-history-item">
          <ScanHistoryItem time="14-02-2022, 08:02:22" />
          <ScanHistoryItem status="completed" />
          <ScanHistoryItem url="3" />
          <ScanHistoryItem category="3" />
          <ScanHistoryItem cookies="3" />
          <ScanHistoryItem scripts="3" />
          <svg
            className="item"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="scan-history-item">
          <ScanHistoryItem time="14-02-2022, 08:02:22" />
          <ScanHistoryItem status="completed" />
          <ScanHistoryItem url="3" />
          <ScanHistoryItem category="3" />
          <ScanHistoryItem cookies="3" />
          <ScanHistoryItem scripts="3" />
          <svg
            className="item"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="scan-history-item">
          <ScanHistoryItem time="14-02-2022, 08:02:22" />
          <ScanHistoryItem status="completed" />
          <ScanHistoryItem url="3" />
          <ScanHistoryItem category="3" />
          <ScanHistoryItem cookies="3" />
          <ScanHistoryItem scripts="3" />
          <svg
            className="item"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#373737"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ScanHistoryView;
