import { Row } from "antd";
import '../../assets/css/lbutton.css';
import Loginleftsvg from "../../assets/loginleftside";

const LbuttonView=(props)=>{

    return(

        <Row className='lbutton-main' onClick={()=>console.log("hello world")}
        style={{border:props.icon==='googleicon'?'1px solid #7A4EB6':"none"
        ,backgroundColor:props.icon==='googleicon'?
        '#ffffff':'#7a4eb8'
        }}>
            {props.icon==='googleicon'?<Loginleftsvg name='googleicon'/>:null}
            <p className='lbutton-p'
            style={{
                color:props.icon==='googleicon'?
                '#7a4eb8':'#ffffff',
                marginLeft:props.icon==='googleicon'?
                10:0
            }}
            >{props.title}</p>
        </Row>
    );
}

export default LbuttonView;

