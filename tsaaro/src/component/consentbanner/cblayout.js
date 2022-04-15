import SvgIcon from "../../assets/Icon_apps";
import React, { useState } from "react";
import "../../assets/css/consentbanner.css";
import Dropmenu from "../../component/consentbanner/dropmenu";

const Cblayout = (props) => {
  const [active, setActive] = useState("bf");
  const [layout, setLayout] = useState([1, 0, 0, 0]);
  const handleLayout = (id) => {
    if (id === "bf") {
      setLayout([1, 0, 0, 0]);
      setActive("bf");
      props.SelectLayout("bf");
    } else if (id === "tf") {
      setLayout([0, 1, 0, 0]);
      setActive("tf");
      props.SelectLayout("tf");
    } else if (id === "btm") {
      setLayout([0, 0, 1, 0]);
      setActive("btm");
      props.SelectLayout("btm");
    } else if (id === "top") {
      setLayout([0, 0, 0, 1]);
      setActive("top");
      props.SelectLayout("top");
    }
  };

  return (
    <div>
      <Dropmenu topmargin="0vw" opthead="Comply With" />
      <Dropmenu topmargin="1.52vh" opthead="Default Language" />
      <Dropmenu topmargin="1.52vh" opthead="Consent Type" />
      <div
        style={{
          marginTop: "1.52vh",
          width: "100%",
          height: "37.68vh",
          backgroundColor: "#fff",
          borderRadius: "4px",
          padding: ".9vw",
        }}
      >
        <div>
          <p className="drpdwn-title">Banner Type</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "30.14vh",
            marginTop: "3vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "7.1vw",
                height: "9.64vh",
                backgroundColor: "#F6F6F6",
                borderRadius: "4px",
                boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                padding: ".9vw",
                cursor: "pointer",
              }}
              onClick={() => {
                handleLayout("bf");
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "1.5vh",
                  backgroundColor: `${active == "bf" ? "#715FD2" : "#ADADAD"}`,
                  borderRadius: "4px",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "7.1vw",
                height: "9.64vh",
                backgroundColor: "#F6F6F6",
                borderRadius: "4px",
                marginLeft: "2.1vw",
                boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: ".9vw",
                cursor: "pointer",
              }}
              onClick={() => {
                handleLayout("tf");
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "1.51vh",
                  backgroundColor: `${active == "tf" ? "#715FD2" : "#ADADAD"}`,
                  borderRadius: "4px",
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "4vh",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "7.1vw",
                height: "9.64vh",
                backgroundColor: "#F6F6F6",
                borderRadius: "4px",
                boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                cursor: "pointer",
              }}
              onClick={() => {
                handleLayout("btm");
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "1.51vh",
                  backgroundColor: `${active == "btm" ? "#715FD2" : "#ADADAD"}`,
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "7.1vw",
                height: "9.64vh",
                backgroundColor: "#F6F6F6",
                borderRadius: "4px",
                marginLeft: "2.1vw",
                boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => {
                handleLayout("top");
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "1.51vh",
                  backgroundColor: `${active == "top" ? "#715FD2" : "#ADADAD"}`,
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cblayout;
