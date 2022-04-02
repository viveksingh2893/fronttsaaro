import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyWebsiteInfo from './companywebsiteinfo';
import DataCollection from './datacollection';
import Disclosure from './disclosure';
import TrackingTechnology from './trackingtechnology';
import DataProtection from './protection';
import PrivacyPolicySideMenu from "../../component/policy/privacypolicysidemenu";

const PrivacyPolicy=()=>{
    return(
        <div style={{ display: "flex", flexDirection: "row", width:'100vw', height:'100vh' }}>
            <PrivacyPolicySideMenu/>
          <div style={{display:'flex', height:'100vh', width:'78vw',overflowY:'auto', padding:'3vw'}}>
            <Routes>
              <Route path="/cwi" element={<CompanyWebsiteInfo/>} />
              <Route path="/dc" element={<DataCollection/>} />
              <Route path="/dis" element={<Disclosure/>} />
              <Route path="/tt" element={<TrackingTechnology/>} />
              <Route path="/dp" element={<DataProtection/>} />
            </Routes>
          </div> 
      </div>
    )
}

export default PrivacyPolicy;