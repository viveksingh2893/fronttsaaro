import React,{useState} from "react";
import "../../assets/css/scanhistory.css";
import SvgIcon from "../../assets/Icon_apps";
import EyePopView from "../popup/eyePopView";

function ScanHistoryItem(props) {
  const [eye, setEye] = useState(false);

  const toggleEye = () => {
    setEye(!eye);
  };

  return (
    <>
      <div style={{display:'flex',flexDirection:'row', width:'75vw', marginTop:'2vh', border:'1px solid #ADADAD', borderRadius:'4px'}}>
        <div className="scan-hist-item">{props.time}</div>
        <div className="scan-hist-item" style={{color:'#4ACD96'}}>{props.status}</div>
        <div className="scan-hist-item">{props.url}</div>
        <div className="scan-hist-item">{props.category}</div>
        <div className="scan-hist-item">{props.cookies}</div>
        <div className="scan-hist-item">{props.scripts}</div>
        <div className="scan-hist-item" onClick={toggleEye} style={{cursor:'pointer'}}><SvgIcon name='eye'/></div>
      </div>
      {eye && (
        <div className="eye-modal">
          <div className="eye-content">
            <EyePopView closeEye={setEye} id={props.id} date={props.time}/>
          </div>
        </div> 
      )}
    </>
  );
} 

export default ScanHistoryItem;
