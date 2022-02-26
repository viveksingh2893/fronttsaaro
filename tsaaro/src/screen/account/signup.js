import { Row, Col, Image } from "antd";
import logo from "../../assets/images/img1.png";
import tsaaro from "../../assets/images/tsaaro.png";
import "../../assets/css/login.css";
import Loginleftsvg from "../../assets/loginleftside";
import InputView from "../../component/input/linput";
import LbuttonView from "../../component/button/lbutton";
const SignupScr = () => {
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
          <InputView label="Email Address" />

          <InputView label="Website" />

          <InputView label="Password" />

          <InputView
            checkbox={true}
            text="I Accept the"
            clickable={"Terms & Conditions & Privacy Policy "}
          />

          <LbuttonView title="Sign Up" />

          <InputView text="Already have an Account ?" clickable="Login here" />

          <LbuttonView icon="googleicon" title="Sign Up with google" />
        </Col>
      </Col>
    </Row>
  );
};
export default SignupScr;
