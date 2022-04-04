import SvgIcon from "../../assets/Icon_apps";
import React, { useState } from "react";
import "../../assets/css/consentbanner.css";
import Dropmenu from "../../component/consentbanner/dropmenu";
// import Cookienotice from "../../component/consentbanner/cookienotice";
import TextArea from "rc-textarea";

const Cbcontent = (props) => {
  const [boxopen, setBoxopen] = useState(false);
  const [val, setVal] = useState("");
  const [close, setClose] = useState(true);
  const [brand, setBrand] = useState(true);

  return (
    <div>
      <Dropmenu topmargin="0px" opthead="Comply With" />
      <Dropmenu topmargin="15px" opthead="Default Language" />
      <div>
        <div
          style={{
            width: "394px",
            height: "64px",
            backgroundColor: "#fff",
            borderBottomLeftRadius: `${boxopen ? "0px" : "5px"}`,
            borderBottomRightRadius: `${boxopen ? "0px" : "5px"}`,
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            marginTop: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "240px",
              height: "40px",
              marginLeft: "19px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <p className="drpdwn-title">Cookie Notice</p>
          </div>
          <div
            style={{
              width: "120px",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setBoxopen(!boxopen);
            }}
          >
            <SvgIcon name="pointdown" />
          </div>
        </div>
        {boxopen ? (
          <div
            style={{
              width: "394px",
              backgroundColor: "#fff",
              marginTop: "1px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              paddingLeft: "19px",
              paddingRight: "19px",
              paddingTop: "8px",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "40px",
                display: "flex",
              }}
            >
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Title
              </p>
            </div>
            <TextArea
              style={{
                width: "346px",
                height: "40px",
                borderRadius: "5px",
                backgroundColor: "#F0EDFF",
                borderWidth: "0px",
                borderColor: "transparent",
                padding: "10px",
                outline: "none",
              }}
              placeholder="Cookie Consent"
            />
            <div style={{ marginTop: "16px", width: "99px" }}>
              <p>Default text</p>
            </div>
            <TextArea
              style={{
                width: "346px",
                height: "160px",
                borderRadius: "5px",
                backgroundColor: "#F0EDFF",
                borderWidth: "0px",
                borderColor: "transparent",
                padding: "10px",
                outline: "none",
              }}
              placeholder="This website uses cookies that help the website to function and also to track how you interact with it. We will only use the cookies if you consent to it by clicking on Accept. You can also manage individual cookie preferences from Settings."
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
                props.DefTxt(e.target.value);
              }}
            />
            <div
              style={{
                width: "346px",
                flexDirection: "row",
                display: "flex",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "100px", paddingTop: "5px" }}>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Close Button
                </p>
              </div>
              <div
                style={{
                  width: "246px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setClose(!close);
                  }}
                >
                  {close ? (
                    <SvgIcon name="darkon" />
                  ) : (
                    <SvgIcon name="lightoff" />
                  )}
                </div>
              </div>
            </div>
            <div
              style={{
                width: "346px",
                flexDirection: "row",
                display: "flex",
                marginTop: "10px",
              }}
            >
              <div style={{ width: "246px", paddingTop: "5px" }}>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Disable Tsaaro Branding
                </p>
              </div>
              <div
                style={{
                  width: "100px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setBrand(!brand);
                  }}
                >
                  {brand ? (
                    <SvgIcon name="darkon" />
                  ) : (
                    <SvgIcon name="lightoff" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cbcontent;
