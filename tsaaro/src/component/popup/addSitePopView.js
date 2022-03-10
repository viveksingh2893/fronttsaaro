import React, {useState} from "react";
import InputView from "../input/inputView";
import PlanListView from "../header/planListView";
import "../../assets/css/addsitepop.css";
import SvgIcon from '../../assets/Icon_apps';

function AddSitePopView({ closeSite }) { 
  const [change, setChange] = useState(false);

  const toggle=()=>{
    setChange(!change);
  }

  return (
      <div className="site-content">
        <div className="site-pop-input">
          <div className="site-pop-inp-box">
            <InputView name="URL" className="site-pop-inp" />
          </div>
          <div className="site-pop-inp-box">
            <InputView name="Website Name" className="site-pop-inp" />
          </div>
        </div>
        <div>
          <div className="site-pop-head">
            <h3 className="site-pop-h3">Choose Your Plan</h3>
            <div className="site-pop-2btn">
              <button className="site-pop-btn">Monthly</button>
              <button className="site-pop-btn">Annual</button>
            </div>
            <div className="site-pop-curve">
              <ul className="site-pop-ul">
                <li className="site-pop-li1">
                  <a href="#" className="site-pop-a1">
                    USD
                  </a>
                </li>
                <li className="site-pop-li2">
                  <a href="#" className="site-pop-a2">
                    GBP
                  </a>
                </li>
                <li className="site-pop-li3">
                  <a href="#" className="site-pop-a3">
                    EURO
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="site-pop-plan-main">
            <div className="site-pop-plan">
              <span className="site-pop-plan-type">Free</span>
              <br />
              <span className="site-pop-plan-price">$0 per Domain/Month</span>
              <PlanListView />
            </div>
            <div className="site-pop-plan">
              <span className="site-pop-plan-type">Basic</span>
              <br />
              <span className="site-pop-plan-price">
                $10 per Domain/Month
              </span>{" "}
              <PlanListView />
            </div>
            <div className="site-pop-plan">
              <span className="site-pop-plan-type">Pro</span>
              <br />
              <span className="site-pop-plan-price">
                $20 per Domain/Month
              </span>{" "}
              <PlanListView />
            </div>
            <div className="site-pop-plan">
              <span className="site-pop-plan-type">Ultimate</span>
              <br />
              <span className="site-pop-plan-price">
                $40 per Domain/Month
              </span>{" "}
              <PlanListView />
            </div>
          </div>
          <div className="site-pop-feature">
            Compare All Features
            <div onClick={toggle} style={{display:'flex',justifyContent:'center',}}>
                {change?<SvgIcon name="up arrow"/>:<SvgIcon name="down arrow"/>}
            </div>
          </div>
          <div className="site-pop-plan-end">
            If you have any question or issues, please feel free to
             <a href="#" className="site-pop-a">contact us</a>,and we’ll get right back to you.
          </div>
        </div>
        <div >
            <h4 className="site-pop-h4">Price are in USD excl VAT.</h4>
            <h3 className="site-pop-h">Billing Details</h3>
            <div className="site-pop-end-inp">
                <div><InputView name="Name"/></div>
                <div><InputView name="Website Name"/></div>
            </div>
            <div className="site-pop-end-input">
            <div><InputView name="Coupon"/></div>
            <div><button className="site-pop-end-btn">Apply</button></div>
            </div>
            <div style={{display:'flex', marginLeft:'60vw'}}>
              <div className="scan-btn">
                  <button onClick={() => {closeSite(false)}} className="scan-ok">Cancel</button>
              </div>
              <div className="scan-btn">
                  <button onClick={() => {closeSite(false)}} className="scan-ok">Submit</button>
              </div> 
            </div>
      </div>
    </div>
  );
}

export default AddSitePopView;
