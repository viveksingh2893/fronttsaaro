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
    } else if (id === "tf") {
      setLayout([0, 1, 0, 0]);
      setActive("tf");
    } else if (id === "btm") {
      setLayout([0, 0, 1, 0]);
      setActive("btm");
    } else if (id === "top") {
      setLayout([0, 0, 0, 1]);
      setActive("top");
    }
  };

  return (
    <div>
      <Dropmenu topmargin="0px" opthead="Comply With" />
      <Dropmenu topmargin="15px" opthead="Default Language" />
      <Dropmenu topmargin="15px" opthead="Consent Type" />
      <div
        style={{
          marginTop: "15px",
          width: "100%",
          height: "375px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "17px",
        }}
      >
        <div>
          <p className="drpdwn-title">Banner Type</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "300px",
            marginTop: "30px",
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
                width: "136px",
                height: "96px",
                backgroundColor: "#F6F6F6",
                borderRadius: "2px",
                boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                padding: "15px",
              }}
              onClick={() => {
                handleLayout("bf");
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  backgroundColor: `${active == "bf" ? "#715FD2" : "#ADADAD"}`,
                  borderRadius: "2px",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "136px",
                height: "96px",
                backgroundColor: "#F6F6F6",
                borderRadius: "2px",
                marginLeft: "40px",
                boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "15px",
              }}
              onClick={() => {
                handleLayout("tf");
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  backgroundColor: `${active == "tf" ? "#715FD2" : "#ADADAD"}`,
                  borderRadius: "2px",
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "40px",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "136px",
                height: "96px",
                backgroundColor: "#F6F6F6",
                borderRadius: "2px",
                boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
              onClick={() => {
                handleLayout("btm");
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  backgroundColor: `${active == "btm" ? "#715FD2" : "#ADADAD"}`,
                  borderBottomLeftRadius: "2px",
                  borderBottomRightRadius: "2px",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "136px",
                height: "96px",
                backgroundColor: "#F6F6F6",
                borderRadius: "2px",
                marginLeft: "40px",
                boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.25)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
              onClick={() => {
                handleLayout("top");
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  backgroundColor: `${active == "top" ? "#715FD2" : "#ADADAD"}`,
                  borderTopLeftRadius: "2px",
                  borderTopRightRadius: "2px",
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
