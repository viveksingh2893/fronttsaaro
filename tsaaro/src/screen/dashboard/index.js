
import HeaderMenuView from '../../component/header/HeaderMenuView';
import SideMenuView from '../../component/header/SideMenuView';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import CookiemanagerScr from './cookiemanager';
import ConsentbannerScr from './consentbanner';
import CookiepolicyScr from './cookiepolicy';
import PrivacypolicyScr from './privacypolicy';
import ConsentlogScr from './consentlog';
import DashboardScr from './dashboard';
import SitesettingScr from './sitesetting';
import { Col,Row } from 'antd';
const Screen=()=>{
    return(
        <>
        <Row>
            
            <Col>
            <SideMenuView/>
            </Col>
            <Col span={18}><HeaderMenuView/>
        <Routes>
            <Route path="/dash" element={<DashboardScr/>}/>
            <Route path="/cm" element={<CookiemanagerScr/>}/>
            <Route path="/cb" element={<ConsentbannerScr/>}/>
            <Route path="/cl" element={<ConsentlogScr/>}/>
            <Route path="/cp" element={<CookiepolicyScr/>}/>
            <Route path="/pp" element={<PrivacypolicyScr/>}/>
            <Route path="/ss" element={<SitesettingScr/>}/>
        </Routes>
            </Col>
        </Row>
        
        
       
        </>

    );
}
export default Screen;