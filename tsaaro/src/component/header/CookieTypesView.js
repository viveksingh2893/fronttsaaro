import React, {useState, useEffect} from "react";
import "../../assets/css/cookieboard.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown, Row,Col } from 'antd';
import ManualCookieView from "./ManualCookieView";

function CookieTypesView(props) {
  return (
      <div>
    <Row>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              span={12}
            >
              <h4 className="ct">{props.type}</h4> 
              <div onClick={()=>console.log("edit")}><SvgIcon name='edit'/></div>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              span={12}
            >
              <div className="input">
                <form>
                  <select id="cars" name="cars" className="language">
                    <option value="english" >English</option>
                    <option value="hindi" >Hindi</option>
                    <option value="bulgarian" >Bulgarian</option>
                    <option value="catalan">Catalan</option>
                  </select>
                </form>
              </div>
            </Col>
          </Row>
          <Row>
            <p>
              Scan your website for cookies and manage the discovered or
              self-declared cookies here.
            </p>
          </Row>
          
          <Row style={{display: 'flex'}}>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                // borderBottom:"5px solid #5647AB   
              }}
              span={12}
            >
              <h3 className="ct"
              onClick={()=>console.log("cookie list")}
              style={{
                    color: '#331A55',
                    textDecorationLine: 'underline'
                    }} >
                  Cookie List
                  </h3>
              
            </Col>
            <Col
            onClick={()=>console.log("add cookie")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              span={12}
            >
              <SvgIcon name='plus circle'/>
              <h3 className="ct"
               
              style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    color: '#331A55',
                    paddingLeft:'10px',
                    }} >
                  Add New Cookie
                  </h3>
            </Col>
          </Row>
          <ManualCookieView/>
          </div>
  );
}

export default CookieTypesView;
