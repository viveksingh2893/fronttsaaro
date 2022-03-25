import { Row, Col, Image,Alert } from "antd";
import logo from "../../assets/images/img1.png";
import tsaaro from "../../assets/images/tsaaro.png";
import "../../assets/css/login.css";
import Loginleftsvg from "../../assets/loginleftside";
import InputView from "../../component/input/linput";
import LbuttonView from "../../component/button/lbutton";
import { useNavigate } from "react-router-dom";
import { useState,useCallback } from "react";
import Postapi from "../../api/Postapi";
import { motion} from "framer-motion";
import Password from "antd/lib/input/Password";
const SignupScr = () => {
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [password, setPassword] = useState();
  const [verify, setVerify] = useState();
  const [loading,setLoading] = useState(false);
  const [alertMessage, setMessage] = useState();
  const [wrongcred, setWrongcred] = useState(false);
  const navigate=useNavigate()
  console.log(email,website,password);
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
      redirect_uri: `http://3.6.243.234:8001/${redirectUri}`,
      prompt: 'select_account',
      access_type: 'offline',
      scope
    };
    
    const urlParams = new URLSearchParams(params).toString();
console.log(urlParams)
    window.location = `${googleAuthUrl}?${urlParams}`;
  }, []);
  const postreq = async () => {
  if(password===verify){
    setLoading(!loading)
    const auth = await Postapi("/auth/user/signup", {email:email,website:website,password:password,password2:verify});
    console.log("auth....", auth);
    if (auth) {
      setLoading(!loading)
      navigate("/otp",{state:{email:email}});
    } else {
      console.log("hello signup");
    }
  }else{
    setMessage('password mismatch')
  }};
  const variants = { 
    
    hidden:{opacity:0,
    x:'-100vw'},
    visible:{
      opacity:1,
      x:0,
      transition:{ease:'easeOut',duration:0.5

      },
      exit:{
        x:'100vw',
        transition:{ease:'easeInOut'}
      }
    }
  };

  return (
    <motion.div 
    initial='hidden' 
    animate='visible'
    exit='exit'
    variants={variants} className="login-main">
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
          <InputView  onChange={(e)=>setVerify(e.target.value)}label="Confirm Password" />
          {password!==verify?<Alert
             style={{width:'21vw',background:'#F6F6F6'}}
             description='Password Mismatch'
             type="error"
             showIcon
             closable
             onClose={()=>setWrongcred(false)}
            />:null}
          <InputView
            checkbox={true}
            text="I Accept the"
            clickable={"Terms & Conditions & Privacy Policy "}
          />
        
          <LbuttonView title="Sign Up" action={email&&password&&verify&&website?postreq:null} visible={loading}/>

          <InputView text="Already have an Account ?" clickable="Login here" action={()=>navigate('/')} />

          <LbuttonView icon="googleicon" title="Sign Up with google" action={openGoogleLoginPage} />
        </Col>
      </Col>
    </motion.div>
  );
};
export default SignupScr;
