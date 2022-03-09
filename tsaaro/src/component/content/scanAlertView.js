import React ,{useState} from "react";
import "../../assets/css/scanhistory.css";

function ScanAlertView() {
    const [close, setClose] = useState(false);
  return (
    <div className={ close? "scan-alert-box inactive" : "scan-alert-box" }>
      <div className="scan-alert-message">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisi
        vestibulum ipsum, mauris erat gravida. Arcu, nisl, urna vel dolor in ac
        cras.Arcu, nisl, urna vel dolor in ac cras.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Morbi facilisi vestibulum ipsum, mauris
        erat gravida. Arcu, nisl, urna vel dolor in ac cras.Arcu, nisl, urna vel
        dolor in ac cras.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </div>
      <div className="scan-alert-svg">
        <svg 
        onClick={() => setClose(!close)}
        className="scan-alert-close"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#373737"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#373737"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default ScanAlertView;
