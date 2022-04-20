import SvgIcon from "../../assets/Icon_apps";
import React, { useState } from "react";
import "../../assets/css/consentbanner.css";
import { Image } from "antd";

const Cbpreview = (props) => {
  console.log('readmore.....',props.readmore)
  return (
    <div>
      <div
        style={{
          width: "64.69vw",
          boxShadow: `0px 0px 4px rgba(0, 0, 0, 0.26)`,
          borderRadius: "4px",
          padding: "1vw",
          flexDirection: "column",
          display: "flex",
          alignItems: "flex-start",
          // backgroundColor: `${props.theme === "dark" ? "#373737" : "#fff"}`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width:'62.7vw',
            alignItems: "center",
          }}
        >
          {props.logo ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "0.5vw",
              }}
            >
              <Image width={"6.25vw"} preview={false} src={props.logolink} />
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "1vw",
                  lineHeight: "1.2vw",
                  fontWeight: 600,
                  color: `${props.theme === "light" ? "#000" : "#fff"}`,
                }}
              >
                {props.title}
              </p>

              {props.close ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p
                style={{
                  fontSize: "1vw",
                  lineHeight: "1.2vw",
                  fontWeight: "lighter",
                  fontFamily: "sans-serif",
                  textAlign: "justify",
                  color: `${props.theme === "light" ? "#000" : "#fff"}`,
                }}
              >
                {props.text} 
                {props.readmore?<a href={props.readlink}>Read More</a>:null}
                {/* {props.readmore?<div><p>Read More</p></div>:null} */}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            {props.tsaaro ? (
              <p
                style={{
                  fontFamily: "sans-serif",
                  textAlign: "start",
                  fontSize: "1vw",
                  lineHeight: "1.2vw",
                  margin: 0,
                  color: `${props.theme === "light" ? "#000" : "#fff"}`,
                }}
              >
                Powered by <b>Tsaaro</b>{" "}
              </p>
            ) : null}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "8.33vw",
                height: "5.03vh",
                marginLeft: ".78vw",
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
                width: "8.33vw",
                height: "5.03vh",
                marginLeft: ".78vw",
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
                width: "8.33vw",
                height: "5.03vh",
                backgroundColor: "#7A4EB6",
                marginLeft: ".78vw",
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
