import React from "react";
import { UserOutlined } from "@ant-design/icons";
import "../../assets/css/header.css";
import SvgIcon from "../../assets/Icon_apps";

function HeaderMenuView() {
  return (
    <div className="cont">
      <div className="menu" onClick={()=>console.log('hello world')}>
       <SvgIcon name='burger'/>
      </div>
      <div className="input">
        <form>
          <select id="cars" name="cars" className="inp">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
      <div className="btn1">
        <a href="#" className="a2">
          + Add Site
        </a>
      </div>
      
      <div className="acc">
        
        <svg className="svg"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.15258 8.5325L0.757082 2.36525C0.120332 1.63963 0.637832 0.5 1.60421 0.5H12.3952C12.6115 0.499815 12.8232 0.561974 13.0051 0.679034C13.1869 0.796093 13.3312 0.963092 13.4206 1.16003C13.51 1.35697 13.5407 1.5755 13.5091 1.78945C13.4775 2.0034 13.3849 2.20371 13.2423 2.36638L7.84683 8.53138C7.74124 8.65221 7.61102 8.74906 7.46491 8.81542C7.3188 8.88177 7.16018 8.9161 6.99971 8.9161C6.83924 8.9161 6.68062 8.88177 6.53451 8.81542C6.3884 8.74906 6.25818 8.65221 6.15258 8.53138V8.5325Z"
            fill="#5647AB"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeaderMenuView;
