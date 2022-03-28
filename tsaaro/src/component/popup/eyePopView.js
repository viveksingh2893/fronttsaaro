import React, { useEffect, useState } from "react";
import '../../assets/css/eyepop.css';
import EyeDetail from "./eyeDetail";
import SvgIcon from "../../assets/Icon_apps";
import EyeContent from "./eyeContent";
import PagesScanned from "./pagesScanned";
import Postapi from "../../api/Postapi";

const EyePopView = (props)=>{
    const [sdata,scanData]=useState([])
    const [nec,setNec]=useState([])
    const [others,setOthers]=useState([])
    const [fun,setFun]=useState([])
    const [analytics,setAnalytics]=useState([])
    const [advertisment,setAdv]=useState([])
    useEffect(()=>{
        getData()

    },[])
    const getData=async ()=>{
        console.log(props.id)

        const result=await Postapi("/auth/scanhistoryid",{id:props.id})
        // console.log(result);
        scanData(result.data)
        setOthers(result.data.cookies.filter(ele=>ele.cookie_category==='others'));
        setNec(result.data.cookies.filter(ele=>ele.cookie_category==='necessary'));
        setFun(result.data.cookies.filter(ele=>ele.cookie_category==='functional'));
        setAnalytics(result.data.cookies.filter(ele=>ele.cookie_category==='analytics'));
        setAnalytics(result.data.cookies.filter(ele=>ele.cookie_category==='advertisment'))
  

    }
    if(sdata){
        return(
            <div className="eye-container ">
            <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',width:'74vw', flexDirection:'row'}}>
                <p className="eye-title">Scan date : {props.date}</p>
                <div style={{display:'flex', alignItems:'center',justifyContent:'center',cursor:'pointer'}} onClick={()=>{props.closeEye(false)}}>
                    <SvgIcon name='cross' />
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',marginTop:'5vh'}}>
                <EyeDetail name='cookie' number={sdata.total_cookie} title='Total Cookies'/>
                <EyeDetail name='script' number={sdata.total_script} title='Total Scripts'/>
                <EyeDetail name='categories' number={sdata.total_category} title='All Categories'/>
                <EyeDetail name='scan' number={sdata.pages_scanned} title='Total pages'/>
            </div>
            <p className="eye-title" style={{marginTop:'7vh'}}>Cookies</p>
            <div style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                {nec.length>0?<EyeContent category='Necessary' data={nec}/>:null}
                {fun.length>0?<EyeContent category='Functional' data={fun}/>:null}
                {analytics.length>0?<EyeContent category='Analytics' data={analytics}/>:null}
                {advertisment.length>0?<EyeContent category='Advertisment' data={advertisment}/>:null}
                {others.length>0?<EyeContent category='Others' data={others} />:null}
            </div>
            <p className="eye-title" style={{marginTop:'7vh'}}>pages scanned</p>
            <div style={{display:'flex',border:'1px solid #ADADAD',flexDirection:'column',backgroundColor:'white',marginTop:'5vh',alignItems:'center',justifyContent:'center',width:'74vw', padding:'2vw'}}>
                <div style={{display:'flex', flexDirection:'row', alignItems:'flex-start',justifyContent:'space-between', width:'65vw'}}>
                    <p className="eye-text-title">urls</p>
                    <p className="eye-text-title">cookies</p>
                </div>
               {sdata.url_scanned?sdata.url_scanned.map((value,index)=>{
                   return (
                    <PagesScanned key={value.id} url={value.webpage_url} cookie={value.cookie_count}/>

                   )
               }) :null}
               
            </div>
        </div>
        )
    }else{
        return(
<></>
            )

    }
    
}

export default EyePopView;