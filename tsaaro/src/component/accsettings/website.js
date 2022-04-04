import React from "react";

const Website=()=>{
    return(
        <div style={{display:'flex', flexDirection:'column', padding:'2.7vw',width:'80vw', borderTop: "2px solid #F0EDFF", borderBottom: "2px solid #F0EDFF",}}>
            <div style={{display:"flex",flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <p style={{width:'17vw', margin:0, }}>Website</p>
                <p style={{width:'12vw',textAlign:'center',margin:0,}}>Plan</p>
                <p style={{width:'12vw',textAlign:'center', margin:0,}}>Banner</p>
            </div>
            <div style={{display:"flex",flexDirection:'row',marginTop:'5vh', justifyContent:'flex-start', alignItems:'center',}}>
                <p style={{width:'17vw',margin:0,}}>http://www.destratum.com</p>
                <p style={{ width:'12vw',textAlign:'center', borderRadius:'4px',margin:0,}}>utimate</p>
                <p style={{ width:'12vw',textAlign:'center',  borderRadius:'4px',margin:0,}}>Active</p>
                <p style={{ width:'12vw',textAlign:'center',  borderRadius:'4px',margin:0,}}>Reactivate</p>
                <p style={{ width:'12vw',textAlign:'center',  borderRadius:'4px',margin:0,}}>Script</p>
            </div>
        </div>
    )
}

export default Website;