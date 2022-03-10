import React from "react";
import "../../assets/css/addsitepop.css";

function InputView(props) {
  return (
    <div className="input-box">
      <form>
        <label for="fname" className="input-label">
          {props.name}
        </label>
        <svg
        className="input-svg"
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
          <br />
        <input type="text" id="fname" name="fname" className="input-inp"/>
      </form>
    </div>
  );
}

export default InputView;
