
import React, { useState, useEffect } from "react";
import HeaderMenuView from "../../component/header/HeaderMenuView";
import SideMenuView from "../../component/header/SideMenuView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookiemanagerScr from "./cookiemanager";
import ConsentbannerScr from "./consentbanner";
import CookiepolicyScr from "./cookiepolicy";
import PrivacypolicyScr from "./privacypolicy";
import ConsentlogScr from "./consentlog";
import DashboardScr from "./dashboard";
import SitesettingScr from "./sitesetting";
import "../../assets/css/sidemenu.css";

const Screen = () => {
  const [inactive, setInactive] = useState(false);
  const [cbvisible, setCbvisible] = useState(false);

  console.log('inactive', inactive);
  
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {cbvisible ? (
        <ConsentbannerScr
          callcb={() => {
            setCbvisible(!cbvisible);
          }}
        />
      ) : null}
      <div className={`sidenav ${inactive ? "inactive" : ""}`}>
        <SideMenuView
          inactive={inactive}
          callcb={() => {
            setCbvisible(!cbvisible);
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <HeaderMenuView inactive={inactive} setInactive={setInactive} />
          <div style={{ display:"flex", width:inactive ? "93vw":"86vw", marginTop:'8vh', backgroundColor:"#E5E5E5"}}>
            <Routes>
              <Route path="/dash" element={<DashboardScr />} />
              <Route path="/cm" element={<CookiemanagerScr />} />
              <Route path="/cb" element={<ConsentbannerScr />} />
              <Route path="/cl" element={<ConsentlogScr />} />
              <Route path="/cp" element={<CookiepolicyScr />} />
              <Route path="/pp" element={<PrivacypolicyScr />} />
              <Route path="/ss" element={<SitesettingScr />} />
            </Routes>
          </div> 
      </div>
    </div>
  );
};
export default Screen;
