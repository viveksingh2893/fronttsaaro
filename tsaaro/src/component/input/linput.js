import { Checkbox, Input,Row } from "antd"
import '../../assets/css/linput.css'
const InputView=(props)=>{

    return(
        <Row className='linput-main'>
            {props.text?props.checkbox?<div>
            <Checkbox>{props.text} </Checkbox>
            <b className="linput-b">{props.clickable}</b></div>:
            <div>{props.text}<b className="linput-b" onClick={props.action}> {props.clickable}</b></div>:<>
            <p className='linput-p1'>{props.label}<b style={{color:'red'}}> *</b></p>
            <Input className='linput-inp'  placeholder={props.label} onChange={props.onChange}/>
            </>}
        </Row>

        
    )
}
export default InputView;