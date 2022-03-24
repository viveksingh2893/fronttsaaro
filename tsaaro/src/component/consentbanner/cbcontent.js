import SvgIcon from "../../assets/Icon_apps";
import React, { useState } from "react";
import "../../assets/css/consentbanner.css";
import Dropmenu from "../../component/consentbanner/dropmenu";

const Cbcontent = (props) => {
  return (
    <div>
      <Dropmenu topmargin="0px" opthead="Comply With" />
      <Dropmenu topmargin="15px" opthead="Default Language" />
      <Dropmenu topmargin="15px" opthead="Cookie Notice" />
      <Dropmenu topmargin="15px" opthead="Privacy Policy" />
    </div>
  );
};

export default Cbcontent;
