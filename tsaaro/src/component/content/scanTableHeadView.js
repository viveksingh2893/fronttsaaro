import React from "react";
import "../../assets/css/scanhistory.css";

function ScanTableHeadView() {
  return (
    <div class="container-scan">
      <div class="Scan-Comp">Scan Date (UTC±00.00)</div>
      <div class="Scan-Comp">Scan-Status</div>
      <div class="Scan-Comp">Urls-Scanned</div>
      <div class="Scan-Comp">Categories</div>
      <div class="Scan-Comp">Cookies</div>
      <div class="Scan-Comp">Scripts</div>
      <div class="Scan-Comp"></div>
    </div>
    
  );
}

export default ScanTableHeadView;
