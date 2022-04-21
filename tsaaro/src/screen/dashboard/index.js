import React, { useState, useEffect } from "react";
import HeaderMenuView from "../../component/header/HeaderMenuView";
import SideMenuView from "../../component/header/SideMenuView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookiemanagerScr from "./cookiemanager";
import ConsentbannerScr from "./consentbanner";
import ConsentlogScr from "./consentlog";
import DashboardScr from "./dashboard";
import SitesettingScr from "./sitesetting";
import "../../assets/css/sidemenu.css";
import AccsettingScr from "./accsetting";
import Postapi from "../../api/Postapi";
import Getapi from "../../api/Getapi";
import { useDispatch } from "react-redux";

import { changeWebsite } from "../../redux/action";
import WebsitePop from "../../component/popup/websitePop";

const Screen = () => {
  const [inactive, setInactive] = useState(false);
  const [active, setActive] = useState(false);
  const [cbvisible, setCbvisible] = useState(false);
  const [webList, setwebList] = useState([]);
  const [selectItem, setItem] = useState();

  const dispatch=useDispatch();
  useEffect(() => {
    CheckWeblist();
  }, []);

  const CheckWeblist = async () => {
    const response = await Getapi("/auth/get_websitecheck");
    if (response.data) {
      if (response.data.website_check) {
        const response = await Getapi("/auth/get_allwebsite");
        dispatch(changeWebsite({data:response.data[0]}))
        setwebList(response.data);
      }else if(!response.data.website_check){
        setActive(true)

      }
    }
  };

  console.log("inactive", inactive);

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
        <HeaderMenuView
          inactive={inactive}
          webList={webList}
          setInactive={setInactive}
          setItem={setItem}
        />
        <div
          style={{
            display: "flex",
            width: inactive ? "93vw" : "86vw",
            marginTop: "8vh",
            backgroundColor: "#E5E5E5",
          }}
        >
          {active &&(<WebsitePop active={setActive}/>)}
          <Routes>
            <Route path="/dash" element={<DashboardScr />} />
            <Route path="/cm" element={<CookiemanagerScr />} />
            <Route path="/cb" element={<ConsentbannerScr />} />
            <Route path="/cl" element={<ConsentlogScr />} />
            <Route path="/ss" element={<SitesettingScr />} />
            <Route path="/as" element={<AccsettingScr />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Screen;
