import React from "react";
import '../../assets/css/accsettings.css';
import InvoiceComp from "./invoiceComp";
import { DatePicker } from 'antd';

const Invoice=()=>{
    const onChange=(date, dateString)=>{
        console.log(date, dateString);
      }
    return(
        <div className="as-website">
            <div style={{display:'flex',justifyContent:'flex-end',}}>
                <DatePicker onChange={onChange} picker="month" style={{border:'1px solid #7A4EB6', color:'#7A4EB6'}}/>
            </div>
            <div className='as' style={{display:"flex",paddingLeft:'1.2vw',marginTop:'5vh',color:'#6F6F6F',flexDirection:'row', justifyContent:'flex-start',fontSize:'1vw', alignItems:'center'}}>
                <p style={{width:'15vw',flex:'1.5',margin:0}}>Invoice #</p>
                <p style={{width:'12vw',flex:'1.2',margin:0}}>Amount</p>
                <p style={{width:'16.5vw',flex:'1.65', margin:0}}>Payment Method</p>
                <p style={{width:'12vw',flex:'1.2', margin:0}}>Issue Date</p>
                <p style={{width:'12vw',flex:'1.2', margin:0}}>Status</p>
                <p style={{width:'7vw',flex:'.7', margin:0}}></p>
            </div>
            <InvoiceComp 
            invoice='5256BCEE'
            amount='0.00 USD'
            pay='visa card ending in 3087'
            doi='April 3, 2022'
            status='Open'
            />
            <InvoiceComp 
            invoice='5256BCEE-9300'
            amount='0.00 USD'
            pay='visa card ending in 3087'
            doi='April 3, 2022'
            status='Open'
            />
        </div>
    )
}

export default Invoice;