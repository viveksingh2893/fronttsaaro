import React, {useState, useEffect} from "react";
import { Col, Button, Row } from "antd";
import "../../assets/css/cookieboard.css";
import CookieView from "../../component/content/cookieView";
import ScanHistoryView from "../../component/content/scanHistoryView";
import ScanAgainPop from "../../component/popup/scanAgainPopView";

const CookiemanagerScr = (props) => {
  const [scan, setScan] = useState(false);
  
  const [toggle, setToggle] = useState(false);
  const [choose, setChoose] = useState('')

  const handletoggle = (e) => {
    console.log("toggle..........");
    window.addEventListener('click',()=>{
    }) 
    setToggle(!toggle); 
  };

  const toggleScan = () => {
    setScan(!scan);
  };

  useEffect(()=>{
    if (toggle){
        setChoose(<ScanHistoryView/>)
      
    }else{
      setChoose(<CookieView/>)
    } 
  },[toggle])
  
  return (
    <Col
      style={{
        marginLeft: "1vw",
        height: "calc(100vh - 60px)",
        width: "94.5vw",
        justifyContent: "center",
        alignItems: "center",
        

      }}
    >
      <Row
        style={{
          display: "flex",
          marginTop:'5vh',
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Col span={12}>
          <h2 className="cm">Cookie Manager</h2>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center", 
            justifyContent: "flex-end",
          }}
        >
          <Button onClick={toggleScan} type="primary" className="primary-btn"><p className="scan-again">Scan Again</p></Button>
        </Col>
      </Row>
      <Row>
        <p className="description">
          Scan your website for cookies and manage the discovered or
          self-declared cookies here.
        </p>
      </Row>
      <Row style={{backgroundColor:'white', borderRadius:'4px', border:'2px solid #ADADAD'}}>
        <Col span={24}>
          <Row>
            <Col
              // onChange={handletoggle}
              onClick={handletoggle}
              className="cm-toggle-col"
              style={{ backgroundColor: toggle ? "#ffffff" : "#F0EDFF" }}
              span={3}
            >
              
              <h3 className="cm-toggle" style={{color:toggle?'#6F6F6F':'#5647AB'}}>Cookies</h3>
            </Col>
            <Col
            //  onChange={handletoggle}
              onClick={handletoggle}
              className="cm-toggle-col" 
              style={{ backgroundColor: toggle ? "#F0EDFF" : "#ffffff" }}
              span={3}
            >
              <h3 className="cm-toggle" style={{color:toggle?'#5647AB':'#6F6F6F'}}>Scan History</h3>
            </Col>
          </Row>
          <div>{choose}</div>
        </Col>
      </Row>
      {scan && (<ScanAgainPop closeScan={setScan}/>)}
    </Col>
    
  );
};
export default CookiemanagerScr;
