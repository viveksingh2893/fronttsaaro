import SvgIcon from "../../assets/Icon_apps";

const Navbutton = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
        width: "133px",
        backgroundColor: props.backcolor,
        cursor: "pointer",
      }}
      onClick={() => {
        props.onClick();
      }}
    >
      <SvgIcon name={props.iconname} />
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "14px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: `${props.textcolor}`,
        }}
      >
        {props.menuname}
      </p>
    </div>
  );
};
export default Navbutton;
