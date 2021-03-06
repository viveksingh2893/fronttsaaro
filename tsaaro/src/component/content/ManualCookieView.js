import React, {useState, useEffect} from "react";
import "../../assets/css/cookieboard.css";
import ManuallyAddCookieView from "./manuallyAddCookieView";

function ManualCookieView(props) {
  return (
      <div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop:"2vh",
              }}
            >
              <h4 className="ct" style={{color: '#6F6F6F'}}>Manually Added Cookies</h4>
            </div>
            <ManuallyAddCookieView 
              inactive={props.inactive}
              id="Lorem ipsum dolor sit amet, consectetur adip"
              domain='Lorem ipsum'
              duration='Lorem ipsum'
              description='Lorem ipsum'
            /> 
       </div>
  );
}

export default ManualCookieView;
