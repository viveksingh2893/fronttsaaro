import React, { useState } from "react";
import InputView from "../../component/input/inputView";
import SvgIcon from "../../assets/Icon_apps";
import { Input } from "antd";

const CompanyWebsiteInfo=()=>{
    const [color,setColor] = useState(false);
    const toggle=()=>{
        setColor(!color);
    } 
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <p className="privacy-policy-maintitle">Company & Website Info</p>
            <div className="input-box">
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p className="input-label">Website URL ?</p>
                        <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                    </div>
                    <Input style={{width:'70vw',height:'5.2vh',}} placeholder={'http://www.mysite.com'}/>
                </div> 
            </div>
            <div style={{display:'flex',width:'70vw',marginTop:'2vh', flexDirection:'row', justifyContent:'space-between'}}>
                <InputView name="Company name in full" placeholder='' />
                <InputView name="Address" placeholder='' />
            </div>
            <div style={{display:'flex',width:'70vw',marginTop:'2vh', flexDirection:'row', justifyContent:'space-between'}}>
                <InputView name="Email ID" placeholder='' />
                <InputView name="Zip code/ Postal code" placeholder='' />
            </div>
            <div style={{display:'flex',width:'70vw',marginTop:'2vh', flexDirection:'row', justifyContent:'space-between'}}>
                <InputView name="Phone number" placeholder='' />
                <div className="input-box">
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <p className="input-label">Country</p>
                            <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                        </div>
                        <div className="input">
                            <form style={{cursor:'pointer'}}>
                                <select id="country" name="country" className="select" style={{width:'33.6vw', height:'5vh'}}>
                                    <option value="in">India</option>
                                    <option value="us">U.S</option>
                                    <option value="rs">Russia</option>
                                    <option value="ch">China</option>
                                </select>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
            <div style={{display:'flex',width:'70vw',marginTop:'2vh', flexDirection:'row', justifyContent:'space-between'}}>
            <div className="input-box">
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <p className="input-label">We use this website for</p>
                            <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                        </div>
                        <div className="input">
                            <form style={{cursor:'pointer'}}>
                                <select id="web" name="website" className="select" style={{width:'33.6vw', height:'5vh'}}>
                                    <option value="is">Information Sharing</option>
                                    <option value="sh">Shopping</option>
                                    <option value="ch">Charity</option>
                                    <option value="ot">Other</option>
                                </select>
                            </form>
                        </div> 
                    </div>
                </div>
                <InputView name="State/ Territory/ Province" placeholder='' />
            </div>
            <div style={{display:'flex', flexDirection:'row',alignItems:'center', width:'20vw', marginTop:'2vh'}}>
                <div onClick={toggle} className='check' style={{backgroundColor:color?'#7A4EB6':''}}/>
                <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>I agree to the <a href="#">terms and conditions</a></p>
            </div>
            <div className="save">
                <button className="submit" style={{margin:'0vw', height:'6vh', width:'10vw'}}>Save & Proceed</button>
            </div>
        </div>
    )
}

export default CompanyWebsiteInfo;