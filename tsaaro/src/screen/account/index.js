import { AnimatePresence } from "framer-motion";
import { Route,Routes,useLocation } from "react-router-dom";
import Screen from "../dashboard";
import LoginScr from "./login";
import OtpScr from "./otp";
import SignupScr from "./signup";
import PrivacyPolicy from "../privacypolicy";
import CookiePolicy from "../cookiepolicy";

const AccountScr=()=>{
    const location =useLocation();
    return(
        <div style={{overflow:'hidden'}}>
        <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
            <Route path="/" element={<LoginScr/>} />
            <Route path="/signup" element={<SignupScr/>} />
            <Route path="/otp" element={<OtpScr/>} />
            <Route path="/dashboard/*" element={<Screen/>} />
            <Route path="/privacypolicy/*" element={<PrivacyPolicy/>} />
            <Route path="/cookiepolicy/*" element={<CookiePolicy/>} />
        </Routes>
        </AnimatePresence>
        </div>
    )
}
export default AccountScr;