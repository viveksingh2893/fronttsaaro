import { AnimatePresence } from "framer-motion";
import { Route,Routes,useLocation } from "react-router-dom";
import Screen from "../dashboard";
import LoginScr from "./login";
import OtpScr from "./otp";
import SignupScr from "./signup";

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
        </Routes>
        </AnimatePresence>
        </div>
    )
}
export default AccountScr;