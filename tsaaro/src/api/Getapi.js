import axios from 'axios';
//  const IP_ADDR=process.env.REACT_APP_IP_ADDR;
const IP_ADDR='http://shorthand.blog:8001';
console.log('address.......',IP_ADDR)


const Getapi=async (url)=>{
    console.log('address.....',IP_ADDR)
    const res=await axios.get(`${IP_ADDR}${url}`)
    .then(res=>{
        if(res){
            
            return res

        }

    }

    ).catch(({response}) => response)
    
    return res


}
export default Getapi;