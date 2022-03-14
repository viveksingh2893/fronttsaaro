import SvgIcon from "../../assets/Icon_apps";

const ConsentbannerScr = (props) => {
  return (
    <div
      style={{
        width: "1840px",
        height: "888px",
        backgroundColor: "white",
        position: "absolute",
        zIndex: 1000,
        top: "18px",
        left: "47px",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxShadow: `0px 2px 25px -7px rgba(0,0,0,0.75)`,
      }}
    >
      <div
        style={{
          width: "133px",
          height: "888px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "32px",
        }}
      >
        <div
          onClick={() => {
            props.callcb();
          }}
          style={{ cursor: "pointer" }}
        >
          <SvgIcon name="bannerclose" />
        </div>
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
          }}
        >
          <SvgIcon name="bannerlayout" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
          }}
        >
          <SvgIcon name="bannercontent" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
          }}
        >
          <SvgIcon name="bannercolor" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
          }}
        >
          <SvgIcon name="bannerbehaviour" />
        </div>
      </div>
      <div
        style={{
          width: "465px",
          height: "888px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F0EDFF",
        }}
      ></div>
    </div>
  );
};
export default ConsentbannerScr;
