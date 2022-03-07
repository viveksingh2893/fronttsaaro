import { Row, Col, Image } from "antd";
import logo from "../../assets/images/img1.png";
import tsaaro from "../../assets/images/tsaaro.png";
import "../../assets/css/login.css";
import Loginleftsvg from "../../assets/loginleftside";
import InputView from "../../component/input/linput";
import LbuttonView from "../../component/button/lbutton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SignupScr = () => {
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [password, setPassword] = useState();
  const [wrongcred, setWrongcred] = useState(false);
  const navigate=useNavigate()
  console.log(email,website,password);

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
          <p className="login-title">Sign Up</p>
          <InputView  onChange={(e)=>setEmail(e.target.value)}label="Email Address" />

          <InputView  onChange={(e)=>setWebsite(e.target.value)}label="Website" />

          <InputView  onChange={(e)=>setPassword(e.target.value)}label="Password" />

          <InputView
            checkbox={true}
            text="I Accept the"
            clickable={"Terms & Conditions & Privacy Policy "}
          />

          <LbuttonView title="Sign Up" />

          <InputView text="Already have an Account ?" clickable="Login here" action={()=>navigate('/')} />

          <LbuttonView icon="googleicon" title="Sign Up with google" />
        </Col>
      </Col>
    </Row>
  );
};
export default SignupScr;
