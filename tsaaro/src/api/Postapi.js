import axios from 'axios';


const Postapi=async (url,data,type)=>{
    
    const res=await axios.post(url,data)
    .then(res=>{
        console.log(res.data)
        if(res.data && type==='login'){
            axios.defaults.headers.common['Authorization']=`Bearer ${res.data.access}`
            return true

        }else if(type==='signup'){
            return true
        }else if (res.status==400 ||401){
            return false
        }

    }

    ).catch(error=> console.log(error)

    )
    
    return res


}
export default Postapi;