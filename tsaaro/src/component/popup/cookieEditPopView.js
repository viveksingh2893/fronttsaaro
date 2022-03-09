import React, { useState } from "react";
import { Button } from "antd";
import "../../assets/css/cookieedit.css";

function CookieEditPopView({closeModal}) {

  return (
    <>
     <div className="modal-head">
              <div className="modal-box1">
                <h3 className="modal-h3">Edit Category</h3>
              </div>
              <div className="modal-box2">
                <svg
                  onClick={() => {
                    closeModal(false);
                  }}
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L7 21"
                    stroke="#373737"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 7L21 21"
                    stroke="#373737"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <form>
              <label for="fname">
                Name
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.13379 6.77734L2.90039 4.35156L0.246094 3.56055L0.65918 2.24219L3.31348 3.21777L3.23438 0.194336H4.57031L4.48242 3.27051L7.10156 2.29492L7.50586 3.63965L4.80762 4.43945L6.53906 6.82129L5.44922 7.63867L3.82324 5.10742L2.23242 7.57715L1.13379 6.77734Z"
                    fill="#F51D2C"
                  />
                </svg>
              </label>
              <br />
              <input type="text" id="fname" name="fname" className="modal-input1" />
              <br />
              <label for="lname">
                Description
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.13379 6.77734L2.90039 4.35156L0.246094 3.56055L0.65918 2.24219L3.31348 3.21777L3.23438 0.194336H4.57031L4.48242 3.27051L7.10156 2.29492L7.50586 3.63965L4.80762 4.43945L6.53906 6.82129L5.44922 7.63867L3.82324 5.10742L2.23242 7.57715L1.13379 6.77734Z"
                    fill="#F51D2C"
                  />
                </svg>
              </label>
              <br />
              <input type="text" id="lname" name="lname" className="modal-input2"/>
            </form>
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
    </>
  )
}

export default CookieEditPopView;
