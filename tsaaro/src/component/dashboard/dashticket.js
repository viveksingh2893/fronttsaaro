import '../../assets/css/dashboard.css';
import Dashtckicon from "../../assets/dashtckicon";


const DashboardTck=(props)=>{
    return(
        <div className="dashboardtck" style={{width:props.inactive?'21.5vw':'18.1vw', justifyContent:props.inactive?'space-around':'space-between'}}>
            <Dashtckicon name={props.name}/> 
            <div className="dashboardtck-stat">
                <p className="dashboardtck-p">{props.number}</p>
                <p className="dashboardtck-p">{props.total}</p>
            </div>
        </div>
    )


}

export default DashboardTck;