import { Input } from "antd";
import React, {useState} from "react";
import '../../assets/css/privacypolicy.css'

const Tps=()=>{
    const [A, setA] = useState(false);
    const [B, setB] = useState(false);
    const [C, setC] = useState(false);
    const [D, setD] = useState(false);
    const [E, setE] = useState(false);
    const [F, setF] = useState(false);
    const [G, setG] = useState(false);

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
    return (
        <div style={{display:'flex', flexDirection:'column', width:'70vw',marginTop:'2vh' }}>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleA} className='check' style={{backgroundColor:A?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Ad service</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleB} className='check' style={{backgroundColor:B?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Analytics</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between',marginTop:'2vh' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleC} className='check' style={{backgroundColor:C?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Sponsors</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleD} className='check' style={{backgroundColor:D?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Payment recovery services</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw', justifyContent:'space-between',marginTop:'2vh' }}>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleE} className='check' style={{backgroundColor:E?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Marketing agencies</p>
                </div>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',width:'33vw'}}>
                    <div onClick={toggleF} className='check' style={{backgroundColor:F?'#7A4EB6':''}}/>
                    <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Data collection & process</p>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row',width:'40vw',alignItems:'center',width:'33vw',marginTop:'2vh' }}>
                <div onClick={toggleG} className='check' style={{backgroundColor:G?'#7A4EB6':''}}/>
                <p style={{marginLeft:'1vw', marginBottom:0, fontSize:'1vw' }}>Legal entities</p>
            </div>
        </div>
    )
}

export default Tps;