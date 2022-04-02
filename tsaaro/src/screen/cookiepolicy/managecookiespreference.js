import React from "react";
import SvgIcon from "../../assets/Icon_apps";
import { Input, DatePicker } from "antd";

const { TextArea } = Input;

const ManageCookiesPreference=()=>{
    const onChange=(date, dateString)=>{
        console.log(date, dateString);
      }
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
            <p className="privacy-policy-maintitle">Manage Cookie Preferences</p>
            <p style={{margin:0}}>Guide your users on how to view or revoke any consent they have granted.</p>
            <div className="input-box" style={{marginTop:'5vh'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p className="input-label">Heading</p>
                        <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                    </div>
                    <Input style={{width:'70vw',height:'5.2vh',}} placeholder=''/>
                </div> 
            </div>
            <div className="input-box" style={{marginTop:'5vh'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p className="input-label">Revisit consent widget</p>
                        <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                    </div>
                    <Input style={{width:'70vw',height:'5.2vh',}} placeholder='Insert the HTML code for your Revisit consent widget'/>
                </div> 
            </div>
            <div className="input-box" style={{marginTop:'5vh'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p className="input-label">Description</p>
                        <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
                    </div>
                    <TextArea rows={8} style={{width:'70vw'}} placeholder='Insert your description'/>
                </div> 
            </div>
            <p className="privacy-policy-content" style={{marginTop:'5vh'}}>What is the effective date of your Cookie Policy?</p>
            <DatePicker onChange={onChange} style={{width:'15vw'}} format='DD/MM/YYYY'/>
            <div className="save" style={{flexDirection:'column', alignItems:'flex-end'}}>
                <button className="submit" style={{margin:'0vw', height:'6vh', width:'10vw'}}>Generate</button>
                <p style={{marginTop:'2vh'}}>By clicking 'Generate', you agree to our <a href="#">Terms and Conditions</a> & <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    )
}

export default ManageCookiesPreference;