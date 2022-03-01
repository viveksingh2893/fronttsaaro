import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Loginapi=(url,data)=>{
    const navigate=useNavigate();
    axios.post(url,data)
    .then(res=>{
        console.log(res.data.access)
        axios.defaults.headers.common['Authorization']=`Bearer ${res.data.access}`
        navigate('/dashboard/dash')

    }

    )


}
export default Loginapi;