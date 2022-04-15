import SvgIcon from "../../assets/Icon_apps";
import "../../assets/css/consentbanner.css";

const Dropmenu = (props) => {
  return (
    <div
      style={{
        width: "20.52vw",
        height: "6.44vh",
        backgroundColor: "#fff",
        borderRadius: "4px",
        marginTop: props.topmargin,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "12.5vw",
          height: "4vh",
          marginLeft: "9.9vw",
          display: "flex",
          backgroundColor: "#fff",
          margin:0
        }}
      >
        <p className="drpdwn-title">{props.opthead}</p>
      </div>

      {props.opthead === "Comply With" ? (
        <form>
          <select className="drpdwn">
            <option value="GDPR">GDPR</option>
            <option value="CCPA">CCPA</option>
            <option value="GDPR-CCPA">GDPR-CCPA</option>
          </select>
        </form>
      ) : null}
      {props.opthead === "Default Language" ? (
        <form>
          <select className="drpdwn">
            <option value="Dutch">Dutch</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Polish">Polish</option>
            <option value="Russian">Russian</option>
            <option value="Spanish">Spanish</option>
            <option value="Turkish">Turkish</option>
            <option value="Ukranian">Ukranian</option>
          </select>
        </form>
      ) : null}
      {props.opthead === "Consent Type" ? (
        <form>
          <select className="drpdwn">
            <option value="Implicit">Implicit</option>
            <option value="Explicit">Explicit</option>
            <option value="Info">Info</option>
            <option value="Custom">Custom</option>
          </select>
        </form>
      ) : null}
      {/* {props.opthead === "Cookie Notice" ? (
        <form>
          <select className="drpdwn">
            <option value="Implicit">Option 1</option>
            <option value="Explicit">Option 2</option>
          </select>
        </form>
      ) : null}
      {props.opthead === "Privacy Policy" ? (
        <form>
          <select className="drpdwn">
            <option value="Implicit">Option 1</option>
            <option value="Explicit">Option 2</option>
          </select>
        </form>
      ) : null} */}

      {/* <div
        style={{
          width: "174px",
          height: "40px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: "2px",
        }}
      >
        <p className="drpdwn-option">{props.optname}</p>
      </div>
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "12px",
          cursor: "pointer",
        }}
      >
        <SvgIcon name="pointdown"></SvgIcon>
      </div> */}
    </div>
  );
};
export default Dropmenu;
