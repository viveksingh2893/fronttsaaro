import React, { useState } from "react";
import { Radio, Input } from 'antd';
import Feature from "../../component/policy/feature";
import PrivacyConsent from "../../component/policy/privacyconsent";

const DataCollection=()=>{
    const [acc, setAcc] = useState(2);
    const [fea, setFea] = useState(2);
    const [per, setPer] = useState(2);
    const [con, setCon] = useState(2);

    const toggleAcc = e => {
        console.log('radio checked', e.target.value);
        setAcc(e.target.value);
    };
    const toggleFea = e => {
        console.log('radio checked', e.target.value);
        setFea(e.target.value);
    };
    const togglePer = e => {
        console.log('radio checked', e.target.value);
        setPer(e.target.value);
    };
    const toggleCon = e => {
        console.log('radio checked', e.target.value);
        setCon(e.target.value);
    };

    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <p className="privacy-policy-maintitle">Collection of Data</p>
                <p className="privacy-policy-content" style={{marginTop:'2vh'}}>Do you allow users to create accounts on your website?</p>
                <div style={{display:'flex',flexDirection:'row', width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={toggleAcc} value={acc}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
            <div style={{marginTop:"5vh"}}>
                <p className="privacy-policy-content">Do you provide an opt-out feature for newsletters?</p>
                <div style={{display:'flex',flexDirection:'row',width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={toggleFea} value={fea}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
                {fea===1?<Feature/>:null}
            </div>
            <div style={{marginTop:"5vh"}}>
                <p className="privacy-policy-content">Do you collect personal info?</p>
                <div style={{display:'flex',flexDirection:'row',width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={togglePer} value={per}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
                {per===1?<PrivacyConsent/>:null}
            </div>
            <div style={{marginTop:"5vh"}}>
                <p className="privacy-policy-content">Do you collect personal data with user consent?</p>
                <div style={{display:'flex',flexDirection:'row',width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={toggleCon} value={con}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
                {con===1?<Input style={{width: '33.64vw',height:'5.2vh',marginTop:'3vh'}} placeholder='Method Used'/>:null}
            </div>
            <div className="save">
                <button className="submit" style={{margin:'0vw', height:'6vh', width:'10vw'}}>Save & Proceed</button>
            </div>
        </div>
    )
}

export default DataCollection;