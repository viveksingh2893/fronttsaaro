import React, { useState } from "react";
import "../../assets/css/consentlog.css";
import { DatePicker} from 'antd';

const { RangePicker } = DatePicker;

function ConsentPopView(props) {

  return ( 
    <div className="consent-containerpop">
        <p className="consent-poptitle">Export Options</p>
        <div style={{display:'flex',alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'28vw', marginTop:'2vh'}}>
            <p className="consent-contentpop">Date Range:</p>
            <RangePicker size={'default'}/>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width:'28vw', marginTop:'3vh'}}>
            <div className="consent-submitpop">
                <button onClick={()=>{props.closeScan(false)}} className="consent-cancel">Cancel</button>
                <button onClick={()=>{props.closeScan(false)}} className="consent-submit">Export as CSV</button>
            </div>
    </div>
    </div>
  )
}

export default ConsentPopView;
