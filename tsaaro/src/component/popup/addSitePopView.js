import React, {useState} from "react";
import InputView from "../input/inputView";
import PlanListView from "./planListView";
import "../../assets/css/addsitepop.css";
import SvgIcon from '../../assets/Icon_apps';
import { Input } from "antd";
import Postapi from "../../api/Postapi";

function AddSitePopView({ closeSite }) { 
  const [change, setChange] = useState(false);
  const [url,setUrl] =useState()
  const [domain,setDomain] =useState()
  const [plan1, setPlan1] = useState(true);
  const [plan2, setPlan2] = useState(false);
  const [btn1 , setBtn1] = useState(true);
  const [btn2 , setBtn2] = useState(false);
  const [btn3 , setBtn3] = useState(false);

  const AddWebsite=async ()=>{
    const response=await Postapi('/auth/add_website',{url:url})
    closeSite(false)
    console.log(response)

  }

  const moneyA = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
  }
  const moneyB = () => {
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
  };
  const moneyC = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
  };

  const planA=()=>{
    setPlan1(true);
    setPlan2(false);
  }

  const planB=()=>{
    setPlan1(false);
    setPlan2(true);
  }
 
  const toggle=()=>{
    setChange(!change);
  }
console.log(url,domain)
  return (
      <div className="site-content">
        <div className="site-pop-input">
            <InputView name="URL" placeholder='example.com' onChange={(e)=>setUrl(e.target.value)}/>
            <InputView name="Website Name" placeholder='My Website'  onChange={(e)=>setDomain(e.target.value)} />
        </div>
        <div className="mid-content"> 
          <div className="site-pop-head">
            <p className="site-pop-p">Choose Your Plan</p>
            <div className="site-pop-2btn">
              <button className={"site-pop-btn"} style={{backgroundColor:plan1?'#7a4eb6':'white'}} onClick={planA}>
                <p className="plan" style={{color:plan1?'white':'#7a4eb6'}}>Monthly</p>
              </button>
              <button className={'site-pop-btn'} style={{backgroundColor:plan2?'#7a4eb6':'white'}} onClick={planB}>
                <p className="plan" style={{color:plan2?'white':'#7a4eb6'}}>Annual</p>
              </button>
            </div>
            <div className="currency">
                <button className="currency-btn1" style={{backgroundColor:btn1?'#7a4eb6':'white'}} onClick={moneyA}>
                  <p className="currency-p" style={{color:btn1?'white':'#7a4eb6'}}>
                    USD $
                  </p>
                </button>
                <button className="currency-btn2" style={{backgroundColor:btn2?'#7a4eb6':'white'}} onClick={moneyB}>
                  <p className="currency-p" style={{color:btn2?'white':'#7a4eb6'}}>
                    GBP $
                  </p>
                </button>
                <button className="currency-btn3" style={{backgroundColor:btn3?'#7a4eb6':'white'}} onClick={moneyC}>
                  <p className="currency-p" style={{color:btn3?'white':'#7a4eb6'}}>
                    EURO
                  </p>
                </button>
            </div>
          </div>
          <div className="site-pop-plan-main">
              <PlanListView title='FREE' subhead='$0 per Domain/Month'/>
              <PlanListView title='Basic' subhead='$10 per Domain/Month'/>
              <PlanListView title='Pro' subhead='$20 per Domain/Month'/>
              <PlanListView title='Ultimate' subhead='$40 per Domain/Month'/>
          </div>
          <div className="site-pop-feature" onClick={()=>console.log('clicked')}>
            <p className="features">Compare All Features</p>
            <div onClick={toggle} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                {change?<SvgIcon name="up arrow"/>:<SvgIcon name="down arrow"/>}
            </div>
          </div>
          <div className="site-pop-plan-end">
            If you have any question or issues, please feel free to
             <a href="#" className="site-pop-a">contact us</a>,and we’ll get right back to you.
          </div>
        </div>
        <div className='billing'> 
            <h4 className="site-pop-h4">Price are in USD excl VAT.</h4>
            <h3 className="site-pop-h">Billing Details</h3>
            <div className="site-pop-input">
                <InputView name="Name" placeholder='Jhon joe'/>
                <InputView name="Website Name" placeholder='My Website'/>
            </div>
            <p className="coupon">Coupon</p>
            <div className="site-pop-end-input">
              <Input style={{width:'23vw', height: '5.1vh'}} placeholder="Flat5"/>
                <button className="site-pop-end-btn">Apply</button>
            </div>
            <div className="submitpops">
                  <button onClick={() => {closeSite(false)}} className="cancel">Cancel</button>
                  <button onClick={AddWebsite} className="submit">Submit</button>
            </div>
      </div>
    </div>
  );
}

export default AddSitePopView;
