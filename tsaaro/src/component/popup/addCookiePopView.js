import React ,{useState} from 'react'
import { Button } from "antd";
import '../../assets/css/cookiepop.css';


function AddCookiePopView({closeAdd}) {
  return ( 
    <>
            <div className="add-head">
              <div>
                <h3 className="add-h3">New Cookie</h3>
              </div>
              <div className="add-box2">
                <svg
                  onClick={() => {
                    closeAdd(false);
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

            <div className="add-form">
              <div className="add-id">
                <form>
                  <label for="fname">
                    Cookie ID
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

                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="add-input1"
                  />
                </form>
              </div>
              <div className="add-domain">
                <form>
                  <label for="fname">
                    Domain
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
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="add-input1"
                  />
                </form>
              </div>
            </div>

            <form>
              <label for="fname">
                Duration
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
              <input
                type="text"
                id="fname"
                name="fname"
                className="add-input1"
              />
            </form>

            <form>
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
              <input
                type="text"
                id="lname"
                name="lname"
                className="add-input2"
              />
            </form>
            <div className="add-box3">
              <div className="add-text">
                Show Advance Option
                <svg
                  className="add-down"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 11.75L9 7.25L13.5 11.75"
                    stroke="#5647AB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="add-extra">
              <div className="add-text1">
                <span className="add-span">Script URL Pattern</span>

                <svg
                  width="1.3vw"
                  height="1.3vw"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0026 25.6666C20.4459 25.6666 25.6693 20.4432 25.6693 13.9999C25.6693 7.5566 20.4459 2.33325 14.0026 2.33325C7.55928 2.33325 2.33594 7.5566 2.33594 13.9999C2.33594 20.4432 7.55928 25.6666 14.0026 25.6666Z"
                    stroke="#ADADAD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6016 10.4999C10.8759 9.72021 11.4172 9.06272 12.1298 8.64392C12.8424 8.22512 13.6803 8.07203 14.4949 8.21176C15.3096 8.3515 16.0485 8.77504 16.5808 9.40738C17.1131 10.0397 17.4045 10.84 17.4032 11.6666C17.4032 13.9999 13.9032 15.1666 13.9032 15.1666"
                    stroke="#ADADAD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 19.8333H14.0117"
                    stroke="#ADADAD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="add-text2">
                URL pattern for blocking the third-party script setting this
                cookie
              </div>
              <div className="add-alert">
                <div className="add-alert-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  facilisi vestibulum ipsum, mauris erat gravida. Arcu, nisl,
                  urna vel dolor in ac cras.Arcu, nisl, urna vel dolor in ac
                  cras.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="add-close">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#373737"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#373737"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="add-extra-input">
                <form>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    className="add-input3"
                  />
                </form>
              </div>

              <div className="add-button">
                <Button
                  type="primary"
                  ghost
                  onClick={() => {
                    closeAdd(false);
                  }}
                  className="close-add1"
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    closeAdd(false);
                  }}
                  className="close-add2"
                >
                  Submit
                </Button>
              </div>
            </div>
            </>
  )
}

export default AddCookiePopView;