import React from "react";
import InputView from "../input/inputView";
import PlanListView from "../header/planListView";
import "../../assets/css/addsitepop.css";

function AddSitePopView({ closeSite }) {
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
        <div className="site-pop-plan-box">
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
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 7.25L9 11.75L13.5 7.25"
                stroke="#5647AB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="site-pop-plan-end">
            If you have any question or issues, please feel free to
             <a href="#" className="site-pop-a">contact us</a>,and we’ll get right back to you.
          </div>
        </div>
        <div className="site-pop-end">
            <h4 className="site-pop-h4">Price are in USD excl VAT.</h4>
            <h3 className="site-pop-h">Billing Details</h3>
            <div className="site-pop-end-inp">
                <div className="site-pop-in"><InputView name="Name"/></div>
                <div className="site-pop-in"><InputView name="Website Name"/></div>
            </div>
            <div className="site-pop-end-input">
            <div className="site-pop-in"><InputView name="Website Name"/></div>
            <button className="site-pop-end-btn">Apply</button>
            </div>
            <div className="scan-btn">
            <button onClick={() => {
          closeSite(false);
        }} className="scan-ok">Cancel</button>
        </div>
        <div className="scan-btn">
            <button onClick={() => {
          closeSite(false);
        }} className="scan-ok">Submit</button>
        </div> 
        </div>
        </div>
  );
}

export default AddSitePopView;
