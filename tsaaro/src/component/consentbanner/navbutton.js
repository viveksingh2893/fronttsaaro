import SvgIcon from "../../assets/Icon_apps";

const Navbutton = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "8.03vh",
        width: "6.93vw",
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
          fontFamily:'Roboto',
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "1vw",
          lineHeight: "1.2vw",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          margin:0,
          color: `${props.textcolor}`,
        }}
      >
        {props.menuname}
      </p>
    </div>
  );
};
export default Navbutton;
