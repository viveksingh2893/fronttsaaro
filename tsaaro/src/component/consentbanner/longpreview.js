import SvgIcon from "../../assets/Icon_apps";
import React, { useState } from "react";
import "../../assets/css/consentbanner.css";

const Cbpreview = (props) => {
  return (
    <div>
      <div
        style={{
          width: "1242px",
          boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.26)`,
          borderRadius: "5px",
          paddingLeft: "31px",
          paddingRight: "31px",
          paddingTop: "22px",
          paddingBottom: "22px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          backgroundColor: `${props.theme === "dark" ? "#373737" : "#fff"}`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "640px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              lineHeight: "22px",
              fontWeight: 600,
              color: `${props.theme === "light" ? "#000" : "#fff"}`,
            }}
          >
            Cookie Consent
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "22.5px",
              fontWeight: "lighter",
              fontFamily: "sans-serif",
              textAlign: "justify",
              color: `${props.theme === "light" ? "#000" : "#fff"}`,
            }}
          >
            This website uses cookies that help the website to function and also
            to track how you interact with it. We will only use the cookies if
            you consent to it by clicking on Accept. You can also manage
            individual cookie preferences from Settings. <a>Read More</a>
          </p>
        </div>
        <div
          style={{
            width: "540px",
            display: "flex",
            flexDirection: "row",
            paddingLeft: "15px",
            paddingBottom: "15px",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "50px",
              marginLeft: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              className="btn-txt"
              style={{
                color: `${props.theme == "light" ? "#7A4EB6" : "#fff"}`,
                cursor: "pointer",
              }}
            >
              Preferences
            </p>
          </div>
          <div
            style={{
              width: "160px",
              height: "50px",
              marginLeft: "15px",
              border: `1px solid ${
                props.theme == "light" ? "#7A4EB6" : "#fff"
              }`,
              boxShadow: `0px 0.5px 4px rgba(0, 0, 0, 0.2)`,
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <p
              className="btn-txt"
              style={{
                color: `${props.theme == "light" ? "#7A4EB6" : "#fff"}`,
              }}
            >
              Reject All
            </p>
          </div>
          <div
            style={{
              width: "160px",
              height: "50px",
              backgroundColor: "#7A4EB6",
              marginLeft: "15px",
              borderRadius: "4px",
              boxShadow: `0px 0.5px 4px rgba(0, 0, 0, 0.2)`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <p className="btn-txt" style={{ color: "#fff" }}>
              Accept All
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cbpreview;
