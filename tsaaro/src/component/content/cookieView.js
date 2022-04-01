import { Col, Button, Row } from "antd";
import { useEffect, useState } from "react";
import Postapi from "../../api/Postapi";
import "../../assets/css/cookieboard.css";
import CookieTypesView from "./CookieTypesView";

const CookieView = (props) => {
  const [cookietype, setCookieType] = useState("Neccessary");
  const [switchcookies, setSwitch] = useState([1, 0, 0, 0, 0, 0]);
  const [nec,setNec]=useState([])
    const [others,setOthers]=useState([])
    const [fun,setFun]=useState([])
    const [analytics,setAnalytics]=useState([])
    const [advertisment,setAdv]=useState([])
  

  useEffect(()=>{
    filterData()

  },[])

  const filterData= ()=>{ 
    console.log('scandata.....',props.scandata)
   

    // const result=await Postapi("/auth/scandata",{email:"c@a.com",website:"http://netflix.com/in"})
    // // console.log(result);
    // if (result){
        if(props.scandata){
    //         // scanData(result.data)
            setOthers(props.scandata.filter(ele=>ele.cookie_category==='others'));
            setNec(props.scandata.filter(ele=>ele.cookie_category==='necessary'));
            setFun(props.scandata.filter(ele=>ele.cookie_category==='functional'));
            setAnalytics(props.scandata.filter(ele=>ele.cookie_category==='analytics'));
            setAdv(props.scandata.filter(ele=>ele.cookie_category==='advertisment'))
      

        }
    }
  



  const handleswitch = (id) => {
    if (id === "nc") {
      setSwitch([1, 0, 0, 0, 0]);
      setCookieType("Neccessary");
    } else if (id === "fc") {
      setSwitch([0, 1, 0, 0, 0]);
      setCookieType("Functional");
    } else if (id === "an") {
      setSwitch([0, 0, 1, 0, 0]);
      setCookieType("Analytics");
    } else if (id === "ad") {
      setSwitch([0, 0, 0, 1, 0]);
      setCookieType("Advertisement");
    } else if (id === "ot") {
      setSwitch([0, 0, 0, 0, 1]);
      setCookieType("Others");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          borderTop: "2px solid #F0EDFF",
          borderBottom: "2px solid #F0EDFF",
          paddingTop: "2.5vh",
        }}
      >
        <div
          onClick={() => handleswitch("nc")}
          className="cm-toggle-col"
          style={{
            borderBottom: switchcookies[0] === 1 ? "5px solid #5647AB" : "none",
          }}
        >
          <h4
            className="cm-cookie-selection"
            style={{ color: switchcookies[0] ? "#5647AB" : "#1E1A1A" }}
          >
            Neccessary ({nec.length})
          </h4>
        </div>
        <div
          onClick={() => handleswitch("fc")}
          style={{
            borderBottom: switchcookies[1] === 1 ? "5px solid #5647AB" : "none",
          }}
          className="cm-toggle-col"
        >
          <h4
            className="cm-cookie-selection"
            style={{ color: switchcookies[1] ? "#5647AB" : "#1E1A1A" }}
          >
            Functional ({fun.length})
          </h4>
        </div>
        <div
          onClick={() => handleswitch("an")}
          className="cm-toggle-col"
          style={{
            borderBottom: switchcookies[2] === 1 ? "5px solid #5647AB" : "none",
          }}
        >
          <h4
            className="cm-cookie-selection"
            style={{ color: switchcookies[2] ? "#5647AB" : "#1E1A1A" }}
          >
            Analytics ({analytics.length})
          </h4>
        </div>
        <div
          onClick={() => handleswitch("ad")}
          className="cm-toggle-col"
          style={{
            borderBottom: switchcookies[3] === 1 ? "5px solid #5647AB" : "none",
          }}
          span={4}
        >
          <h4
            className="cm-cookie-selection"
            style={{ color: switchcookies[3] ? "#5647AB" : "#1E1A1A" }}
          >
            Advertisement ({advertisment.length})
          </h4>
        </div>
        <div
          onClick={() => handleswitch("ot")}
          style={{
            borderBottom: switchcookies[4] === 1 ? "5px solid #5647AB" : "none",
          }}
          className="cm-toggle-col"
          span={4}
        >
          <h4
            className="cm-cookie-selection"
            style={{ color: switchcookies[4] ? "#5647AB" : "#1E1A1A" }}
          >
            Others ({others.length})
          </h4>
        </div>
      </div>
      <CookieTypesView type={cookietype} inactive={props.inactive} />
    </div>
  );
};

export default CookieView;
