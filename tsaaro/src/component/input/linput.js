import { Checkbox, Input,Row } from "antd"
import { OmitProps } from "antd/lib/transfer/ListBody";
import '../../assets/css/linput.css'
const InputView=(props)=>{

    return(
        <Row className='linput-main'>
            {props.text?props.checkbox?<div>
            <Checkbox>{props.text} </Checkbox>
            <b className="linput-b">{props.clickable}</b></div>:
            <div>{props.text}<b className="linput-b"> {props.clickable}</b></div>:<>
            <p className='linput-p1'>{props.label}</p>
            <Input className='linput-inp' placeholder={props.label}/>
            </>}
        </Row>

        
    )
}
export default InputView;