import React, {useState, useEffect} from "react";
import { Col, Button, Row } from "antd";
import "../../assets/css/cookieboard.css"; 

const AccsettingScr=()=>{
  const [toggle, setToggle] = useState(false);
  const [choose, setChoose] = useState('')

  useEffect(()=>{
    if (toggle){
        setChoose('singh')
    }else{
      setChoose('vivek')
    } 
  },[toggle])

  const handletoggle = (e) => {
    console.log("toggle..........");
    window.addEventListener('click',()=>{
    }) 
    setToggle(!toggle); 
  };

    return(
        <div
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
          <h2 className="cm">Account Settings</h2>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center", 
            justifyContent: "flex-end",
          }}
        >
            <Button onClick={()=>console.log('acc setting')} type="primary" style={{width:'12vw'}} className="primary-btn">
              <p className="scan-again">Delete My account</p>
            </Button>
        </Col>
      </Row>
      <Row>
        <p className="description">
        Manage your websites, Billing and invoice here.
        </p>
      </Row>
      <Row style={{backgroundColor:'white', borderRadius:'4px',boxShadow:'0px 0.5px 4px rgba(0, 0, 0, 0.2)'}}>
        <Col span={24}>
          <Row>
            <Col
              onChange={handletoggle}
              onClick={(e)=>handletoggle(e,'cookie')}
              className="cm-toggle-col"
              style={{ backgroundColor: toggle ? "#ffffff" : "#F0EDFF" }}
              span={3}
            >
              
              <h3 className="cm-toggle" style={{color:toggle?'#6F6F6F':'#5647AB'}}>Cookies</h3>
            </Col>
            <Col
             onChange={handletoggle}
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
      </div>
      )
}

export default AccsettingScr;