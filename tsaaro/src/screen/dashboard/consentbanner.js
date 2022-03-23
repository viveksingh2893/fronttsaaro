import SvgIcon from "../../assets/Icon_apps";
import Navbutton from "../../component/consentbanner/navbutton";
import React, { useState } from "react";
import "../../assets/css/consentbanner.css";
import Dropmenu from "../../component/consentbanner/dropmenu";
import Cblayout from "../../component/consentbanner/cblayout";

const ConsentbannerScr = (props) => {
  const [toggle, setToggle] = useState(false);
  const [activemenu, setActiveMenu] = useState("Layout");
  const [bannermenu, setMenu] = useState([1, 0, 0, 0]);

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

  // const handletoggle = (e) => {
  //   console.log("toggle..........");
  //   window.addEventListener("click", () => {});
  //   setToggle(!toggle);
  // };

  return (
    <div
      style={{
        width: "1840px",
        height: "888px",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 1000,
        top: "18px",
        left: "47px",
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
          width: "133px",
          height: "888px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "32px",
        }}
      >
        <div
          onClick={() => {
            props.callcb();
          }}
          style={{ cursor: "pointer", marginBottom: "32px" }}
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
          width: "465px",
          height: "888px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F0EDFF",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingRight: "36px",
          paddingLeft: "36px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: "17px",
            marginBottom: "32px",
          }}
        >
          <div
            className="cb-btn"
            style={{
              width: "200px",
              height: "48px",
              borderRadius: "5px",
            }}
          >
            <p className="btn-txt" style={{ color: "#fff" }}>
              Save & Publish
            </p>
          </div>
        </div>

        {bannermenu[0] === 1 ? (
          <Cblayout />
        ) : (
          <div style={{ width: "394px" }}></div>
        )}
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "394px",
            height: "56px",
            borderRadius: "2px",
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
    </div>
  );
};
export default ConsentbannerScr;
