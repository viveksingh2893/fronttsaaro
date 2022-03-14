import { Row, Col, Image, Alert } from "antd";
import logo from "../../assets/images/img1.png";
import tsaaro from "../../assets/images/tsaaro.png";
import "../../assets/css/login.css";
import Loginleftsvg from "../../assets/loginleftside";
import InputView from "../../component/input/linput";
import LbuttonView from "../../component/button/lbutton";
import Postapi from "../../api/Postapi";
import axios from "axios";
import { motion } from "framer-motion";
import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginScr = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [alertMessage, setMessage] = useState();
  const [wrongcred, setWrongcred] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  //  const data={
  //   "email":"rohit@destratum.com",
  //   "password":"123456"
  // }
const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_BASE_BACKEND_URL } = process.env;
const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const redirectUri = 'auth/google/';

    const scope = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');

    const params = {
      response_type: 'code',
      client_id: '476617142718-lluvm3mkk189lkp2968vqv8l2l8sig1q.apps.googleusercontent.com',
      redirect_uri: `http://localhost:8001/${redirectUri}`,
      prompt: 'select_account',
      access_type: 'offline',
      scope
    };
    
    const urlParams = new URLSearchParams(params).toString();
console.log(urlParams)
    window.location = `${googleAuthUrl}?${urlParams}`;
  }, []);
  const data = {
    email: username,
    password: password,
  };
  console.log(data);
  const postreq = async () => {
    setLoading(true)
    const auth = await Postapi("http://192.168.29.5:8001/auth/token/", data,);
    console.log("auth......", auth);
    if (auth.status===200) {
      axios.defaults.headers.common['Authorization']=`Bearer ${auth.data.access}`
      setLoading(!loading)
      navigate("/dashboard");
    } else if(auth.status===202) {
      setLoading(!loading)
      navigate('/otp')
      
    }else if(auth.status===400){
      
      setLoading(false)
      setWrongcred(true);
      setMessage("You don't have account")
    }else if (auth.status===401){
      setLoading(false)
      setWrongcred(true);
      setMessage("Your email or password is incorrect.")
    }
  };
  const variants = { 
    hidden:{opacity:0,
    x:'100vw'},
    visible:{
      opacity:1,
      x:0,
      transition:{ease:'easeOut',duration:0.5
    },
      exit:{
        x:'-100vw',
        transition:{ease:'easeInOut'}
      }
    }
  };
  return (
    <motion.div   
    initial='hidden' 
    animate='visible'
    exit='exit'
    variants={variants}
    className="login-main">
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
          <InputView
            label="Email Address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputView
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5 className="login-fg-pwd">Forgot password?</h5>
          {wrongcred ? (
             <Alert
             style={{width:'21vw',background:'#F6F6F6'}}
             description={alertMessage}
             type="error"
             showIcon
             closable
             onClose={()=>setWrongcred(false)}
             />
           
          ) : null}
               
          <LbuttonView title="Login" value={username} action={username && password?postreq:null} visible={loading} />
    
          <InputView text="Don't have account?" clickable="Sign Up here" action={()=>navigate("/signup")} />
          <LbuttonView icon="googleicon" title="Login with google" action={openGoogleLoginPage} />
        </Col>
      </Col>
    </motion.div>
  );
};
export default LoginScr;
