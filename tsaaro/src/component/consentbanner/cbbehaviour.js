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
      <Dropmenu topmargin="0vw" opthead="Comply With" />
      <div
        style={{
          height: "13vh",
          backgroundColor: "#FFF",
          borderRadius: "4px",
          marginTop: "1.51vh",
          padding:'.5vw',
          display: "flex",
          flexDirection: "row",
          justifyContent:'center'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:'center',
          }}
        >
          <p
            style={{
              fontSize: "1vw",
              lineHeight: "1.2vw",
              display: "flex",
            }}
          >
            Geo-targetting cookie banner
          </p>
          <p
            style={{
              fontSize: "1vw",
              lineHeight: "1.2vw",
              display: "flex",
              color: "#CCACF8",
            }}
          >
            Show GDPR banners only to users from EU and UK
          </p>
        </div>
        <div
          style={{
            width: "7.2vw",
            display: "flex",
            flexDirection: "column",
            justifyContent:'center'
          }}
        >
          <div
            style={{
              width: "5.2vw",
              height: "3.02vh",
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
