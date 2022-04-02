import { Input } from "antd";
import React, {useState} from "react";
import '../../assets/css/privacypolicy.css'

const DisclosurePurpose=()=>{
    const [A, setA] = useState(false);
    const [B, setB] = useState(false);
    const [C, setC] = useState(false);
    const [D, setD] = useState(false);
    const [E, setE] = useState(false);
    const [F, setF] = useState(false);
    const [G, setG] = useState(false);
    const [H, setH] = useState(false);
    const [I, setI] = useState(false);
    const [J, setJ] = useState(false);
    const [K, setK] = useState(false);
    const [L, setL] = useState(false);
    const [M, setM] = useState(false);
    const [N, setN] = useState(false);

    const toggleA=()=>{
        setA(!A);
    }
    const toggleB=()=>{
        setB(!B);
    }
    const toggleC=()=>{
        setC(!C);
    }
    const toggleD=()=>{
        setD(!D);
    }
    const toggleE=()=>{
        setE(!E);
    }
    const toggleF=()=>{
        setF(!F);
    }
    const toggleG=()=>{
        setG(!G);
    }
    const toggleH=()=>{
        setH(!H);
    }
    const toggleI=()=>{
        setI(!I);
    }
    const toggleJ=()=>{
        setJ(!J);
    }
    const toggleK=()=>{
        setK(!K);
    }
    const toggleL=()=>{
        setL(!L);
    }
    const toggleM=()=>{
        setM(!M);
    }
    const toggleN=()=>{
        setN(!N);
    }
    return (
        <div style={{display:'flex', flexDirection:'column', width:'70vw'}}>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleA} className='check' style={{backgroundColor:A?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Marketing/Promotional</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleB} className='check' style={{backgroundColor:B?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Targeted advertising</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between',marginTop:'2vh' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleC} className='check' style={{backgroundColor:C?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Creating user accounts</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleD} className='check' style={{backgroundColor:D?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Manage customer order</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between',marginTop:'2vh' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleE} className='check' style={{backgroundColor:E?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Testimonials</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleF} className='check' style={{backgroundColor:F?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Site protection</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between',marginTop:'2vh' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleG} className='check' style={{backgroundColor:G?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Customer feedback collection</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleH} className='check' style={{backgroundColor:H?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>User to user comments</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between',marginTop:'2vh' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleI} className='check' style={{backgroundColor:I?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Enforce T&C</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleJ} className='check' style={{backgroundColor:J?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Dispute resolution</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between',marginTop:'2vh' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleK} className='check' style={{backgroundColor:K?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Processing payment</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleL} className='check' style={{backgroundColor:L?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Manage user account</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between',marginTop:'2vh' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleM} className='check' style={{backgroundColor:M?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Support</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleN} className='check' style={{backgroundColor:N?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Administration info</p>
                </div>
            </div>
        </div>
    )
}

export default DisclosurePurpose;