import React from "react";
import '../../assets/css/eyepop.css';
import EyeDetail from "./eyeDetail";
import SvgIcon from "../../assets/Icon_apps";
import EyeContent from "./eyeContent";
import PagesScanned from "./pagesScanned";

const EyePopView = (props)=>{
    return(
        <div className="eye-container ">
            <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',width:'74vw', flexDirection:'row'}}>
                <p className="eye-title">Scan date : 15/03/2022</p>
                <div style={{display:'flex', alignItems:'center',justifyContent:'center',cursor:'pointer'}} onClick={()=>{props.closeEye(false)}}>
                    <SvgIcon name='cross' />
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',marginTop:'5vh'}}>
                <EyeDetail name='cookie' number='6' title='Total Cookies'/>
                <EyeDetail name='script' number='4' title='Total Scripts'/>
                <EyeDetail name='categories' number='3' title='All Categories'/>
                <EyeDetail name='scan' number='4' title='Total pages'/>
            </div>
            <p className="eye-title" style={{marginTop:'7vh'}}>Cookies</p>
            <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                <EyeContent category='Necessary'/>
                <EyeContent category='Analytics'/>
            </div>
            <p className="eye-title" style={{marginTop:'7vh'}}>pages scanned</p>
            <div style={{display:'flex',border:'1px solid #ADADAD',flexDirection:'column',backgroundColor:'white',marginTop:'5vh',alignItems:'center',justifyContent:'center',width:'74vw', padding:'2vw'}}>
                <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start',justifyContent:'space-between', width:'65vw'}}>
                    <p className="eye-text-title">urls</p>
                    <p className="eye-text-title">cookies</p>
                </div>
                <PagesScanned url='http://www.destratum.com' cookie='6'/>
                <PagesScanned url='http://www.destratum.com/blockchain.html' cookie='4'/>
            </div>
        </div>
    )
}

export default EyePopView;