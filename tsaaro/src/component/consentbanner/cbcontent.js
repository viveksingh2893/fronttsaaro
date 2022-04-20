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

  const handleRead = () => {
    setReadmore(!readmore);
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
      <Dropmenu topmargin="0vw" opthead="Comply With" />
      <Dropmenu topmargin="1.51vh" opthead="Default Language" />
      <div>
        <div
          style={{
            width: "20.52vw",
            height: "6.42vh",
            backgroundColor: "#fff",
            borderBottomLeftRadius: `${boxopen ? "0px" : "4px"}`,
            borderBottomRightRadius: `${boxopen ? "0px" : "4px"}`,
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            marginTop: "1.51vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "12.5vw",
              height: "4vh",
              marginLeft: "19px",
              display: "flex",
              backgroundColor: "#fff",
              margin: 0,
            }}
          >
            <p className="drpdwn-title">Cookie Notice</p>
          </div>
          <div
            style={{
              width: "6.25vw",
              height: "4vh",
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
              width: "20.52vw",
              height: "50.25vh",
              backgroundColor: "#fff",
              marginTop: "1px",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              paddingTop: ".87vh",
              paddingBottom: ".87vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                width: "4.7vw",
                height: "4vh",
                display: "flex",
              }}
            >
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "1vw",
                  lineHeight: "1.2vw",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Title
              </p>
            </div>
            <TextArea
              style={{
                width: "17.02vw",
                height: "5vh",
                borderRadius: "4px",
                backgroundColor: "#F0EDFF",
                borderWidth: "0vw",
                borderColor: "transparent",
                padding: ".5vw",
                outline: "none",
                fontSize: "1vw",
                lineHeight: "1.2vw",
              }}
              placeholder="Cookie Consent"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                props.DefTtl(e.target.value);
              }}
            />
            <div
              style={{
                marginTop: "1.63vh",
                fontSize: "1vw",
                lineHeight: "1.2vw",
              }}
            >
              <p>Default text</p>
            </div>
            <TextArea
              style={{
                width: "17.02vw",
                height: "16.1vh",
                borderRadius: "4px",
                backgroundColor: "#F0EDFF",
                borderWidth: "0vw",
                borderColor: "transparent",
                padding: ".5vw",
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
                width: "17.02vw",
                flexDirection: "row",
                display: "flex",
                marginTop: "1.85vh",
                justifyContent: "space-between",
              }}
            >
              <div style={{ paddingTop: ".5vh" }}>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1vw",
                    lineHeight: "1.2vw",
                    display: "flex",
                  }}
                >
                  Close Button
                </p>
              </div>
              <div
                style={{
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
                width: "17.02vw",
                flexDirection: "row",
                display: "flex",
                marginTop: ".92vh",
                justifyContent: "space-between",
              }}
            >
              <div style={{ paddingTop: ".5vh" }}>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1vw",
                    lineHeight: "1.2vw",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Enable Tsaaro Branding
                </p>
              </div>
              <div
                style={{
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
                width: "17.02vw",
                flexDirection: "row",
                display: "flex",
                marginTop: "1vh",
                justifyContent: "space-between",
              }}
            >
              <div style={{ paddingTop: ".5vh" }}>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1vw",
                    lineHeight: "1.2vw",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Show My Brand Logo
                </p>
              </div>
              <div
                style={{
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
                  width: "17.02vw",
                  height: "4vh",
                  borderRadius: "4px",
                  backgroundColor: "#F0EDFF",
                  borderWidth: "0vw",
                  borderColor: "transparent",
                  padding: ".5vw",
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
                width: "17.02vw",
                flexDirection: "row",
                display: "flex",
                marginTop: "1vh",
                justifyContent: "space-between",
              }}
            >
              <div style={{ paddingTop: ".5vh" }}>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "1vw",
                    lineHeight: "1.2vw",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Read More
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ cursor: "pointer" }} onClick={handleRead}>
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
                  width: "17.02vw",
                  height: "5vh",
                  borderRadius: "4px",
                  backgroundColor: "#F0EDFF",
                  borderWidth: "0vw",
                  borderColor: "transparent",
                  padding: ".5vw",
                  fontSize: "1vw",
                  lineHeight: "1.2vw",
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
