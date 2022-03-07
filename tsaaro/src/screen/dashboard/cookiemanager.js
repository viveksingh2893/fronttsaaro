import { Col, Button, Row } from "antd";
import { useState } from "react";
import "../../assets/css/cookieboard.css";
import SvgIcon from "../../assets/Icon_apps";
import CookieTypesView from "../../component/header/CookieTypesView";


const CookiemanagerScr = () => {
  const [toggle, setToggle] = useState(false);
  const [cookietype, setCookieType] = useState("Neccessary")
  const [switchcookies, setSwitch] = useState([1, 0, 0, 0, 0, 0]);

  const handletoggle = (e) => {
    console.log("toggle..........");
    window.addEventListener('click',()=>{
        
    })
    setToggle(!toggle);
  };

  const handleswitch = (id) => {
    if (id === "nc") {
      setSwitch([1, 0, 0, 0, 0, 0]);
      setCookieType('Neccessary');
    } else if (id === "fc") {
      setSwitch([0, 1, 0, 0, 0, 0]);
      setCookieType('Functional');
    } else if (id === "an") {
      setSwitch([0, 0, 1, 0, 0, 0]);
      setCookieType('Analytics');
    } else if (id === "pr") {
      setSwitch([0, 0, 0, 1, 0, 0]);
      setCookieType('Performance');
    } else if (id === "ad") {
      setSwitch([0, 0, 0, 0, 1, 0]);
      setCookieType('Advertisment');
    } else if (id === "ot") {
      setSwitch([0, 0, 0, 0, 0, 1]);
      setCookieType('Others');
    }
  };
  
  return (
    <Col
      style={{
        marginLeft: "1rem",
        height: "calc(100vh - 60px)",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Row
        style={{
          display: "flex",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Col span={12}>
          <h2 className="cm">Cookie Manager</h2>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center", 
            justifyContent: "flex-end",
          }}
        >
          <Button>Scan here</Button>
        </Col>
      </Row>
      <Row style={{ padding: "1rem" }}>
        <p>
          Scan your website for cookies and manage the discovered or
          self-declared cookies here.
        </p>
      </Row>
      <Row>
        <Col span={24} style={{ padding: "0.5rem"}}>
          <Row>
            <Col
              onClick={handletoggle}
              className="cm-toggle-col"
              style={{ backgroundColor: toggle ? "#ffffff" : "#F0EDFF" }}
              span={5}
            >
              <h3 className="cm-toggle">Cookie</h3>
            </Col>
            <Col
             onChange={handletoggle}
              onClick={handletoggle}
              className="cm-toggle-col"
              style={{ backgroundColor: toggle ? "#F0EDFF" : "#ffffff" }}
              span={5}
            >
              <h3 className="cm-toggle">Scan History</h3>
            </Col>
          </Row>
          <Row>
            <Col
              onClick={() => handleswitch("nc")}
              className="cm-toggle-col"
              style={{
                borderBottom:
                  switchcookies[0] === 1 ? "5px solid #5647AB" : "none",
              }}
              span={4}
            >
              <h4 className="cm-cookie-selection">Neccessary(1)</h4>
              
            </Col>
            <Col
              onClick={() => handleswitch("fc")}
              style={{
                borderBottom:
                  switchcookies[1] === 1 ? "5px solid #5647AB" : "none",
              }}
              className="cm-toggle-col"
              span={4}
            >
              <h4 className="cm-cookie-selection">Functional(1)</h4>
            </Col>
            <Col
              onClick={() => handleswitch("an")}
              className="cm-toggle-col"
              style={{
                borderBottom:
                  switchcookies[2] === 1 ? "5px solid #5647AB" : "none",
              }}
              span={4}
            >
              <h4 className="cm-cookie-selection">Analytics(1)</h4>
            </Col>
            <Col
              onClick={() => handleswitch("pr")}
              className="cm-toggle-col"
              style={{
                borderBottom:
                  switchcookies[3] === 1 ? "5px solid #5647AB" : "none",
              }}
              span={4}
            >
              <h4 className="cm-cookie-selection">Performance(1)</h4>
            </Col>
            <Col
              onClick={() => handleswitch("ad")}
              style={{
                borderBottom:
                  switchcookies[4] === 1 ? "5px solid #5647AB" : "none",
              }}
              className="cm-toggle-col"
              span={4}
            >
              <h4 className="cm-cookie-selection">Advertisment(1)</h4>
            </Col>
            <Col
              onClick={() => handleswitch("ot")}
              style={{
                borderBottom:
                  switchcookies[5] === 1 ? "5px solid #5647AB" : "none",
              }}
              className="cm-toggle-col"
              span={4}
            >
              <h4 className="cm-cookie-selection">Others(1)</h4>
            </Col>
          </Row>
          <CookieTypesView type={cookietype}/>
        </Col>
      </Row>
    </Col>
  );
};
export default CookiemanagerScr;
