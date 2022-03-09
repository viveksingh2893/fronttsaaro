import React from "react";
import img from "../../assets/images/check.png";
import "../../assets/css/scanagainpop.css";

function ScanAgainPop({ closeScan }) {
  return (
    <div className="scan">
      <div
        onClick={() => {
          closeScan(false);
        }}
        className="scan-overlay"
      ></div>
      <div className="scan-content">
        <div className="scan-img">
            <img src={img} className="scan-tick"/>
        </div>
        <div className="scan-heading">
          <h3>Scanning initiated successfully</h3>
        </div>
        <div className="scan-text">
          It might take a few minutes to a few hours to complete the scanning of
          your website. This depends on the number of pages to scan and the
          website speed. The cookies and their details will be added to the
          cookie list automatically once the scanning is completed.
        </div>
        <div className="scan-btn">
            <button onClick={() => {
          closeScan(false);
        }} className="scan-ok">OK</button>
        </div>
      </div>
    </div>
  );
}

export default ScanAgainPop;
