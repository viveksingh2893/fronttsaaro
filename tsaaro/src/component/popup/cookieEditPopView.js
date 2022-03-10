import React, { useState } from "react";
import { Button } from "antd";
import "../../assets/css/cookieedit.css";
import SvgIcon from "../../assets/Icon_apps";

function CookieEditPopView({closeModal}) {

  return (
    <>
     <div className="modal-head">
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <h3 className="modal-h3">Edit Category</h3>
              <div className="modal-box2" onClick={() => {closeModal(false)}}>
                  <SvgIcon name='cross'/>
              </div>
        </div>

        <div style={{display:'flex',flexDirection:'column', marginTop:'2vh'}}>
          <div style={{display:'flex',flexDirection:'row'}}>
            <p>Name</p>
          <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
          </div>
          <input type="text" className="modal-input1" />
          <div style={{display:'flex',flexDirection:'column', marginTop:'5vh'}}>
              <div style={{display:'flex',flexDirection:'row'}}>
                <p>Description</p>
              <div style={{display:'flex', justifyContent:'flex-start'}}><SvgIcon name='asterisk'/></div>
          </div>
              <input type="text" className="modal-input2"/>
            </div>
            </div>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <Button
              type="primary"
              ghost
              onClick={() => {
                closeModal(false);
              }}
              className="close-modal1"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                closeModal(false);
              }}
              className="close-modal2"
            >
              Submit
            </Button> 
            </div>
    </>
  )
}

export default CookieEditPopView;
