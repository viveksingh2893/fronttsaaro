import React, {useState, useEffect} from "react";
import "../../assets/css/cookieboard.css";
import SvgIcon from "../../assets/Icon_apps";
import { Menu, Dropdown, Row,Col } from 'antd';
import AddCookiePopView from "../popup/addCookiePopView";
import ManuallyAddCookieView from "../content/manuallyAddCookieView";

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
            <ManuallyAddCookieView/>
          </div>
  );
}

export default ManualCookieView;
