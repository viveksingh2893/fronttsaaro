import React, {useState, useEffect} from "react";
import {motion} from 'framer-motion'
import { Col, Button, Row } from "antd";
import "../../assets/css/cookieboard.css";
import CookieView from "../../component/content/cookieView";
import ScanHistoryView from "../../component/content/scanHistoryView";
import ScanAgainPop from "../../component/popup/scanAgainPopView";
import Postapi from "../../api/Postapi";

const CookiemanagerScr = (props) => {
  const [scan, setScan] = useState(false);
  const [message,setMessage]=useState();
  const [scantitle,setTitle]=useState();
  const [scandata,setScanData]=useState();
  
  const [toggle, setToggle] = useState(false);
  const [choose, setChoose] = useState('')


  const scanHistory=async ()=>{

    const response=await Postapi('/auth/scanhistory',{email:"c@a.com",website:"http://netflix.com/in"})
    // console.log('response.........',response)
    if (response.status){
      if(response.status===202){
          setScanData(response.data)
          setChoose(<ScanHistoryView scandata={scandata}/>)
      }
    }
  }


  const handletoggle = (e) => {
    console.log("toggle..........");
    window.addEventListener('click',()=>{
    }) 
    setToggle(!toggle); 

  };

  const toggleScan =async () => {
    const response=await Postapi('/auth/scanner',{email:'c@a.com',website:'http://netflix.com/in'});
    console.log('response........',response.status);
    if(response.status){
      if(response.status===401){
        setMessage('Message set........')
        setTitle('......Scan')
      }else{
      console.log('scanning..........')
      setMessage(response.data.msg +'............')
        setTitle('Status')
    }
    setScan(!scan);
  }};

  useEffect(()=>{
    if (toggle){
      scanHistory();

       
      
    }else{
      setChoose(<CookieView/>)
    } 
  },[toggle])
  
  return (
    <motion.div
      style={{
        marginLeft: "3vw",
        height: "calc(100vh - 8vh)",
        width: "96.5vw",
        justifyContent: "center",
        alignItems: "center",
        overflowY:'scroll',
        paddingRight:'2.5vw',
        paddingBottom:'5vh'

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
      <Row style={{backgroundColor:'white', borderRadius:'4px',boxShadow:'0px 0.5px 4px rgba(0, 0, 0, 0.2)'}}>
        <Col span={24}>
          <Row>
            <Col
              // onChange={handletoggle}
              onClick={(e)=>handletoggle(e,'cookie')}
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
      {scan && (<ScanAgainPop title={scantitle} message={message} closeScan={setScan}/>)}
    </motion.div>
  );
};
export default CookiemanagerScr;
