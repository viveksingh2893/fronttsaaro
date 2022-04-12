import SvgIcon from "../../assets/Icon_apps";
import React, { useEffect, useState } from "react";
import "../../assets/css/consentbanner.css";
import Dropmenu from "../../component/consentbanner/dropmenu";
import TextArea from "rc-textarea";

const Cbcontent = (props) => {
  const [boxopen, setBoxopen] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [logolink, setLogolink] = useState("");
  const [readlink, setReadlink] = useState("");
  const [close, setClose] = useState(true);
  const [readmore, setReadmore] = useState(true);
  const [brand, setBrand] = useState(true);
  const [mylogo, setMylogo] = useState(false);

  const handleBrand = () => {
    setBrand(!brand);
  };

  const handleLogo = () => {
    setMylogo(!mylogo);
  };

  const handleClose = () => {
    setClose(!close);
  };

  useEffect(() => {
    if (brand) {
      props.DefTsaaro(true);
    } else {
      props.DefTsaaro(false);
    }
  }, [brand]);

  useEffect(() => {
    if (mylogo) {
      props.DefLogo(true);
    } else {
      props.DefLogo(false);
    }
  }, [mylogo]);

  useEffect(() => {
    if (close) {
      props.DefClose(true);
    } else {
      props.DefClose(false);
    }
  }, [close]);

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
              height: "500px",
              backgroundColor: "#fff",
              marginTop: "1px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              paddingLeft: "19px",
              paddingRight: "19px",
              paddingTop: "8px",
              paddingBottom: "8px",
              overflowY: "scroll",
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
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                props.DefTtl(e.target.value);
              }}
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
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
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
                <div style={{ cursor: "pointer" }} onClick={handleClose}>
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
                  Enable Tsaaro Branding
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
                <div style={{ cursor: "pointer" }} onClick={handleBrand}>
                  {brand ? (
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
                  Show My Brand Logo
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
                <div style={{ cursor: "pointer" }} onClick={handleLogo}>
                  {mylogo ? (
                    <SvgIcon name="darkon" />
                  ) : (
                    <SvgIcon name="lightoff" />
                  )}
                </div>
              </div>
            </div>
            {mylogo ? (
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
                placeholder="Logo URL"
                value={logolink}
                onInputCapture={(e) => {
                  setLogolink(e.target.value);
                  props.DefLogolink(e.target.value);
                }}
              />
            ) : null}
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
                  Read More
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
                    setReadmore(!readmore);
                  }}
                >
                  {readmore ? (
                    <SvgIcon name="darkon" />
                  ) : (
                    <SvgIcon name="lightoff" />
                  )}
                </div>
              </div>
            </div>
            {readmore ? (
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
                placeholder="Read More URL"
                value={readlink}
                onInputCapture={(e) => {
                  setReadlink(e.target.value);
                  props.DefReadlink(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cbcontent;
