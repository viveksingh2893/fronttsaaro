
import { Row, Col, Image, Button } from "antd";
import logo from "../../assets/images/img1.png";
import tsaaro from "../../assets/images/tsaaro.png";
import "../../assets/css/login.css";
import Loginleftsvg from "../../assets/loginleftside";
import InputView from "../../component/input/linput";
import LbuttonView from "../../component/button/lbutton";
import Postapi from "../../api/Postapi";
import axios from "axios";
import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";

const OtpScr=()=>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [wrongcred, setWrongcred] = useState(false);
    const navigate = useNavigate();

    return(
        <Row gutter={0} className="login-main">
        <Col className="login-col1" span={10}>
          <Row className="login-r1">
            <Image className="login-image1" preview={false} src={logo}></Image>
            <Image preview={false} src={tsaaro}></Image>
          </Row>
          <Row className="login-r2">
            <Loginleftsvg name="loginimage" />
          </Row>
          <Row className="login-r3">
            <p className="login-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Row>
          <Row className="login-r4">
            <p className="login-p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Row>
        </Col>
        <Col className="login-col2" span={14}>
          <Col className="login-col2-child">
            <p className="login-title">Verify your Email</p>
            <h5>OTP sent to your email</h5>
            <InputView
              label="OTP"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <h5 className="login-fg-pwd">Didn't recieve OTP?<Button type='text'className="login-fg-pwd" >Resend</Button> </h5>
            <LbuttonView title="Submit" value={username} />
          </Col>
        </Col>
      </Row>
    );
    
}
export default OtpScr;