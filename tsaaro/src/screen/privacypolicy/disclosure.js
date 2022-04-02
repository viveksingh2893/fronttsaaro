import React, {useState} from "react";
import DisclosurePurpose from "../../component/policy/disclosurepurpose";
import { Radio, Input } from 'antd';
import Tps from "../../component/policy/tps";

const Disclosure=()=>{
    const [pay, setPay] = useState(2);
    const [up, setUp] = useState(2);
    const [tps, setTps] = useState(2);
    const [link, setLink] = useState(2);

    const togglePay = e => {
        console.log('radio checked', e.target.value);
        setPay(e.target.value);
    };
    const toggleUp = e => {
        console.log('radio checked', e.target.value);
        setUp(e.target.value);
    };
    const toggleTps = e => {
        console.log('radio checked', e.target.value);
        setTps(e.target.value);
    };
    const toggleLink = e => {
        console.log('radio checked', e.target.value);
        setLink(e.target.value);
    };
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <p className="privacy-policy-maintitle">Use & Disclosure of Data</p>
            <p className="privacy-policy-content" style={{marginTop:'2vh'}}>Purpose for which collected data will be used ?</p>
            <DisclosurePurpose/>
            <div style={{marginTop:"5vh"}}>
                <p className="privacy-policy-content">Do you accept payment on the website?</p>
                <div style={{display:'flex',flexDirection:'row',width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={togglePay} value={pay}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
                {pay===1?<Input style={{width: '33.64vw',height:'5.2vh',marginTop:'3vh'}} placeholder='Name of payment gateway service, e.g.,Paypal,Stripe,etc'/>:null}
            </div>
            <div style={{marginTop:"5vh"}}>
                <p className="privacy-policy-content">Are users allowed to upload?</p>
                <div style={{display:'flex',flexDirection:'row',width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={toggleUp} value={up}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
            </div>
            <div style={{marginTop:"5vh"}}>
                <p className="privacy-policy-content">Do you use any third-party service?</p>
                <div style={{display:'flex',flexDirection:'row',width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={toggleTps} value={tps}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
                {tps===1?<Tps/>:null}
            </div>
            <p className="privacy-policy-content" style={{marginTop:'5vh'}}>How long do you store the collected user data?</p>
            <div className="input">
                <form style={{cursor:'pointer'}}>
                    <select id="acc" name="account" className="select" style={{width:'33.6vw', height:'5vh'}}>
                        <option value="ter">90 days to 2 years after users terminate their accounts</option>
                        <option value="idle">90 days to 2 years after users accounts remain idle</option>
                        <option value="ot">Other</option>
                    </select>
                </form>
            </div> 
            <div style={{marginTop:"5vh"}}>
                <p className="privacy-policy-content">Do you have links to third party website/application from your website?</p>
                <div style={{display:'flex',flexDirection:'row',width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={toggleLink} value={link}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
            </div>
            <div className="save">
                <button className="submit" style={{margin:'0vw', height:'6vh', width:'10vw'}}>Save & Proceed</button>
            </div>
        </div>
    )
}

export default Disclosure;