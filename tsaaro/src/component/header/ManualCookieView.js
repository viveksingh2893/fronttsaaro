import React, {useState, useEffect} from "react";
import "../../assets/css/cookieboard.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown, Row,Col } from 'antd';

function ManualCookieView(props) {
  return (
      <div>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              span={12}
            >
              <h4 className="ct" style={{color: '#6F6F6F'}}>Manually Added Cookies</h4>
            </Col>
        <div className="mac">
          <Row 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <Col style={{color: '#6F6F6F'}}>ID</Col>
            <Col style={{color: '#6F6F6F'}}>Domain</Col>
            <Col style={{color: '#6F6F6F'}}>Duration</Col>
            <Col onClick={()=>console.log("edit")}><SvgIcon name='edit'/></Col>
            <Col onClick={()=>console.log("delete")}><SvgIcon name='delete cookie'/></Col>
          </Row>
          </div>
          </div>
  );
}

export default ManualCookieView;
