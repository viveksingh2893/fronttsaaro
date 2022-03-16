function SvgIcon(props) {
  if (props.name === "dashboard") {
    return (
      <svg
        width="1.8vw"
        height="1.8vw"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3125 5.46875H7.65625C5.24 5.46875 3.28125 7.42749 3.28125 9.84375V17.5H15.3125V5.46875Z"
          fill="#325FFF"
        />
        <path
          d="M3.28125 19.6875V27.3438C3.28125 29.76 5.24 31.7188 7.65625 31.7188H15.3125V19.6875H3.28125Z"
          fill="#325FFF"
        />
        <path
          d="M17.5 31.7188V19.6875H29.5312V27.3438C29.5312 29.76 27.5725 31.7188 25.1562 31.7188H17.5Z"
          fill="#325FFF"
        />
        <path
          d="M19.6875 3.28125H27.3438C29.76 3.28125 31.7188 5.24 31.7188 7.65625V15.3125H19.6875V3.28125Z"
          fill="#FFA621"
        />
        <path
          d="M7.65625 8.75C7.65625 6.93782 9.12532 5.46875 10.9375 5.46875H26.25C28.0622 5.46875 29.5312 6.93782 29.5312 8.75V24.0625C29.5312 25.8747 28.0622 27.3438 26.25 27.3438H10.9375C9.12532 27.3438 7.65625 25.8747 7.65625 24.0625V8.75Z"
          fill="url(#paint0_linear_255_16825)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_255_16825"
            x1="18.5938"
            y1="5.46875"
            x2="18.5938"
            y2="27.3438"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (props.name === "consent banner") {
    return (
      <svg
        width="1.8vw"
        height="1.8vw"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.28125 11.0938C3.28125 6.77902 5.24 3.28125 7.65625 3.28125H27.3438C29.76 3.28125 31.7188 6.77902 31.7188 11.0938V26.7188C31.7188 28.8761 30.7394 30.625 29.5312 30.625H5.46875C4.26063 30.625 3.28125 28.8761 3.28125 26.7188V11.0938Z"
          fill="#325FFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.3438 14.2188C29.76 14.2188 31.7188 12.26 31.7188 9.84375V5.46875C31.7188 4.26065 30.7394 3.28125 29.5312 3.28125H5.46875C4.26063 3.28125 3.28125 4.26065 3.28125 5.46875V9.84375C3.28125 12.26 5.24 14.2188 7.65625 14.2188H27.3438ZM7.65625 6.5625C7.65625 7.16658 7.16658 7.65625 6.5625 7.65625C5.95842 7.65625 5.46875 7.16658 5.46875 6.5625C5.46875 5.95842 5.95842 5.46875 6.5625 5.46875C7.16658 5.46875 7.65625 5.95842 7.65625 6.5625ZM7.65625 10.9375C7.65625 11.5416 7.16658 12.0312 6.5625 12.0312C5.95842 12.0312 5.46875 11.5416 5.46875 10.9375C5.46875 10.3334 5.95842 9.84375 6.5625 9.84375C7.16658 9.84375 7.65625 10.3334 7.65625 10.9375ZM15.3125 7.65625C15.9166 7.65625 16.4062 7.16658 16.4062 6.5625C16.4062 5.95842 15.9166 5.46875 15.3125 5.46875C14.7084 5.46875 14.2188 5.95842 14.2188 6.5625C14.2188 7.16658 14.7084 7.65625 15.3125 7.65625ZM25.1562 10.9375C25.1562 11.5416 24.6666 12.0312 24.0625 12.0312C23.4584 12.0312 22.9688 11.5416 22.9688 10.9375C22.9688 10.3334 23.4584 9.84375 24.0625 9.84375C24.6666 9.84375 25.1562 10.3334 25.1562 10.9375ZM24.0625 7.65625C24.6666 7.65625 25.1562 7.16658 25.1562 6.5625C25.1562 5.95842 24.6666 5.46875 24.0625 5.46875C23.4584 5.46875 22.9688 5.95842 22.9688 6.5625C22.9688 7.16658 23.4584 7.65625 24.0625 7.65625ZM12.0312 10.9375C12.0312 11.5416 11.5416 12.0312 10.9375 12.0312C10.3334 12.0312 9.84375 11.5416 9.84375 10.9375C9.84375 10.3334 10.3334 9.84375 10.9375 9.84375C11.5416 9.84375 12.0312 10.3334 12.0312 10.9375ZM10.9375 7.65625C11.5416 7.65625 12.0312 7.16658 12.0312 6.5625C12.0312 5.95842 11.5416 5.46875 10.9375 5.46875C10.3334 5.46875 9.84375 5.95842 9.84375 6.5625C9.84375 7.16658 10.3334 7.65625 10.9375 7.65625ZM20.7812 6.5625C20.7812 7.16658 20.2916 7.65625 19.6875 7.65625C19.0834 7.65625 18.5938 7.16658 18.5938 6.5625C18.5938 5.95842 19.0834 5.46875 19.6875 5.46875C20.2916 5.46875 20.7812 5.95842 20.7812 6.5625ZM28.4375 12.0312C29.0416 12.0312 29.5312 11.5416 29.5312 10.9375C29.5312 10.3334 29.0416 9.84375 28.4375 9.84375C27.8334 9.84375 27.3438 10.3334 27.3438 10.9375C27.3438 11.5416 27.8334 12.0312 28.4375 12.0312ZM29.5312 6.5625C29.5312 7.16658 29.0416 7.65625 28.4375 7.65625C27.8334 7.65625 27.3438 7.16658 27.3438 6.5625C27.3438 5.95842 27.8334 5.46875 28.4375 5.46875C29.0416 5.46875 29.5312 5.95842 29.5312 6.5625ZM15.3125 9.84375C14.7084 9.84375 14.2188 10.3334 14.2188 10.9375C14.2188 11.5416 14.7084 12.0312 15.3125 12.0312H19.6875C20.2916 12.0312 20.7812 11.5416 20.7812 10.9375C20.7812 10.3334 20.2916 9.84375 19.6875 9.84375H15.3125Z"
          fill="#FFA621"
        />
        <path
          d="M5.46875 8.75C5.46875 6.93782 6.93782 5.46875 8.75 5.46875H26.25C28.0622 5.46875 29.5312 6.93782 29.5312 8.75V24.0625C29.5312 25.8747 28.0622 27.3438 26.25 27.3438H8.75C6.93782 27.3438 5.46875 25.8747 5.46875 24.0625V8.75Z"
          fill="url(#paint0_linear_257_16981)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_257_16981"
            x1="17.5"
            y1="5.46875"
            x2="17.5"
            y2="27.3438"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (props.name === "cookie manager") {
    return (
      <svg
        width="1.8vw"
        height="1.8vw"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8994 4.06053C16.0724 3.93387 16.8143 5.05496 16.5206 6.19761C16.3279 6.94736 16.1575 7.66458 16.1434 7.90591C15.9447 11.3144 16.5276 11.8487 18.0426 13.6555C19.6494 15.5718 23.1593 16.3146 25.6376 16.5312C26.3467 16.5932 27.1946 16.4728 27.9764 16.2984C29.233 16.0183 30.5524 16.7929 30.6197 18.0785C30.6899 19.4175 30.6822 21.0406 30.3855 22.2808C29.8018 24.721 29.1955 26.1595 27.5368 28.0303C25.5433 30.2788 23.7801 31.0919 20.8898 31.8633C18.0217 32.6288 16.1612 32.6288 13.2931 31.8633C10.4027 31.0919 8.76016 30.1637 6.64608 28.0303C4.53201 25.8969 3.61217 24.2393 2.84777 21.3225C2.08927 18.4282 1.93254 16.5042 2.84777 13.6564C3.51485 11.5808 4.24197 10.4798 5.6965 8.86516C7.49531 6.86839 8.95903 6.14767 11.394 5.03213C12.708 4.43013 13.9281 4.16543 14.8994 4.06053Z"
          fill="#4971FE"
        />
        <ellipse
          cx="11.8594"
          cy="10.6404"
          rx="1.64063"
          ry="1.64062"
          fill="white"
        />
        <ellipse
          cx="7.11719"
          cy="15.8594"
          rx="1.64063"
          ry="1.64063"
          fill="white"
        />
        <ellipse
          cx="16.5859"
          cy="17.3669"
          rx="1.36719"
          ry="1.36719"
          fill="white"
        />
        <ellipse
          cx="9.92187"
          cy="21.9138"
          rx="1.91406"
          ry="1.91406"
          fill="white"
        />
        <circle cx="16.1328" cy="25.9138" r="1.91406" fill="white" />
        <circle cx="24.0625" cy="22.4221" r="1.64062" fill="white" />
        <path
          d="M17.7639 9.81222C17.5617 8.66549 17.3015 8.17864 17.4629 7.02474C17.5815 6.17705 17.8243 5.17693 17.9732 4.60378C18.0502 4.30772 18.2629 4.06845 18.5487 3.95953C19.2189 3.70418 20.4911 3.25324 21.3383 3.16231C22.4264 3.04552 24.0728 3.36273 24.3609 3.4209C24.3904 3.42686 24.4179 3.43394 24.4466 3.44307C24.7468 3.53854 26.5871 4.14111 27.598 4.87732C28.7524 5.71809 29.573 6.36128 30.3176 7.56909C30.9544 8.60213 30.9313 8.98045 31.2032 10.1594C31.4039 11.0294 31.4904 12.1144 31.5267 12.7832C31.5473 13.1635 31.3376 13.5146 30.9933 13.6774C30.4074 13.9545 29.4599 14.3751 28.6429 14.6114C27.5047 14.9406 27.0258 14.8946 25.8242 15.0236C24.857 15.1275 24.3554 15.271 23.332 15.0236C22.3086 14.7763 21.5589 14.5386 20.6759 13.9748C19.9049 13.4825 19.4905 13.1204 18.9843 12.3662C18.3867 11.4759 17.9495 10.8642 17.7639 9.81222Z"
          fill="#FFA621"
        />
        <circle cx="24.0625" cy="6.56274" r="1.09375" fill="white" />
        <circle cx="28.4375" cy="9.84399" r="1.09375" fill="white" />
        <circle cx="25.1562" cy="11.4846" r="1.09375" fill="white" />
        <ellipse
          cx="21.3281"
          cy="9.29712"
          rx="1.09375"
          ry="1.09375"
          fill="white"
        />
        <path
          d="M10.2603 8.60611C15.3774 4.95767 22.4928 6.16164 26.1531 11.2953C29.8133 16.429 28.6324 23.5482 23.5153 27.1967C18.3982 30.8451 11.2828 29.6411 7.62253 24.5075C3.96227 19.3738 5.14326 12.2545 10.2603 8.60611Z"
          fill="url(#paint0_linear_257_16985)"
          fill-opacity="0.6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_257_16985"
            x1="7.62253"
            y1="24.5075"
            x2="26.1531"
            y2="11.2953"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (props.name === "consent log") {
    return (
      <svg
        width="1.8vw"
        height="1.8vw"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_263_17024)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.5312 9.84375H5.46875V26.25C5.46875 29.2703 7.42749 31.7188 9.84375 31.7188H25.1562C27.5725 31.7188 29.5312 29.2703 29.5312 26.25V9.84375ZM9.84375 16.6797C9.84375 15.9246 10.3334 15.3125 10.9375 15.3125H24.0625C24.6666 15.3125 25.1562 15.9246 25.1562 16.6797C25.1562 17.4348 24.6666 18.0469 24.0625 18.0469H10.9375C10.3334 18.0469 9.84375 17.4348 9.84375 16.6797ZM9.84375 23.5156C9.84375 22.7605 10.3334 22.1484 10.9375 22.1484H19.6875C20.2916 22.1484 20.7812 22.7605 20.7812 23.5156C20.7812 24.2707 20.2916 24.8828 19.6875 24.8828H10.9375C10.3334 24.8828 9.84375 24.2707 9.84375 23.5156Z"
            fill="#325FFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6611 0C12.7789 -0.772133 13.0365 -1.60863 13.5231 -2.35009C14.2964 -3.5285 15.5947 -4.375 17.5 -4.375C19.4053 -4.375 20.7036 -3.5285 21.4769 -2.35009C21.9635 -1.60863 22.2211 -0.772133 22.3389 0H25.1562C27.5725 0 29.5 3.58374 29.5 6H5.5C5.5 3.58374 7.42749 0 9.84375 0H12.6611ZM14.8858 0C14.9792 -0.412727 15.1306 -0.812656 15.3519 -1.14991C15.727 -1.72151 16.3428 -2.1875 17.5 -2.1875C18.6572 -2.1875 19.273 -1.72151 19.6481 -1.14991C19.8694 -0.812656 20.0208 -0.412727 20.1142 0H14.8858Z"
            fill="#FFA621"
          />
          <path
            d="M8 10.75C8 8.67894 9.41777 7 11.1667 7H23.8333C25.5822 7 27 8.67894 27 10.75V23.25C27 25.3211 25.5822 27 23.8333 27H11.1667C9.41777 27 8 25.3211 8 23.25V10.75Z"
            fill="url(#paint0_linear_263_17024)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_263_17024"
            x1="17.5"
            y1="7"
            x2="17.5"
            y2="27"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
          <clipPath id="clip0_263_17024">
            <rect width="35" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (props.name === "privacy policy") {
    return (
      <svg
        width="1.8vw"
        height="1.8vw"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9688 8.75C22.9688 7.54184 23.9481 6.5625 25.1562 6.5625H29.5312C30.7394 6.5625 31.7188 7.54184 31.7188 8.75V26.25C31.7188 27.4581 30.7394 28.4375 29.5312 28.4375H25.1562C23.9481 28.4375 22.9688 27.4581 22.9688 26.25V8.75Z"
          fill="#FFA621"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.49047 9.09902C3.74938 9.47587 3.28125 10.2461 3.28125 11.0888V23.9112C3.28125 24.7539 3.74938 25.5241 4.49047 25.901L17.6154 32.5748C19.07 33.3144 20.7812 32.2388 20.7812 30.585V4.41497C20.7812 2.76124 19.07 1.68566 17.6154 2.42523L4.49047 9.09902ZM15.8594 19.1685C16.7655 19.1685 17.5 18.4215 17.5 17.5C17.5 16.5785 16.7655 15.8315 15.8594 15.8315C14.9533 15.8315 14.2188 16.5785 14.2188 17.5C14.2188 18.4215 14.9533 19.1685 15.8594 19.1685Z"
          fill="#4971FE"
        />
        <path
          d="M6.52684 10.2989C5.87836 10.6219 5.46875 11.2822 5.46875 12.0044V22.9951C5.46875 23.7173 5.87836 24.3776 6.52684 24.7006L18.0112 30.421C19.2839 31.0549 20.7812 30.133 20.7812 28.7155V26.2498H25.1562C26.3644 26.2498 27.3438 25.2704 27.3438 24.0623V10.9373C27.3438 9.72912 26.3644 8.74978 25.1562 8.74978H20.7812V6.28403C20.7812 4.86654 19.2839 3.9446 18.0112 4.57852L6.52684 10.2989Z"
          fill="url(#paint0_linear_276_14778)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_276_14778"
            x1="16.4062"
            y1="4.37476"
            x2="16.4062"
            y2="30.6248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (props.name === "cookie policy") {
    return (
      <svg
        width="1.8vw"
        height="1.8vw"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.28125 15.3125V28.5938C3.28125 31.5278 5.24 33.9062 7.65625 33.9062H27.3438C29.76 33.9062 31.7188 31.5278 31.7188 28.5938V15.3125H3.28125Z"
          fill="#325FFF"
        />
        <path
          d="M20.7812 4.375C19.5731 4.375 18.5938 5.35438 18.5938 6.5625V8.75H5.46875C4.26063 8.75 3.28125 9.7294 3.28125 10.9375V13.125H31.7188V8.75C31.7188 6.33374 29.76 4.375 27.3438 4.375H20.7812Z"
          fill="#FFA621"
        />
        <path
          d="M14.0615 24.0154C13.1798 22.252 13 19.4154 13 19.4154L17.6 18L22.2 19.4154C22.2 19.4154 22.0202 22.252 21.1385 24.0154C20.2538 25.7846 17.6 27.2 17.6 27.2C17.6 27.2 14.9462 25.7846 14.0615 24.0154Z"
          fill="#FFA621"
        />
        <path
          d="M20.7812 11.6667H6.5625C5.95842 11.6667 5.46875 12.238 5.46875 12.9427V25.7031C5.46875 27.8173 6.93782 29.5312 8.75 29.5312H26.25C28.0622 29.5312 29.5312 27.8173 29.5312 25.7031V10.3906C29.5312 8.27642 28.0622 6.5625 26.25 6.5625H21.875C21.2709 6.5625 20.7812 7.13378 20.7812 7.83854V11.6667Z"
          fill="url(#paint0_linear_276_14788)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_276_14788"
            x1="17.5"
            y1="6.5625"
            x2="17.5"
            y2="29.5312"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.6" />
            <stop offset="1" stop-color="white" stop-opacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  if (props.name === "site settings") {
    return (
      <svg
        width="1.8vw"
        height="1.8vw"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_259_17011)">
          <path
            d="M31.7188 16.4062C31.7188 15.2911 30.8147 14.387 29.6995 14.387H29.5164C28.6871 9.87235 25.1276 6.31291 20.613 5.48362V5.30048C20.613 4.18529 19.7089 3.28125 18.5938 3.28125V13.2628C20.1311 13.6585 21.3415 14.8689 21.7372 16.4062H31.7188Z"
            fill="#FFA621"
          />
          <path
            d="M14.387 5.30048C14.387 4.18529 15.2911 3.28125 16.4062 3.28125V13.2628C14.8689 13.6585 13.6585 14.8689 13.2628 16.4062H3.28125C3.28125 15.2911 4.18529 14.387 5.30048 14.387H5.48362C6.31291 9.87235 9.87235 6.31291 14.387 5.48362V5.30048Z"
            fill="#325FFF"
          />
          <path
            d="M7.09328 11.0587C6.30472 10.2702 6.30472 8.99167 7.09328 8.20311L14.1513 15.2611C13.344 16.628 13.344 18.3397 14.1513 19.7066L7.09328 26.7647C6.30472 25.9761 6.30472 24.6976 7.09328 23.909L7.22278 23.7795C4.61682 20.0008 4.61682 14.967 7.22278 11.1882L7.09328 11.0587Z"
            fill="#325FFF"
          />
          <path
            d="M11.0592 27.8745C10.2707 28.6631 8.99216 28.6631 8.2036 27.8745L15.2616 20.8165C16.6285 21.6237 18.3402 21.6237 19.7071 20.8165L26.7652 27.8745C25.9766 28.6631 24.6981 28.6631 23.9095 27.8745L23.78 27.745C20.0013 30.351 14.9675 30.351 11.1887 27.745L11.0592 27.8745Z"
            fill="#325FFF"
          />
          <path
            d="M21.7372 18.5938C21.3415 20.1311 20.1311 21.3415 18.5938 21.7372V31.7188C19.7089 31.7188 20.613 30.8147 20.613 29.6995V29.5164C25.1276 28.6871 28.6871 25.1276 29.5164 20.613H29.6995C30.8147 20.613 31.7188 19.7089 31.7188 18.5938H21.7372Z"
            fill="#325FFF"
          />
          <path
            d="M16.4062 21.7372C14.8689 21.3415 13.6585 20.1311 13.2628 18.5938H3.28125C3.28125 19.7089 4.18529 20.613 5.30048 20.613H5.48362C6.31291 25.1276 9.87235 28.6871 14.387 29.5164V29.6995C14.387 30.8147 15.2911 31.7188 16.4062 31.7188V21.7372Z"
            fill="#325FFF"
          />
          <path
            d="M17.5 19.6875C18.7081 19.6875 19.6875 18.7081 19.6875 17.5C19.6875 16.2919 18.7081 15.3125 17.5 15.3125C16.2919 15.3125 15.3125 16.2919 15.3125 17.5C15.3125 18.7081 16.2919 19.6875 17.5 19.6875Z"
            fill="#325FFF"
          />
          <path
            d="M8.75 17.5C8.75 12.6675 12.6675 8.75 17.5 8.75C22.3325 8.75 26.25 12.6675 26.25 17.5C26.25 22.3325 22.3325 26.25 17.5 26.25C12.6675 26.25 8.75 22.3325 8.75 17.5Z"
            fill="url(#paint0_linear_259_17011)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_259_17011"
            x1="17.5"
            y1="26.25"
            x2="17.5"
            y2="8.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="1" stop-color="white" stop-opacity="0.5" />
          </linearGradient>
          <clipPath id="clip0_259_17011">
            <rect width="35" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
  if (props.name === "burger") {
    return (
      <svg
        width="1.75vw"
        height="1.75vw"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.5 11.6667H3.5"
          stroke="#1E1A1A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.5 7H3.5"
          stroke="#1E1A1A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.5 16.3333H3.5"
          stroke="#1E1A1A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.5 21H3.5"
          stroke="#1E1A1A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  if (props.name === "account") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.8vw"
        height="1.8vw"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          stroke="#5647AB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.33 24.5v-2.333a4.667 4.667 0 00-4.666-4.667H9.331a4.667 4.667 0 00-4.667 4.667V24.5M14.003 12.833a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333z"
        ></path>
      </svg>
    );
  }
  if (props.name === "up arrow") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="#5647AB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.5 11.25L9 6.75l4.5 4.5"
        ></path>
      </svg>
    );
  }
  if (props.name === "down arrow") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="#5647AB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.5 6.75l4.5 4.5 4.5-4.5"
        ></path>
      </svg>
    );
  }
  if (props.name === "edit") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          fill="#1E1A1A"
          d="M6.053 21.497c.063 0 .125-.006.188-.016l5.256-.921a.306.306 0 00.165-.088L24.91 7.225a.313.313 0 000-.44l-5.193-5.197a.31.31 0 00-.222-.09.31.31 0 00-.222.09L6.025 14.835a.317.317 0 00-.088.165l-.921 5.256a1.047 1.047 0 00.293.932c.207.2.466.31.744.31zm2.106-5.45L19.494 4.716l2.29 2.29L10.45 18.338l-2.778.49.487-2.78zM25.5 24.122h-23c-.553 0-1 .447-1 1v1.125c0 .138.113.25.25.25h24.5a.25.25 0 00.25-.25v-1.125c0-.553-.447-1-1-1z"
        ></path>
      </svg>
    );
  }
  if (props.name === "plus circle") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          fill="#331A55"
          d="M21 13.5l.911-.412A1 1 0 0021 12.5v1zm-9-7l-.949.316a1 1 0 00.055.131L12 6.5zm2 4.5l.949-.316a1 1 0 00-.242-.391L14 11zm8 5.5l-.303-.953.303.953zm2.67-2.5c0 5.891-4.776 10.667-10.667 10.667v2c6.995 0 12.666-5.672 12.666-12.667h-2zM14.002 24.667C8.112 24.667 3.336 19.89 3.336 14h-2c0 6.995 5.671 12.667 12.667 12.667v-2zM3.336 14c0-5.891 4.776-10.667 10.667-10.667v-2C7.007 1.333 1.336 7.004 1.336 14h2zM14.003 3.333c-.04 0-.324 0-.58-.244a.909.909 0 01-.28-.784.696.696 0 01.047-.17l.004-.009-.003.006a1.523 1.523 0 01-.048.075c-.168.243-.43.547-.81 1.032-.339.436-.735.976-1.011 1.533-.258.52-.526 1.279-.27 2.044l1.897-.632c.005.015-.035-.122.165-.524.18-.365.471-.773.797-1.191.288-.369.67-.825.88-1.129.058-.085.121-.184.176-.287.047-.09.125-.254.155-.456.031-.215.023-.63-.324-.959a1.146 1.146 0 00-.795-.305v2zm-2.897 3.614c.33.66.956.888 1.41.968.45.079.938.05 1.317.02.44-.038.729-.077 1.005-.084.126-.003.185.004.2.007.027.005-.105-.011-.245-.15l1.414-1.415a1.506 1.506 0 00-.792-.4 2.975 2.975 0 00-.627-.041c-.35.009-.81.063-1.121.089-.37.03-.633.034-.807.004-.172-.03-.046-.052.034.108l-1.788.894zm3.687.76a.751.751 0 01-.22-.696c.006-.022-.004.022-.09.164-.178.29-.42.602-.743 1.068-.282.408-.62.928-.802 1.453-.18.519-.302 1.355.355 2.011l1.414-1.414c.156.156.035.305.12.058.084-.241.277-.564.558-.97.24-.345.59-.814.805-1.165.108-.179.242-.42.313-.678.065-.24.15-.799-.296-1.245l-1.414 1.414zm-1.742 3.61c.125.373.35.693.678.918.313.215.655.298.95.324.558.048 1.151-.095 1.596-.223.236-.067.471-.143.674-.207.212-.068.387-.122.538-.161a2.43 2.43 0 01.23-.049l.018-.002h-.028a.522.522 0 01-.086-.017.739.739 0 01-.328-.193l1.414-1.414c-.361-.362-.82-.38-1.032-.375a3.188 3.188 0 00-.693.114 13.09 13.09 0 00-.638.19c-.215.069-.417.134-.619.192-.43.122-.712.166-.873.152-.064-.005-.043-.016.009.02.065.045.088.099.088.098l-1.898.632zm4.242.39a.69.69 0 01-.161-.248c-.023-.063-.026-.105-.027-.11 0-.005.002.041-.02.166-.046.266-.134.557-.243.992-.093.373-.205.867-.193 1.33.012.473.17 1.19.904 1.557l.894-1.788c.234.116.205.334.201.181-.004-.161.04-.417.135-.795.078-.314.21-.773.272-1.132a2.71 2.71 0 00.045-.661 1.41 1.41 0 00-.393-.906l-1.414 1.414zm.26 3.687c1.072.536 2.005-.097 2.422-.371.275-.181.45-.306.646-.406.178-.091.293-.117.379-.117v-2c-.514 0-.949.162-1.29.336-.323.166-.635.385-.835.516-.24.158-.361.221-.44.245-.028.008-.028.004-.011.005.02.001.03.007.023.004l-.894 1.788zm2.536-1.482c-.022-.048-.011-.046.004.064.014.095.024.22.033.383.016.292.027.745.064 1.127.035.36.107.88.35 1.298.136.232.362.497.722.645.368.15.735.121 1.041.024l-.606-1.906a.507.507 0 01.323.03.514.514 0 01.248.198c.008.015-.009-.01-.032-.11a3.007 3.007 0 01-.055-.372c-.032-.33-.037-.652-.058-1.043a6.771 6.771 0 00-.049-.55 2.254 2.254 0 00-.163-.612l-1.822.824zm2.214 3.54c.525-.166 1.046-.54 1.46-.872.438-.351.882-.762 1.248-1.098.4-.366.666-.601.823-.705.033-.022.03-.016 0-.004-.015.007-.15.065-.35.049a.907.907 0 01-.695-.43c-.121-.2-.12-.371-.12-.392h2a1.24 1.24 0 00-.172-.649 1.093 1.093 0 00-.849-.523 1.26 1.26 0 00-.591.102 2.017 2.017 0 00-.323.177c-.322.212-.723.58-1.074.9-.384.352-.773.712-1.149 1.013-.399.32-.671.482-.814.527l.606 1.906z"
        ></path>
        <circle cx="14.6" cy="17.6" r="1.6" fill="#331A55"></circle>
        <path
          stroke="#331A55"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.203 1.6v7.736M19.203 5.6h7.736"
        ></path>
        <ellipse cx="8.2" cy="8.2" fill="#331A55" rx="1.2" ry="1.2"></ellipse>
        <ellipse cx="5.2" cy="14.2" fill="#331A55" rx="1.2" ry="1.2"></ellipse>
        <circle cx="14.802" cy="22.8" r="1.2" fill="#331A55"></circle>
        <circle cx="20.2" cy="20.2" r="1.2" fill="#331A55"></circle>
        <ellipse cx="9.6" cy="12.6" fill="#331A55" rx="1.6" ry="1.6"></ellipse>
        <ellipse cx="8.6" cy="18.6" fill="#331A55" rx="1.6" ry="1.6"></ellipse>
      </svg>
    );
  }
  if (props.name === "delete cookie") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 35 35"
      >
        <path
          fill="#F51D2C"
          d="M17.497 2.552a4.74 4.74 0 014.733 4.471l.007.269h7.656a1.094 1.094 0 01.149 2.177l-.149.01h-1.16l-1.867 18.988a4.01 4.01 0 01-3.735 3.608l-.257.008H12.121a4.011 4.011 0 01-3.958-3.364l-.034-.254L6.261 9.48H5.1a1.094 1.094 0 01-1.083-.945l-.01-.149a1.094 1.094 0 01.945-1.083l.149-.01h7.656a4.74 4.74 0 014.74-4.74zm9.038 6.927H8.459l1.847 18.772a1.822 1.822 0 001.63 1.636l.184.009h10.754c.875 0 1.618-.62 1.787-1.462l.029-.183 1.843-18.772h.002zm-6.486 4.01a1.093 1.093 0 011.084.945l.01.15v10.208a1.093 1.093 0 01-2.177.148l-.01-.148V14.583a1.094 1.094 0 011.093-1.094zm-5.104 0a1.093 1.093 0 011.084.945l.01.15v10.208a1.094 1.094 0 01-2.177.148l-.01-.148V14.583a1.094 1.094 0 011.093-1.094zm2.552-8.75a2.552 2.552 0 00-2.543 2.343l-.009.21h5.104a2.552 2.552 0 00-2.552-2.553z"
        ></path>
      </svg>
    );
  }
  if (props.name === "no cookie") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6.8vw"
        height="6.8vw"
        fill="none"
        viewBox="0 0 130 130"
      >
        <path
          fill="#ADADAD"
          d="M65.003 119.167c29.915 0 54.166-24.252 54.166-54.167 0-29.916-24.251-54.167-54.166-54.167-29.916 0-54.167 24.252-54.167 54.167 0 29.915 24.251 54.167 54.167 54.167z"
        ></path>
        <ellipse
          cx="84.15"
          cy="44.107"
          fill="#fff"
          rx="10.446"
          ry="10.446"
        ></ellipse>
        <ellipse
          cx="43.641"
          cy="44.223"
          fill="#fff"
          rx="6.5"
          ry="6.5"
        ></ellipse>
        <ellipse cx="84.266" cy="87.17" fill="#fff" rx="6.5" ry="6.5"></ellipse>
        <ellipse
          cx="43.525"
          cy="80.67"
          fill="#fff"
          rx="10.446"
          ry="10.446"
        ></ellipse>
      </svg>
    );
  }
  if (props.name === "delete cookie") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 35 35"
      >
        <path
          fill="#F51D2C"
          d="M17.497 2.552a4.74 4.74 0 014.733 4.471l.007.269h7.656a1.094 1.094 0 01.149 2.177l-.149.01h-1.16l-1.867 18.988a4.01 4.01 0 01-3.735 3.608l-.257.008H12.121a4.011 4.011 0 01-3.958-3.364l-.034-.254L6.261 9.48H5.1a1.094 1.094 0 01-1.083-.945l-.01-.149a1.094 1.094 0 01.945-1.083l.149-.01h7.656a4.74 4.74 0 014.74-4.74zm9.038 6.927H8.459l1.847 18.772a1.822 1.822 0 001.63 1.636l.184.009h10.754c.875 0 1.618-.62 1.787-1.462l.029-.183 1.843-18.772h.002zm-6.486 4.01a1.093 1.093 0 011.084.945l.01.15v10.208a1.093 1.093 0 01-2.177.148l-.01-.148V14.583a1.094 1.094 0 011.093-1.094zm-5.104 0a1.093 1.093 0 011.084.945l.01.15v10.208a1.094 1.094 0 01-2.177.148l-.01-.148V14.583a1.094 1.094 0 011.093-1.094zm2.552-8.75a2.552 2.552 0 00-2.543 2.343l-.009.21h5.104a2.552 2.552 0 00-2.552-2.553z"
        ></path>
      </svg>
    );
  }
  if (props.name === "cross") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          stroke="#373737"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 7L7 21M7 7l14 14"
        ></path>
      </svg>
    );
  }
  if (props.name === "asterisk") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width=".5vw"
        height=".5vw"
        fill="none"
        viewBox="0 0 8 8"
      >
        <path
          fill="#F51D2C"
          d="M1.134 6.777L2.9 4.352.246 3.56.66 2.242l2.654.976L3.234.194H4.57l-.088 3.077 2.62-.976.404 1.345-2.698.8L6.539 6.82l-1.09.818-1.626-2.532-1.59 2.47-1.1-.8z"
        ></path>
      </svg>
    );
  }
  if (props.name === "help circle") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          stroke="#ADADAD"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.003 25.667c6.443 0 11.666-5.224 11.666-11.667S20.446 2.333 14.003 2.333C7.559 2.333 2.336 7.557 2.336 14s5.223 11.667 11.667 11.667z"
        ></path>
        <path
          stroke="#ADADAD"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.602 10.5a3.5 3.5 0 016.801 1.167c0 2.333-3.5 3.5-3.5 3.5M14 19.833h.012"
        ></path>
      </svg>
    );
  }
  if (props.name === "eye") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5vw"
        height="1.5vw"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#373737"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        ></path>
        <path
          stroke="#373737"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        ></path>
      </svg>
    );
  }
  if (props.name === "bannerclose") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <path
          fill="#000"
          d="M7.841 5.488L5.484 7.845 17.64 20 5.484 32.155l2.357 2.357 12.155-12.155 12.155 12.155 2.357-2.357L22.353 20 34.508 7.845 32.15 5.488 19.996 17.643 7.841 5.488z"
        ></path>
      </svg>
    );
  }
  if (props.name === "bannerlayout") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          fill="#1E1A1A"
          d="M12 28.5h15.5c.553 0 1-.447 1-1V10.625H12V28.5zm15.5-25H12v5.125h16.5V4.5c0-.553-.447-1-1-1zm-24 1v23c0 .553.447 1 1 1H10v-25H4.5c-.553 0-1 .447-1 1z"
        ></path>
      </svg>
    );
  }
  if (props.name === "bannercontent") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          fill="#1E1A1A"
          d="M23.912 4.007L23.667 4H8.333l-.245.007A4.333 4.333 0 004 8.333v15.334l.007.245A4.333 4.333 0 008.333 28h7.696a8.618 8.618 0 01-1.13-2.667H8.333l-.17-.008a1.666 1.666 0 01-1.496-1.658l.001-13h18.665v4.232c.962.226 1.86.613 2.668 1.13V8.333l-.006-.245a4.333 4.333 0 00-4.083-4.08v-.001zm-9.253 9.524a1 1 0 00-.992-.864H9l-.136.009a1 1 0 00-.864.99V23l.01.136A1 1 0 009 24h4.667l.136-.01a1 1 0 00.864-.99v-9.333l-.01-.136h.002zM10 14.667h2.667V22H10v-7.333zm14-1a1 1 0 00-1-1h-5.995l-.134.009a1 1 0 00.134 1.99H23l.136-.009a1 1 0 00.864-.99zm-4.961 4.966a2.667 2.667 0 01-1.922 3.33l-.78.192a7.639 7.639 0 00.01 2.409l.72.173A2.667 2.667 0 0119 28.084l-.25.843a7.013 7.013 0 001.98 1.228l.657-.691a2.666 2.666 0 013.866 0l.664.7a7.04 7.04 0 001.978-1.217l-.264-.915a2.667 2.667 0 011.921-3.328l.779-.192a7.639 7.639 0 00-.01-2.41l-.718-.174a2.668 2.668 0 01-1.934-3.347l.25-.84a7.04 7.04 0 00-1.98-1.23l-.658.692a2.668 2.668 0 01-3.865 0l-.665-.7a7.036 7.036 0 00-1.976 1.216l.264.914zm4.294 6.7c-1.066 0-1.933-.896-1.933-2 0-1.105.867-2 1.933-2 1.068 0 1.934.895 1.934 2 0 1.104-.866 2-1.934 2z"
        ></path>
      </svg>
    );
  }
  if (props.name === "bannercolor") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          fill="#000"
          d="M23.55 10.574l-7.547-7.547-7.547 7.547c-4.16 4.16-4.16 10.92 0 15.08a10.64 10.64 0 007.547 3.12 10.64 10.64 0 007.546-3.12c4.16-4.16 4.16-10.92 0-15.08zm-7.547 15.547a7.904 7.904 0 01-5.654-2.347 7.927 7.927 0 01-2.346-5.653c0-2.134.826-4.147 2.346-5.654l5.654-5.666v19.32z"
        ></path>
      </svg>
    );
  }
  if (props.name === "bannerbehaviour") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="45"
        fill="none"
        viewBox="0 0 28 45"
      >
        <path
          fill="#000"
          d="M16.555 6.889h-8c-3.296 0-5.982 2.682-6 5.986v.042a6.01 6.01 0 006 5.972h8a6.01 6.01 0 006-5.994v-.018c-.015-3.303-2.703-5.988-6-5.988zm-8 9c-1.627 0-3-1.373-3-3s1.373-3 3-3 3 1.373 3 3-1.373 3-3 3zM16.555 21.889h-8c-3.296 0-5.982 2.682-6 5.986v.042a6.01 6.01 0 006 5.972h8c3.309 0 6-2.691 6-6 0-3.31-2.691-6-6-6zm0 9c-1.627 0-3-1.373-3-3s1.373-3 3-3 3 1.373 3 3-1.373 3-3 3z"
        ></path>
      </svg>
    );
  }
  if (props.name === "green tick") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2vw"
        height="1.2vw"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#4ACD96"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 6L9 17l-5-5"
        ></path>
      </svg>
    );
  }
  if (props.name === "red cross") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2vw"
        height="1.2vw"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#F51D2C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 6L6 18M6 6l12 12"
        ></path>
      </svg>
    );
  }
}

export default SvgIcon;
