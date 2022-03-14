import axios from 'axios';


const Postapi=async (url,data)=>{
    
    const res=await axios.post(url,data)
    .then(res=>{
        console.log('.........',res)
        if(res){
            
            return res

        }

    }

    ).catch(({response}) => response)
    
    return res


}
export default Postapi;