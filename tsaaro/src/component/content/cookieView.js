import { Col, Button, Row } from "antd";
import { useState } from "react";
import "../../assets/css/cookieboard.css";
import CookieTypesView from "./cookieTypesView";


const CookieView = (props) => {
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
    <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', border:'2px solid #F0EDFF', paddingTop:'2.5vh' }}>
            <div
              onClick={() => handleswitch("nc")}
              className="cm-toggle-col"
              style={{
                borderBottom:
                  switchcookies[0] === 1 ? "5px solid #5647AB" : "none",
              }}
              span={4}
            >
              <h4 className="cm-cookie-selection" style={{color:switchcookies[0]?'#5647AB':'#1E1A1A'}}>Neccessary (1Cookie)</h4>
              
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
              <h4 className="cm-cookie-selection" style={{color:switchcookies[1]?'#5647AB':'#1E1A1A'}}>Functional (1Cookie)</h4>
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
              <h4 className="cm-cookie-selection" style={{color:switchcookies[2]?'#5647AB':'#1E1A1A'}}>Analytics (1Cookie)</h4>
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
              <h4 className="cm-cookie-selection" style={{color:switchcookies[3]?'#5647AB':'#1E1A1A'}}>Performance (1Cookie)</h4>
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
              <h4 className="cm-cookie-selection" style={{color:switchcookies[4]?'#5647AB':'#1E1A1A'}}>Advertisment (1Cookie)</h4>
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
              <h4 className="cm-cookie-selection" style={{color:switchcookies[5]?'#5647AB':'#1E1A1A'}}>Others (1Cookie)</h4>
            </div>
          </div>
          <CookieTypesView type={cookietype} inactive={props.inactive}/>
          </div>
  );
};
export default CookieView;
