import React ,{useState} from "react";
import "../../assets/css/scanhistory.css";
import SvgIcon from "../../assets/Icon_apps";

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
      <div className="scan-alert-svg" onClick={() => setClose(!close)}>
        <SvgIcon name='cross'/>
      </div>
    </div>
  );
}

export default ScanAlertView;
