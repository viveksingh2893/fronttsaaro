import React from "react";
import SvgIcon from "../../assets/Icon_apps";
import "../../assets/css/addsitepop.css";
import AddSiteTick from "./addSiteTick";
import AddSiteCross from "./addSiteCross";


const PlanListView=(props)=> {
  return (
    <div>
      <div style={{display:'flex',flexDirection:"column", border:'1px solid #5647AB',padding:'1vw',backgroundColor: 'white' }}>
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
    </div>
  );
}

export default PlanListView;
