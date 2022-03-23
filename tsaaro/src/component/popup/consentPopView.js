import React, { useEffect, useState } from "react";
import "../../assets/css/consentlog.css";
import { DatePicker, Select, Menu, Dropdown} from 'antd';
import SvgIcon from "../../assets/Icon_apps";
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;

const ConsentPopView=(props)=>{
  const [startDate, setStartDate]=useState();
  const [endDate, setEndDate]=useState();
  const [click, setClick] = useState('');
  const [change, setChange] = useState(false);
  const [icon, setIcon] = useState("")


  const menu =()=> (
    <Menu>
    <Menu.Item key="0" onClick={()=>console.log("30 days")} onMouseEnter={()=>setClick('day')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='day'?'white':'#ADADAD'}}>Last 30 Days</p>
    </Menu.Item>
    <Menu.Item key="1" onMouseEnter={()=>setClick('3m')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='3m'?'white':'#ADADAD'}}>Last 3 Months</p>
    </Menu.Item>
    <Menu.Item key="2" onMouseEnter={()=>setClick('6m')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='6m'?'white':'#ADADAD'}}>Last 6 Months</p>
    </Menu.Item>
    <Menu.Item key="3" onMouseEnter={()=>setClick('1y')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='1y'?'white':'#ADADAD'}}>Last 12 Months</p>
    </Menu.Item>
    <Menu.Item key="4" onMouseEnter={()=>setClick('all')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='all'?'white':'#ADADAD'}}>All Time</p>
    </Menu.Item>
    <Menu.Item key="5" onMouseEnter={()=>setClick('cu')} onMouseLeave={()=>setClick('')} className="consent-ant-menu">
      <p className="consent-pop-item" style={{color:click=='cu'?'white':'#ADADAD'}}>Custom</p>
    </Menu.Item>
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



  var yourDate = new Date();
  var numberOfDaysToAdd = 1;
  // var seconds= yourDate.setDate(yourDate.getDate() + numberOfDaysToAdd);
  var months = yourDate.setMonth(yourDate.getMonth() - 3);
  console.log(yourDate.toLocaleDateString());
  // var monthswords = new Date(months)
  // var inwords = new Date(seconds);
  // console.log(inwords, monthswords);


  return ( 
    <div className="consent-containerpop">
        <p className="consent-poptitle">Export Options</p>
        <div style={{display:'flex',alignItems:'center', flexDirection:'row', justifyContent:'space-between', width:'28vw', marginTop:'2vh'}}>
          <p className="consent-contentpop">Date Range:</p>
          <div style={{display:'flex',padding:'.2vw', borderRadius:'4px',border:'1px solid black',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'15vw'}}>
            <p className="consent-pop-dates">02/08/1993</p>
            <p className="consent-pop-dates">-</p>
            <p className="consent-pop-dates">02/08/1993</p>
            <Dropdown overlay={menu()} trigger={['click']} onClick={(e)=>{setChange(!change);e.preventDefault();}} placement="bottomRight" arrow={{ pointAtCenter: true }}>
              <div className="consent-pop-date">
                {icon}
              </div>
            </Dropdown>
          </div>
            {/* <RangePicker  size={'default'} bordered={true}/> */}
            {/* <Select style={{width:'20vw'}} defaultValue="days"> */}
              {/* <Option onClick={toggle} value="days"><DateRangePicker disabledDate={allowedRange('2020-10-01', '2021-10-01')} /></Option> */}
              {/* <Option value="3months">Last 3 Months</Option>
              <Option value="6months">Last 6 Months</Option>
              <Option value="12 months">Last 12 Months</Option>
              <Option value="all">All Time</Option> */}
              {/* <Option value="custom"><RangePicker size={'default'} placement={'topRight'} bordered={false}/></Option> */}
              
            {/* </Select> */}
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
