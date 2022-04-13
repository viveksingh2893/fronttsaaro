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
          paddingTop: "15px",
          paddingBottom: "10px",
          flexDirection: "column",
          display: "flex",
          alignItems: "flex-start",
          backgroundColor: `${props.theme === "dark" ? "#373737" : "#fff"}`,
        }}
      >
        {props.close ? (
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
        ) : null}
        <div
          style={{
            width: "1180px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {props.logo ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image width={120} preview={false} src={props.logolink} />
            </div>
          ) : null}
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
                {props.title}
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
                {props.text} <a href={props.readlink}>Read More</a>
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
            {props.tsaaro ? (
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
            ) : null}
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
