import { Row, Col, Image } from "antd";
import logo from "../../assets/images/img1.png";
import tsaaro from "../../assets/images/tsaaro.png";
import "../../assets/css/login.css";
import Loginleftsvg from "../../assets/loginleftside";
import InputView from "../../component/input/linput";
import LbuttonView from "../../component/button/lbutton";
import Loginapi from "../../api/loginapi";
import axios from "axios";
import { useState } from "react";

const LoginScr = () => {
  const [username, setUsername]=useState()
  const[password,setPassword]=useState()
  
//  const data={
//   "email":"rohit@destratum.com",
//   "password":"123456"
// }
const data={
  email:username,
  password:password
}
console.log(data)
  const postreq=()=>{
    Loginapi('http://127.0.0.1:8000/app/api/token/',data)
    
    
    
  }
  const getreq=()=>{
    axios.get('http://127.0.0.1:8000/app/date')
  }
  return (
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
          <p className="login-title">Login</p>
          <InputView label="Email Address" value={username}onChange={(e)=>setUsername(e.target.value)} />

          <InputView label="Password" onChange={(e)=>setPassword(e.target.value)} />

          <InputView
            checkbox={true}
            text="I Accept the"
            clickable={"Terms & Conditions & Privacy Policy "}
          />

          <LbuttonView title="Login"   value={username} action={postreq} />
          <InputView text="Don't have account?" clickable="Sign Up here" />
          <LbuttonView icon="googleicon" title="Login with google" />
        </Col>
      </Col>
    </Row>
  );
};
export default LoginScr;
