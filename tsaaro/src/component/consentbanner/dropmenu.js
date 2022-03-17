import SvgIcon from "../../assets/Icon_apps";

const Dropmenu = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "48px",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: props.topmargin,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "14px",
        }}
      >
        <SvgIcon name="pointdown"></SvgIcon>
      </div>
    </div>
  );
};
export default Dropmenu;
