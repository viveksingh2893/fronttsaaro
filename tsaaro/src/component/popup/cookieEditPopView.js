import React, { useState } from "react";
import { Input } from "antd";
import "../../assets/css/cookieedit.css";
import SvgIcon from "../../assets/Icon_apps";
import TextArea from "antd/lib/input/TextArea";
  
function CookieEditPopView({closeModal}) {

  return ( 
    <div className="containerpop">
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'51.3vw', marginTop:'2vh'}}>
              <h3 className="modal-h3">Edit Category</h3>
              <div onClick={() => {closeModal(false)}}>
                  <SvgIcon name='cross'/>
              </div>
        </div>
        <div style={{display:'flex',flexDirection:'row', alignItems:'flex-start', marginTop:'2vh'}}>
            <p className="name">Name</p>
            <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
        </div>
        <Input className="modal-input1" />
        <div style={{display:'flex',flexDirection:'column', marginTop:'3vh'}}>
            <div style={{display:'flex',flexDirection:'row'}}>
                <p className="name">Description</p>
                <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
            </div>
            <TextArea className="modal-input2"/>
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width:'51.3vw'}}>
            <div className="submitpop">
                  <button onClick={() => {closeModal(false)}} className="cancel">Cancel</button>
                  <button onClick={() => {closeModal(false)}} className="submit">Submit</button>
            </div>
    </div>
    </div>
  )
}

export default CookieEditPopView;
