import { Col, Button, Row } from "antd";
import { useState } from "react";
import "../../assets/css/cookieboard.css";
import SvgIcon from "../../assets/Icon_apps";
import CookieTypesView from "./cookieTypesView";


const CookieView = () => {
  const [cookietype, setCookieType] = useState("Neccessary")
  const [switchcookies, setSwitch] = useState([1, 0, 0, 0, 0, 0]);

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
    <>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div
              onClick={() => handleswitch("nc")}
              className="cm-toggle-col"
              style={{
                borderBottom:
                  switchcookies[0] === 1 ? "5px solid #5647AB" : "none",
              }}
              span={4}
            >
              <h4 className="cm-cookie-selection">Neccessary(1)</h4>
              
            </div>
            <div
              onClick={() => handleswitch("fc")}
              style={{
                borderBottom:
                  switchcookies[1] === 1 ? "5px solid #5647AB" : "none",
              }}
              className="cm-toggle-col"
              span={4}
            >
              <h4 className="cm-cookie-selection">Functional(1)</h4>
            </div>
            <div
              onClick={() => handleswitch("an")}
              className="cm-toggle-col"
              style={{
                borderBottom:
                  switchcookies[2] === 1 ? "5px solid #5647AB" : "none",
              }}
              span={4}
            >
              <h4 className="cm-cookie-selection">Analytics(1)</h4>
            </div>
            <div
              onClick={() => handleswitch("pr")}
              className="cm-toggle-col"
              style={{
                borderBottom:
                  switchcookies[3] === 1 ? "5px solid #5647AB" : "none",
              }}
              span={4}
            >
              <h4 className="cm-cookie-selection">Performance(1)</h4>
            </div>
            <div
              onClick={() => handleswitch("ad")}
              style={{
                borderBottom:
                  switchcookies[4] === 1 ? "5px solid #5647AB" : "none",
              }}
              className="cm-toggle-col"
              span={4}
            >
              <h4 className="cm-cookie-selection">Advertisment(1)</h4>
            </div>
            <div
              onClick={() => handleswitch("ot")}
              style={{
                borderBottom:
                  switchcookies[5] === 1 ? "5px solid #5647AB" : "none",
              }}
              className="cm-toggle-col"
              span={4}
            >
              <h4 className="cm-cookie-selection">Others(1)</h4>
            </div>
          </div>
          <CookieTypesView type={cookietype}/>
          </>
  );
};
export default CookieView;
