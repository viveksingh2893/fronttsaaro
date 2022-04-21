import SvgIcon from "../../assets/Icon_apps";
import React, { useEffect, useState } from "react";
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
    setDarkmode(!darkmode);
    
    console.log('mode',darkmode);
  };

  useEffect(()=>{
    if (darkmode) {
      props.SelectTheme("dark");
    } else {
      props.SelectTheme("light");
    }
  },[darkmode])

  return (
    <div>
      <Dropmenu topmargin="0vw" opthead="Comply With" />
      <div
        style={{
          height: "12.06vh",
          width: "100%",
          backgroundColor: "white",
          marginTop: "2vh",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent:'center',
          paddingLeft: "1vw",
          paddingTop: "1.2vh",
        }}
      >
        <div
          style={{
            width: "18.02vw",
            height: "4vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems:'center',
          }}
        >
          <div
            style={{
              width: "1.25vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:0
            }}
          >
            <SvgIcon name="lightdrop" />
          </div>
          <div
            style={{
              width: "10.52vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "1vw",
                lineHeight: "1.2vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily:'Roboto',
                margin:0
              }}
            >
              Light
            </p>
          </div>
          <div
            style={{
              width: "1.25vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleColour}
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
            width: "18.02vw",
            height: "4vh",
            marginTop: "1.5vh",
            display: "flex",
            flexDirection: "row",
            justifyContent:'space-around',
          }}
        >
          <div
            style={{
              width: "1.25vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SvgIcon name="darkdrop" />
          </div>
          <div
            style={{
              width: "10.52vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "1vw",
                lineHeight: "1.2vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily:'Roboto',
                margin:0
              }}
            >
              Dark
            </p>
          </div>
          <div
            style={{
              width: "1.25vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleColour}
          >
            {darkmode ? <SvgIcon name="darkon" /> : <SvgIcon name="darkoff" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cbcolour;
