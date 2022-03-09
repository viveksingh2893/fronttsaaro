import React, {useState, useEffect} from "react";
import { Col, Button, Row } from "antd";
import "../../assets/css/cookieboard.css";
import CookieView from "../../component/content/cookieView";
import ScanHistoryView from "../../component/content/scanHistoryView";
import ScanAgainPop from "../../component/popup/scanAgainPopView";

const CookiemanagerScr = () => {
  const [scan, setScan] = useState(false);
  
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("cookie")
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
  if (scan) {
    document.body.classList.add("active-add");
  } else {
    document.body.classList.remove("active-add");
  }

  useEffect(()=>{
    if (toggle){
        console.log('scan');
        setChoose(<ScanHistoryView/>)
      
    }else{
      console.log('cookie')
      setChoose(<CookieView/>)
    } 
  },[toggle])
  
  return (
    <Col
      style={{
        marginLeft: "1rem",
        height: "calc(100vh - 60px)",
        width: "94.5vw",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Row
        style={{
          display: "flex",
          padding: "1rem",
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
          <Button onClick={toggleScan} type="primary" className="primary-btn">Scan Again</Button>
        </Col>
      </Row>
      <Row style={{ padding: "1rem" }}>
        <p>
          Scan your website for cookies and manage the discovered or
          self-declared cookies here.
        </p>
      </Row>
      <Row>
        <Col span={24} style={{ padding: "0.5rem"}}>
          <Row>
            <Col
              // onChange={handletoggle}
              onClick={handletoggle}
              className="cm-toggle-col"
              style={{ backgroundColor: toggle ? "#ffffff" : "#F0EDFF" }}
              span={5}
            >
              
              <h3 className="cm-toggle">Cookie</h3>
            </Col>
            <Col
            //  onChange={handletoggle}
              onClick={handletoggle}
              className="cm-toggle-col" 
              style={{ backgroundColor: toggle ? "#F0EDFF" : "#ffffff" }}
              span={5}
            >
              <h3 className="cm-toggle">Scan History</h3>
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
