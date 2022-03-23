import axios from 'axios';
const IP_ADDR=process.env.REACT_APP_IP_ADDR;
// const IP_ADDR='http://192.168.29.5:8001';
console.log('address.......',IP_ADDR)


const Postapi=async (url,data)=>{
    console.log('address.....',IP_ADDR)
    const res=await axios.post(`${IP_ADDR}${url}`,data)
    .then(res=>{
        if(res){
            
            return res

        }

    }

    ).catch(({response}) => response)
    
    return res


}
export default Postapi;