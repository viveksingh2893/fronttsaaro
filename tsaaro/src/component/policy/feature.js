import React, {useState} from "react";

const Feature=()=>{
    const [subs, setSubs] = useState(false);
    const [up, setUp] = useState(false);
    const [access, setAccess] = useState(false);
    const [contact, setContact] = useState(false);

    const toggleSubs=()=>{
        setSubs(!subs);
    }
    const toggleUp=()=>{
        setUp(!up);
    }
    const toggleAccess=()=>{
        setAccess(!access);
    }
    const toggleContact=()=>{
        setContact(!contact);
    }
    return (
        <div style={{display:'flex', flexDirection:'column', width:'70vw', marginTop:'2vh'}}>
            <div style={{display:'flex', flexDirection:'row',alignItems:'center',}}>
                <div onClick={toggleSubs} className='check' style={{backgroundColor:subs?'#7A4EB6':''}}/>
                <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Unsubscribe link in the newsletter footer</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',marginTop:'2vh'}}>
                    <div onClick={toggleUp} className='check' style={{backgroundColor:up?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Collect user preferences when they register an account with the site</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',marginTop:'2vh'}}>
                    <div onClick={toggleAccess} className='check' style={{backgroundColor:access?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Users can access account settings and update preferences</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',marginTop:'2vh'}}>
                    <div onClick={toggleContact} className='check' style={{backgroundColor:contact?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Users can contact us using the contact information provided</p>
            </div>
        </div>
    )
}

export default Feature;