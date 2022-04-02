import React, {useState} from "react";
import InputView from "../../component/input/inputView";
import { Radio, DatePicker} from 'antd';

const Protection=()=>{
    const [office, setOffice] = useState(2);

    const toggleOffice = e => {
        console.log('radio checked', e.target.value);
        setOffice(e.target.value);
    };
    const onChange=(date, dateString)=>{
        console.log(date, dateString);
      }
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <p className="privacy-policy-maintitle">Data Protection</p>
            <p className="privacy-policy-content" style={{marginTop:'2vh'}}>Contact details for additional privacy-related queries</p>
            <div style={{display:'flex',width:'70vw', flexDirection:'row', justifyContent:'space-between'}}>
                <InputView name="Name" placeholder=''/>
                <InputView name="Mailing address" placeholder=''/>
            </div>
            <InputView name="Email address" placeholder=''/>
            <div style={{marginTop:"5vh"}}>
                <p className="privacy-policy-content">Do you have an office in the EU?</p>
                <div style={{display:'flex',flexDirection:'row',width:'20vw', justifyContent:'space-between',alignItems:'center'}}>
                    <Radio.Group onChange={toggleOffice} value={office}>
                        <Radio value={1}>Yes</Radio>
                        <Radio value={2}>No</Radio>
                    </Radio.Group>
                </div>
                {office===1?<div style={{marginTop:'2vh'}}>
                    <div style={{display:'flex',width:'70vw', flexDirection:'row', justifyContent:'space-between'}}>
                        <InputView name="Contact name" placeholder=''/>
                        <InputView name="Contact street address" placeholder=''/>
                    </div>
                    <InputView name="Contact email address" placeholder=''/>
                </div>:null}
            </div>
            <p className="privacy-policy-content" style={{marginTop:'5vh'}}>What is the effective date of this Privacy Policy?</p>
            <DatePicker onChange={onChange} style={{width:'15vw'}} format='DD/MM/YYYY'/>
            <div className="save">
                <button className="submit" style={{margin:'0vw', height:'6vh', width:'10vw'}}>Save & Proceed</button>
            </div>
        </div>
    )
}
 
export default Protection;