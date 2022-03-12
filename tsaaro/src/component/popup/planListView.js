import React, { useState } from "react";
import SvgIcon from "../../assets/Icon_apps";
import "../../assets/css/addsitepop.css";
import AddSiteTick from "./addSiteTick";
import AddSiteCross from "./addSiteCross";


const PlanListView=(props)=> {
  const [color, setColor] = useState(false);

  const toggle=()=>{
    setColor(!color)
  }


  return (
      <div onClick={toggle} className="plan-list-style" style={{backgroundColor:color?'#F0EDFF':'white'}}>
        <p className="plan-title">{props.title}</p>
        <p className="plan-subhead">{props.subhead}</p>
        <AddSiteTick/>
        <AddSiteTick/>
        <AddSiteTick/>
        <AddSiteCross/>
        <AddSiteCross/>
        <AddSiteCross/>
        <AddSiteCross/>
        <AddSiteCross/>
        <AddSiteCross/>
        <AddSiteCross/>
        <AddSiteCross/>
      </div>
  );
}

export default PlanListView;
