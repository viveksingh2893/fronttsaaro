import React, {useState, useEffect} from "react";
import "../../assets/css/cookieboard.css";
import SvgIcon from "../../assets/Icon_apps";
import ManualCookieView from "../header/ManualCookieView";
import CookieEditPopView from "../popup/cookieEditPopView";
import AddCookiePopView from "../popup/addCookiePopView";
import NoCookieView from '../content/noCookieView';
 
 
function CookieTypesView(props) {
  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState(false);

  const toggleAdd = (props) => {
    setAdd(!add);
  };
 
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div style={{marginLeft:'3vw', marginRight:'3vw', marginTop:'2vw'}}>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'1vh'}}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection:'row',
              }}
            >
              <h4 className="ct">{props.type}</h4> 
              <div onClick={toggleModal} style={{cursor:'pointer'}}><SvgIcon name='edit'/></div>
            </div>
            <div>
              <div className="input">
                <form>
                  <select id="cars" name="cars" className="language">
                    <option value="english">English</option>
                    <option value="hindi" >Hindi</option>
                    <option value="bulgarian" >Bulgarian</option>
                    <option value="catalan">Catalan</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div style={{display:'flex', width:'50vw', marginTop:'2vh'}}>
            <p className="cookie-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisi vestibulum ipsum, mauris erat gravida. Arcu, nisl, urna vel dolor in ac cras.Arcu, nisl, urna vel dolor in ac cras.
            </p>
          </div>
          
          <div style={{display: 'flex', flexDirection:'row',marginTop:'2vh', justifyContent:'space-between'}}>
            <div>
              <h3 className="ct"
              onClick={()=>console.log("Cookie List")}
              style={{ color: '#331A55',
                    textDecorationLine: 'underline'
                    }} >
                  Cookie List
                  </h3>
            </div>
            <div onClick={toggleAdd} style={{display:'flex', flexDirection:'row', cursor:'pointer'}}>
              <SvgIcon name='plus circle'/>
              <h3 className="ct"
              style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    color: '#331A55',
                    paddingLeft:'10px',
                    }} >
                  Add New Cookie
                  </h3>
            </div>
          </div>
          <ManualCookieView inactive={props.inactive}/>
          {/* <NoCookieView/> */}
      </div>
          {modal && (
            <div className="modal">
              <div className="modal-content">
                <CookieEditPopView closeModal={setModal}/>
              </div>
            </div>
          )}
          {add && (
        <div className="add-modal">
          <div className="add-content">
            <AddCookiePopView closeAdd={setAdd}/>
        </div>
        </div>
      )}
          </>
  );
}

export default CookieTypesView;
