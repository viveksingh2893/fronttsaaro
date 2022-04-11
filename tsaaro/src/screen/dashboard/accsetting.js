import React, {useState, useEffect} from "react";
import { Col, Button, Row } from "antd";
import '../../assets/css/accsettings.css';
import Website from "../../component/accsettings/website";
import DeleteAccPop from "../../component/popup/deleteAccPop";
import Plans from "../../component/accsettings/plans";
import Invoice from "../../component/accsettings/invoice";
import Pay from "../../component/accsettings/pay";

const AccsettingScr=()=>{
  const [head, setHead] = useState('website');
  const [del, setDel] = useState(false);

  const toggleDel=()=>{
    setDel(!del);
  }
  
  const handletoggle = (value) => {
    setHead(value); 
  };

    return(
        <div
      style={{
        marginLeft: "3vw",
        height: "calc(100vh - 8vh)",
        width: "96.5vw",
        justifyContent: "center",
        alignItems: "center",
        overflowY:'auto',
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
          <h2 className="as">Account Settings</h2>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center", 
            justifyContent: "flex-end",
          }}
        >
            <button onClick={toggleDel} style={{width:'12vw'}} className="as-primary-btn">
              <p className="as-delete-acc">Delete My account</p>
            </button>
            {del?<DeleteAccPop closeDel={setDel}/>:null}
        </Col>
      </Row>
      <Row>
        <p className="description">
        Manage your websites, plans, invoices, and billing details here.
        </p>
      </Row>
      <Row style={{backgroundColor:'white', borderRadius:'4px',boxShadow:'0px 0.5px 4px rgba(0, 0, 0, 0.2)'}}>
        <Col span={24}>
          <Row>
            <Col
              // onChange={handletoggle}
              onClick={()=>handletoggle('website')}
              className="as-toggle-col"
              style={{ backgroundColor: head==='website' ? "#F0EDFF" : "#ffffff"  }}
              span={3}
            >
              <h3 className="as-toggle" style={{color:head=='website'?'#5647AB':'#6F6F6F'}}>Websites</h3>
            </Col>
            <Col
            //  onChange={handletoggle}
              onClick={()=>handletoggle('plans')}
              className="as-toggle-col" 
              style={{ backgroundColor: head==='plans' ? "#F0EDFF" : "#ffffff" }}
              span={3}
            >
              <h3 className="as-toggle" style={{color:head=='plans'?'#5647AB':'#6F6F6F'}}>Plans</h3>
            </Col>
            <Col
            //  onChange={handletoggle}
              onClick={()=>handletoggle('invoice')}
              className="as-toggle-col" 
              style={{ backgroundColor: head==='invoice'? "#F0EDFF" : "#ffffff" }}
              span={3}
            >
              <h3 className="as-toggle" style={{color:head=='invoice'?'#5647AB':'#6F6F6F'}}>Invoice</h3>
            </Col>
            <Col
            //  onChange={handletoggle}
              onClick={()=>handletoggle('pay')}
              className="as-toggle-col" 
              style={{ backgroundColor: head==='pay' ? "#F0EDFF" : "#ffffff" }}
              span={3}
            >
              <h3 className="as-toggle" style={{color:head=='pay'?'#5647AB':'#6F6F6F'}}>Billing/Payment</h3>
            </Col>
          </Row>
        </Col>
        {head === 'website' && <Website/>}
        {head === 'plans' && <Plans/>}
        {head === 'invoice' && <Invoice/>}
        {head === 'pay' && <Pay/>}
      </Row>
      </div>
      )
}

export default AccsettingScr;