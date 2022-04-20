import SvgIcon from "../../assets/Icon_apps";
import Navbutton from "../../component/consentbanner/navbutton";
import React, { useEffect, useState, useRef } from "react";
import "../../assets/css/consentbanner.css";
import Cbcolour from "../../component/consentbanner/cbcolour";
import Cblayout from "../../component/consentbanner/cblayout";
import Cbcontent from "../../component/consentbanner/cbcontent";
import Cbbehaviour from "../../component/consentbanner/cbbehaviour";
import Cbpreview from "../../component/consentbanner/cbpreview";

const ConsentbannerScr = (props) => {
  const [activemenu, setActiveMenu] = useState("Layout");
  const [bannermenu, setMenu] = useState([1, 0, 0, 0]);
  const [cbcolor, setCbcolor] = useState("light");
  const [cbtype, setCbtype] = useState("btm");
  const [cblang, setCblang] = useState("English");
  const [cbtext, setCbtext] = useState(
    "This website uses cookies that help the website to function and also to track how you interact with it. We will only use the cookies if you consent to it by clicking on Accept. You can also manage individual cookie preferences from Settings."
  );
  const [cbttl, setCbttl] = useState("Cookie Consent");
  const [logolink, setLogolink] = useState("");
  const [readlink, setReadlink] = useState("");
  const [tsaaro, setTsaaro] = useState(true);
  const [logo, setLogo] = useState(false);
  const [close, setClose] = useState(true);
  const [readmore, setReadmore] = useState(false);
  // const [darkmode, setDarkmode] = useState(false);

  const handleMenu = (id) => {
    if (id === "lay") {
      setMenu([1, 0, 0, 0]);
      setActiveMenu("Layout");
    } else if (id === "con") {
      setMenu([0, 1, 0, 0]);
      setActiveMenu("Content");
    } else if (id === "col") {
      setMenu([0, 0, 1, 0]);
      setActiveMenu("Colour");
    } else if (id === "beh") {
      setMenu([0, 0, 0, 1]);
      setActiveMenu("Behavior");
    }
  };

  useEffect(()=>{
    console.log("toggle..........");
    window.addEventListener("click", () => {});
  },[readmore]);

  return (
    <div
      style={{
        width: "95.83vw",
        height: "89.24vh",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 2,
        top: "5.43vh",
        left: "2.45vw",
        borderRadius: "4px",
        display: "flex", 
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxShadow: `0px 2px 25px -7px rgba(0,0,0,0.75)`,
      }}
    >
      <div
        style={{
          width: "6.93vw",
          height: "89.24vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "3.21vh",
        }}
      >
        <div
          onClick={() => {
            props.callcb();
          }}
          style={{ cursor: "pointer", marginBottom: "3.21vh" }}
        >
          <SvgIcon name="bannerclose" />
        </div>
        <Navbutton
          iconname={bannermenu[0] === 1 ? "layoutactive" : "bannerlayout"}
          textcolor={bannermenu[0] === 1 ? "#7A4EB6" : "black"}
          menuname="Layout"
          backcolor={bannermenu[0] === 1 ? "#F0EDFF" : "#FFF"}
          onClick={() => {
            handleMenu("lay");
          }}
        />
        <Navbutton
          iconname={bannermenu[1] === 1 ? "contentactive" : "bannercontent"}
          textcolor={bannermenu[1] === 1 ? "#7A4EB6" : "black"}
          menuname="Content"
          backcolor={bannermenu[1] === 1 ? "#F0EDFF" : "#FFF"}
          onClick={() => {
            handleMenu("con");
          }}
        />
        <Navbutton
          iconname={bannermenu[2] === 1 ? "coloractive" : "bannercolor"}
          textcolor={bannermenu[2] === 1 ? "#7A4EB6" : "black"}
          menuname="Color"
          backcolor={bannermenu[2] === 1 ? "#F0EDFF" : "#FFF"}
          onClick={() => {
            handleMenu("col");
          }}
        />
        <Navbutton
          iconname={bannermenu[3] === 1 ? "behaviouractive" : "bannerbehaviour"}
          textcolor={bannermenu[3] === 1 ? "#7A4EB6" : "black"}
          menuname="Behaviour"
          backcolor={bannermenu[3] === 1 ? "#F0EDFF" : "#FFF"}
          onClick={() => {
            handleMenu("beh");
          }}
        />
      </div>
      <div
        style={{
          width: "24.22vw",
          height: "89.24vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F0EDFF",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingRight: "1.87vw",
          paddingLeft: "1.87vw",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            backgroundColor: "#F0EDFF",
            marginTop: "1.7vh",
            marginBottom: "3.5vh",
          }}
        >
          <div
            className="cb-btn"
            style={{
              width: "10.46vw",
              height: "4.82vh",
              borderRadius: "4px",
            }}
          >
            <p className="btn-txt" style={{ color: "#fff" }}>
              Save & Publish
            </p>
          </div>
        </div>

        {bannermenu[0] === 1 ? (
          <Cblayout SelectLayout={setCbtype} />
        ) : (
          <div style={{ width: "20.52vw" }}></div>
        )}
        {bannermenu[1] === 1 ? (
          <Cbcontent
            DefTxt={setCbtext}
            DefTtl={setCbttl}
            DefTsaaro={setTsaaro}
            DefLogo={setLogo}
            DefClose={setClose}
            DefLogolink={setLogolink}
            DefReadlink={setReadlink}
            readmore={readmore}
            setReadmore={setReadmore}
          />
        ) : (
          <div style={{ width: "20.52vw" }}></div>
        )}
        {bannermenu[2] === 1 ? (
          <Cbcolour SelectTheme={setCbcolor} />
        ) : (
          <div style={{ width: "20.52vw" }}></div>
        )}
        {bannermenu[3] === 1 ? (
          <Cbbehaviour/>
        ) : (
          <div style={{ width: "20.52vw" }}></div>
        )}
      </div>
      <div
        style={{
          width: "64.69vw",
          height: "89.24vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "64.69vw",
            height: "36.72vh",
            justifyContent: "center",
            alignItems: `${cbtype == "top" ? "flex-start" : "center"}`,
          }}
        >
          {cbtype == "top" ? (
            <Cbpreview
              theme={cbcolor}
              text={cbtext}
              title={cbttl}
              tsaaro={tsaaro}
              logo={logo}
              logolink={logolink}
              readlink={readlink}
              close={close}
              readmore={readmore}
            />
          ) : null}
          {cbtype == "tf" ? (
            <Cbpreview
              theme={cbcolor}
              text={cbtext}
              title={cbttl}
              tsaaro={tsaaro}
              logo={logo}
              logolink={logolink}
              readlink={readlink}
              close={close}
              readmore={readmore}
            />
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "64.68vw",
            height: "22.3vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "20.52vw",
              height: "5.62vh",
              borderRadius: "4px",
              backgroundColor: "#F6F6F6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <p className="prvbtn-txt">Preview your website</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "64.68vw",
            height: "33.46vh",
            justifyContent: "center",
            alignItems: `${cbtype == "btm" ? "flex-end" : "center"}`,
          }}
        >
          {cbtype == "btm" ? (
            <Cbpreview
              theme={cbcolor}
              text={cbtext}
              title={cbttl}
              tsaaro={tsaaro}
              logo={logo}
              logolink={logolink}
              readlink={readlink}
              close={close}
            />
          ) : null}
          {cbtype == "bf" ? (
            <Cbpreview
              theme={cbcolor}
              text={cbtext}
              title={cbttl}
              tsaaro={tsaaro}
              logo={logo}
              logolink={logolink}
              readlink={readlink}
              close={close}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ConsentbannerScr;
