import SvgIcon from "../../assets/Icon_apps"

const SmButton= (props)=>{
return(
    <div className="button">
      <div className="button-child">
      <SvgIcon name={props.name.toLowerCase()}/>
      <p className="button-para">{props.name}
      </p>
      </div>
      

</div>
)}
export default SmButton