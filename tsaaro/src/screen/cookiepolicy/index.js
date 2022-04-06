import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieTypes from './cookietypes';
import ManageCookiesPreference from './managecookiespreference';
import CookiePolicySideMenu from "../../component/policy/cookiepolicysidemenu";

const CookiePolicy=()=>{
    return(
      <div style={{ display: "flex", flexDirection: "row", width:'100vw', height:'100vh' }}>
        <CookiePolicySideMenu/>
        <div style={{display:'flex', height:'100vh', width:'78vw',overflowY:'auto', padding:'3vw'}}>
          <div>
            <Routes>
              <Route path="/ct" element={<CookieTypes/>} />
              <Route path="/mcp" element={<ManageCookiesPreference/>} />
            </Routes>
          </div> 
        </div>
      </div>
    )  
}

export default CookiePolicy;