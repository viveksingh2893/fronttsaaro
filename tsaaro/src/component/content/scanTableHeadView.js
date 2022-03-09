import React from "react";
import "../../assets/css/scanhistory.css";

function ScanTableHeadView() {
  return (
    <div class="container">
      <div class="Scan-Date">Scan-Date-\(UTC-\+-00\.00\)</div>
      <div class="Scan-Status">Scan-Status</div>
      <div class="Urls-Scanned">Urls-Scanned</div>
      <div class="Categories">Categories</div>
      <div class="Cookies">Cookies</div>
      <div class="Scripts">Scripts</div>
    </div>
    
  );
}

export default ScanTableHeadView;
