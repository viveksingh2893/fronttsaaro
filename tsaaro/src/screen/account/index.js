import { Route,Routes } from "react-router-dom";
import Screen from "../dashboard";
import LoginScr from "./login";
import SignupScr from "./signup";

const AccountScr=()=>{

    return(
        <>
        <Routes>
            <Route path="/" element={<LoginScr/>} />
            <Route path="/signup" element={<SignupScr/>} />
            <Route path="/dashboard/*" element={<Screen/>} />
            
        </Routes>
        </>
    )
}
export default AccountScr;