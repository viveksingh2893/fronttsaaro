import React, { useState } from "react";
import "../../assets/css/consentbanner.css";
import Dropmenu from "../../component/consentbanner/dropmenu";
import SvgIcon from "../../assets/Icon_apps";

const Cbbehaviour = (props) => {
  const [toggle, setToggle] = useState("lighton");

  const handleToggle = (key) => {
    if (toggle === "lighton") {
      setToggle("lightoff");
    } else {
      setToggle("lighton");
    }
  };
  return (
    <div>
      <Dropmenu topmargin="0px" opthead="Comply With" />
      <div
        style={{
          width: "100%",
          height: "146px",
          backgroundColor: "#FFF",
          borderRadius: "5px",
          marginTop: "15px",
          paddingLeft: "19px",
          paddingRight: "19px",
          paddingTop: "9px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "218px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            Geo-targetting cookie banner
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              display: "flex",
              alignItems: "flex-start",
              color: "#CCACF8",
            }}
          >
            Show GDPR banners only to users from EU and UK
          </p>
        </div>
        <div
          style={{
            width: "138px",
            height: "60px",

            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ height: "30px" }}></div>
          <div
            style={{
              width: "138px",
              height: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleToggle(toggle);
              }}
            >
              {toggle === "lighton" ? (
                <SvgIcon name="lighton" />
              ) : (
                <SvgIcon name="lightoff" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cbbehaviour;
