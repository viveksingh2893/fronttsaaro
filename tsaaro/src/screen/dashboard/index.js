import React, {useState, useEffect} from 'react';
import HeaderMenuView from '../../component/header/HeaderMenuView';
import SideMenuView from '../../component/header/SideMenuView';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import CookiemanagerScr from './cookiemanager';
import ConsentbannerScr from './consentbanner';
import CookiepolicyScr from './cookiepolicy';
import PrivacypolicyScr from './privacypolicy';
import ConsentlogScr from './consentlog';
import DashboardScr from './dashboard';
import SitesettingScr from './sitesetting';
import '../../assets/css/sidemenu.css'
 
const Screen=()=>{
    const [inactive, setInactive] = useState(false);
    const [viewPortWidth, setWidth] = useState(0);
    const [viewPortHeight, setHeight] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", (e) => {
          console.log("size", e.target);
          setWidth(window.innerWidth);
          setHeight(window.innerHeight);
        });
      }, []);

    return(
        <div style={{display:'flex', flexDirection:'row',backgroundColor:'#E5E5E5',overflowY:'auto'}}>
            <div className={`sidenav ${inactive ? "inactive" : ""}`} >
                <SideMenuView inactive={inactive}/>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <HeaderMenuView inactive={inactive} setInactive={setInactive}/>
                <div style={{display:'flex', height: viewPortHeight}}>
                    <div style={{display:'flex', width:inactive?'86.1vw':'80vw', marginLeft:'2vw'}}>
                    <Routes>
                        <Route path="/dash" element={<DashboardScr/>}/>
                        <Route path="/cm" element={<CookiemanagerScr/>}/>
                        <Route path="/cb" element={<ConsentbannerScr/>}/>
                        <Route path="/cl" element={<ConsentlogScr/>}/>
                        <Route path="/cp" element={<CookiepolicyScr/>}/>
                        <Route path="/pp" element={<PrivacypolicyScr/>}/>
                        <Route path="/ss" element={<SitesettingScr/>}/>
                    </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Screen;