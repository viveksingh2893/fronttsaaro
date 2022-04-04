import SvgIcon from "../../assets/Icon_apps";
import React, { useState } from "react";
import "../../assets/css/consentbanner.css";
import { Image } from "antd";

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
          paddingTop: "10px",
          paddingBottom: "10px",
          flexDirection: "column",
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: `${props.theme === "dark" ? "#373737" : "#fff"}`,
        }}
      >
        <div
          style={{
            width: "1180px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div style={{ cursor: "pointer" }}>
            {props.theme == "light" ? (
              <SvgIcon name="cross" />
            ) : (
              <SvgIcon name="whitecross" />
            )}
          </div>
        </div>
        <div
          style={{
            width: "1180px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              width={120}
              preview={false}
              src="data:image/png;base64,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"
            />
          </div>
          <div
            style={{
              width: "1060px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "1040px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "22px",
                  fontWeight: 600,
                  color: `${props.theme === "light" ? "#000" : "#fff"}`,
                  maxWidth: "1040px",
                }}
              >
                Cookie Consent
              </p>
            </div>
            <div
              style={{
                width: "1040px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "22.5px",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                  color: `${props.theme === "light" ? "#000" : "#fff"}`,
                  maxWidth: "1040px",
                }}
              >
                {props.text} <a>Read More</a>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1180px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: "180px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                textAlign: "start",
                lineHeight: "18px",
                color: `${props.theme === "light" ? "#000" : "#fff"}`,
              }}
            >
              Powered by <b>Tsaaro</b>{" "}
            </p>
          </div>
          <div
            style={{
              width: "1000px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              // backgroundColor: "green",
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
    </div>
  );
};

export default Cbpreview;
