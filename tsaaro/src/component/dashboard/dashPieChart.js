import React, { useState } from "react";
import '../../assets/css/dashboard.css';
import PieLabelName from "./pieLabelName";
import {Chart, Tooltip, ArcElement, Title, Legend} from 'chart.js';
import { Pie} from "react-chartjs-2";
import 'chart.js/auto';
Chart.register(Tooltip, ArcElement, Title, Legend);


const DashPieChart=(props)=>{
    const data={
        type:'pie',
        datasets:[{
            data:[props.accepted,props.partially_accepted,props.rejected],
            backgroundColor:[
                'green',
                'yellow',
                'red'
            ]
        }],
        labels:[
            // 'Accepted', 
            // 'Partially Accepted',
            // 'Rejected'
        ],
        
    }
    return(
        <div className="dashboard-pie-container">
            <div style={{height:'13.6vw',width:'13.6vw'}}>
            <Pie 
            data={data} 
            />
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <PieLabelName color="green" name='Accepted'/>
                <PieLabelName color="yellow" name='Partialy Accepted'/>
                <PieLabelName color="red" name='Rejected'/>
            </div>
        </div>
    )
}

export default DashPieChart;