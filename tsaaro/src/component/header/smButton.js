import React, {useState, useEffect} from "react";
import SvgIcon from "../../assets/Icon_apps";
import '../../assets/css/sidemenu.css';
 
const SmButton= (props)=>{
//   const [color, setColor] = useState(false); 

//   const toggle=()=>{
//     if(props.id === 'dsboard'){
//       props.id==='dsboard'?setColor(true):setColor(false);
//     }else if(props.id === 'cb'){
//       props.id==='cb'?setColor(true):setColor(false);
//     }else if(props.id === 'cm'){
//       props.id==='cm'?setColor(true):setColor(false);
//     }else if(props.id === 'cl'){
//       props.id==='cl'?setColor(true):setColor(false);
//     }else if(props.id === 'pp'){
//       props.id==='pp'?setColor(true):setColor(false);
//     }else if(props.id === 'cp'){
//       props.id==='cp'?setColor(true):setColor(false);
//     }else if(props.id === 'cp'){
//       props.id==='?setColor(true):setColor(false);
//     }else if(props.id === 'ss'){
//       props.id?setColor(true):setColor(false);
//   }
// }

//   console.log('color', color)

  
return(
    <div className="button">
      <div className={`${props.inactive ? "button-child2" : "button-child"}`}>
        <div style={{display:'flex', alignItems:'flex-start',width:'3vw', justifyContent:'center'}}><SvgIcon name={props.name.toLowerCase()}/></div>
        {props.inactive?null:<p className="button-para" style={{display:'flex', width:'8vw',justifyContent:'flex-start'}}>{props.name}</p>}
      </div>
    </div>  
)}
export default SmButton; 