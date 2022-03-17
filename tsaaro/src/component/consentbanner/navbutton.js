import SvgIcon from "../../assets/Icon_apps";

const Navbutton = (props) => {
  return (
    <div
      style={{
        display: "flex",
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
    </div>
  );
};
export default Navbutton;
