import React, {useState} from "react";
import { Col, Button, Row } from "antd";
import "../../assets/css/consentlog.css";
import ConsentLogView from "../../component/content/consentLogView";
import ConsentPopView from "../../component/popup/consentPopView";

const ConsentlogScr = (props) => {
  const [scan, setScan] = useState(false);
  const [accept, setAccept] = useState(true)

  const toggleScan = () => {
    setScan(!scan);
  };
  
  return (
    <div className="consentlog-maincontainer">
      <Row
        style={{
          display: "flex",
          marginTop:'5vh',
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Col span={12}>
          <h2 className="consentlog-heading">Visitor Consent Log</h2>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center", 
            justifyContent: "flex-end",
          }}
        >
            <Button onClick={toggleScan} type="primary" className="consentlog-scanbtn">
              <p className="consentlog-scanagain">Export as CSV</p>
            </Button>
        </Col>
      </Row>
      <Row>
        <p className="consentlog-description">
        Details of all the consent provided by the visitors. 
        You may use this record as a proof of consent in case of an audit.
        </p>
      </Row>
      <div style={{display:'flex',flexDirection:'column',padding:'2vw', backgroundColor:'white', borderRadius:'4px',boxShadow:'0px 0.5px 4px rgba(0, 0, 0, 0.2)'}}>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
            <p className="consentlog-title">IP Address</p>
            <p className="consentlog-title">Country</p>
            <p className="consentlog-title">Consent Status</p>
            <p className="consentlog-title">Date/Time (UTC ± 00.00)</p>
        </div>
        <ConsentLogView  
            accept={accept}
            ip='49.26.451.0'
            country='India'
            status={accept?'Accepted':'Rejected'}
            time='14-02-2022, 08:02:22'
            nc='Yes'
            fc='No'
            an='No'
            pr='Yes'
            ad='Yes'
        />
        <ConsentLogView  
            accept={accept}
            ip='49.26.451.0'
            country='India'
            status={accept?'Accepted':'Rejected'}
            time='14-02-2022, 08:02:22'
            nc='Yes'
            fc='Yes'
            an='Yes'
            pr='No'
            ad='No'
        />
      </div>
      <p className="consentlog-btmline">You can view up to 100 visitor consents logged here. Use the export option if you want to download the historical log data.</p>
      {scan && (
        <div className="consentlog-modal">
            <div className="consentlog-modalcontent">
                <ConsentPopView closeScan={setScan}/>
            </div>
        </div> 
      )}
    </div>
  );
};


export default ConsentlogScr;
