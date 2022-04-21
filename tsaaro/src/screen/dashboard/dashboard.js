import DashboardTck from "../../component/dashboard/dashticket";
import SvgIcon from "../../assets/Icon_apps";
import { useState } from "react";
import '../../assets/css/dashboard.css';
import DashPieChart from "../../component/dashboard/dashPieChart";
import DashboardLogView from "../../component/dashboard/dashboardLogView";
import ScanAgainPop from "../../component/popup/scanAgainPopView";
import Postapi from "../../api/Postapi";
import {useSelector} from 'react-redux';


const DashboardScr = () => {
  const [activate, setActivate]=useState(false);
  const [accept, setAccept] = useState(true);
  const [scan, setScan] = useState(false);
  const [message,setMessage]=useState();
  const [scantitle,setTitle]=useState(); 
  const selector=useSelector(state=>state.ChangeSite)
  console.log("selector......",selector)

  const toggle=()=>{
    setActivate(true);
  }

  const toggleScan =async () => {
    const response=await Postapi('/auth/scanner',{email:'c@a.com',website:selector.websiteData});
    console.log('response........',response.status);
    if(response.status){
      if(response.status===401){
        setMessage('Message set........')
        setTitle('......Scan')
      }else{
      console.log('scanning..........')
      setMessage(response.data.msg +'............')
        setTitle('Status')
    }
    setScan(!scan);
  }};

  return (
    <div className="dashboard-maincontainer">
      <div
        style={{
          display: "flex",
          marginTop:'5vh',
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection:'row',
        }}
      >
        <div style={{display:'flex', width:'20vw', flexDirection:'row',alignItems:'center', justifyContent:'flex-start', height:'2vw'}}>
            {activate?
            <>
            <SvgIcon name="check circle"/>
            <p className="dashboard-banner-active">Banner Active</p>
            </>
            :<>
            <SvgIcon name="red cross encircle"/>
            <p className="dashboard-headtext">Banner not Active</p>
            <p className="dashboard-activate-banner" onClick={toggle}>Activate Banner</p>
            </>}
        </div>
        <div className="dashboard-last-cookie-scan">
          <p style={{margin:0}}>Last Cookie Scan :</p>
          <p style={{margin:0, marginLeft:'.5vw'}}>14-02-2022, 08:02:22</p>
        </div>
        <div className="dashboard-scan-website" onClick={toggleScan}>
          <p style={{margin:0}}>Scan Website  for Cookies</p>
        </div>
      </div>
    <div style={{display:'flex', flexDirection:'row',flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:'2vh'}}> 
          <div style={{display:'flex', flexDirection:'column'}}>
            <DashboardTck 
              name="cookie" 
              number="2000" 
              total="Total Cookies" 
            />
            <DashboardTck 
              name="script" 
              number="2000" 
              total="Total Scripts" 
            />
          </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <DashboardTck
              name="categories" 
              number="2000"
              total="Total Categories"
            />
            <DashboardTck 
              name="scan" 
              number="2000" 
              total="Pages Scanned" 
            />
        </div>
        <DashPieChart
          accepted='35'
          partially_accepted='35'
          rejected='10'
        />
      </div>
    <p className="dashboard-loghead">Recent Logs</p>
    <div style={{display:'flex',marginTop:'2vh', flexDirection:'column',padding:'2vw', backgroundColor:'white', borderRadius:'4px',boxShadow:'0px 0.5px 4px rgba(0, 0, 0, 0.2)'}}>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
            <p className="dashboard-title">IP Address</p>
            <p className="dashboard-title">Country</p>
            <p className="dashboard-title">Consent Status</p>
            <p className="dashboard-title">Date/Time (UTC ± 00.00)</p>
        </div>
        <DashboardLogView  
            accept={accept}
            ip='49.26.451.0'
            country='India'
            status={accept?'Accepted':'Rejected'}
            time='14-02-2022, 08:02:22'
            nc='Yes'
            fc='No'
            an='No'
            pr='Yes'
            ad='Yes'
        />
        <DashboardLogView  
            accept={accept}
            ip='49.26.451.0'
            country='India'
            status={accept?'Accepted':'Rejected'}
            time='14-02-2022, 08:02:22'
            nc='Yes'
            fc='Yes'
            an='Yes'
            pr='No'
            ad='No'
        />
      </div>
      {scan && (<ScanAgainPop title={scantitle} message={message} closeScan={setScan}/>)}
    </div> 
  );
};

export default DashboardScr;
