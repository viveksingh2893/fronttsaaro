import SvgIcon from "../../assets/Icon_apps";
import React, { useState } from "react";
import "../../assets/css/consentbanner.css";
import Dropmenu from "../../component/consentbanner/dropmenu";

const Cbcolour = (props) => {
  // const [activeColour, setActiveColour] = useState("light");
  const [darkmode, setDarkmode] = useState(false);

  // const handleColour = (id) => {
  //   if (id === "light") {
  //     setActiveColour("light");
  //   } else if (id === "dark") {
  //     setActiveColour("dark");
  //   }
  //   console.log(activeColour);
  //   props.SelectTheme(activeColour);
  // };

  const handleColour = () => {
    if (darkmode) {
      props.SelectTheme("dark");
    } else {
      props.SelectTheme("light");
    }
    console.log(darkmode);
  };

  return (
    <div>
      <Dropmenu topmargin="0px" opthead="Comply With" />
      <div
        style={{
          height: "120px",
          width: "100%",
          backgroundColor: "white",
          marginTop: "15px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "19px",
          paddingTop: "12px",
        }}
      >
        <div
          style={{
            width: "250px",
            height: "40px",

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgIcon name="lightdrop" />
          </div>
          <div
            style={{
              width: "202px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingLeft: "50px",
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Light
            </p>
          </div>
          <div
            style={{
              width: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setDarkmode(!darkmode);
              handleColour();
            }}
          >
            {darkmode ? (
              <SvgIcon name="lightoff" />
            ) : (
              <SvgIcon name="lighton" />
            )}
          </div>
        </div>
        <div
          style={{
            width: "250px",
            height: "40px",
            marginTop: "16px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgIcon name="darkdrop" />
          </div>
          <div
            style={{
              width: "202px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingLeft: "50px",
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Dark
            </p>
          </div>
          <div
            style={{
              width: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setDarkmode(!darkmode);
              handleColour();
            }}
          >
            {darkmode ? <SvgIcon name="darkon" /> : <SvgIcon name="darkoff" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cbcolour;
