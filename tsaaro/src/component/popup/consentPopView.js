import React, { useEffect, useState } from "react";
import "../../assets/css/consentlog.css";
import {Menu, Dropdown} from 'antd';
import SvgIcon from "../../assets/Icon_apps";
import moment from 'moment';

const ConsentPopView=(props)=>{
  const [startDate, setStartDate]=useState('dd/mm/yyyy');
  const [endDate, setEndDate]=useState('dd/mm/yyyy');
  const [click, setClick] = useState('');
  const [change, setChange] = useState(false);
  const [icon, setIcon] = useState("")

  const thirtyDays=()=>{
    var startingDate = new Date();
    var endingDate = new Date();
    startingDate.setDate(startingDate.getDate() - 30);
    setStartDate(moment(startingDate).format("DD/MM/YYYY"));
    setEndDate(moment(endingDate).format("DD/MM/YYYY"));
  }

  const threeMonths=()=>{
    var startingMonth = new Date();
    var endingMonth = new Date();
    startingMonth.setMonth(startingMonth.getMonth() - 3);
    setStartDate(moment(startingMonth).format("DD/MM/YYYY"));
    setEndDate(moment(endingMonth).format("DD/MM/YYYY"));
  }

  const sixMonths=()=>{
    var startingMonth = new Date();
    var endingMonth = new Date();
    startingMonth.setMonth(startingMonth.getMonth() - 6);
    setStartDate(moment(startingMonth).format("DD/MM/YYYY"));
    setEndDate(moment(endingMonth).format("DD/MM/YYYY"));
  }

  const twelveMonths=()=>{
    var startingMonth = new Date();
    var endingMonth = new Date();
    startingMonth.setMonth(startingMonth.getMonth() - 12);
    setStartDate(moment(startingMonth).format("DD/MM/YYYY"));
    setEndDate(moment(endingMonth).format("DD/MM/YYYY"));
  }

  // var yourDate = new Date();    
  // var months = yourDate.setMonth(yourDate.getMonth() - 3);
  // console.log(yourDate.toLocaleDateString());


  const menu =()=> (
    <Menu>
    <Menu.Item key="0" onClick={thirtyDays} onMouseEnter={()=>setClick('day')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='day'?'white':'#ADADAD'}}>Last 30 Days</p>
    </Menu.Item>
    <Menu.Item key="1" onClick={threeMonths} onMouseEnter={()=>setClick('3m')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='3m'?'white':'#ADADAD'}}>Last 3 Months</p>
    </Menu.Item>
    <Menu.Item key="2" onClick={sixMonths} onMouseEnter={()=>setClick('6m')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='6m'?'white':'#ADADAD'}}>Last 6 Months</p>
    </Menu.Item>
    <Menu.Item key="3" onClick={twelveMonths} onMouseEnter={()=>setClick('1y')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='1y'?'white':'#ADADAD'}}>Last 12 Months</p>
    </Menu.Item>
    {/* <Menu.Item key="4" onClick={()=>console.log("all")} onMouseEnter={()=>setClick('all')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='all'?'white':'#ADADAD'}}>All Time</p>
    </Menu.Item>
    <Menu.Item key="5" onClick={()=>console.log("cu")} onMouseEnter={()=>setClick('cu')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='cu'?'white':'#ADADAD'}}>Custom</p>
    </Menu.Item> */}
  </Menu>
    );
 
  const toggle =()=>{
    if (change===false){
      setIcon(<SvgIcon name='up arrow'/>)
    } else if(change===true){
      setIcon(<SvgIcon name='down arrow'/>) 
    }
  }
  useEffect(()=>{
    toggle()
  },[change])


  return ( 
    <div className="consent-containerpop">
        <p className="consent-poptitle">Export Options</p>
        <div style={{display:'flex',alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'28vw', marginTop:'2vh'}}>
          <p className="consent-contentpop">Date Range:</p>
          <div style={{display:'flex',padding:'.2vw', borderRadius:'4px',border:'1px solid black',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'15vw'}}>
            <p className="consent-pop-dates">{startDate}</p>
            <p className="consent-pop-dates">-</p>
            <p className="consent-pop-dates">{endDate}</p>
            <Dropdown overlay={menu()} trigger={['click']} onClick={(e)=>{setChange(!change);e.preventDefault();}} placement="bottomRight" arrow={{ pointAtCenter: true }}>
              <div className="consent-pop-date">
                {icon}
              </div>
            </Dropdown>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width:'28vw', marginTop:'3vh'}}>
            <div className="consent-submitpop">
                <button onClick={()=>{props.closeScan(false)}} className="consent-cancel">Cancel</button>
                <button onClick={()=>{props.closeScan(false)}} className="consent-submit">Export as CSV</button>
            </div>
    </div>
    </div>
  )
}

export default ConsentPopView;
