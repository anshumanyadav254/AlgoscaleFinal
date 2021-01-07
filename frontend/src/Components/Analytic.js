import React from 'react';
import {Line} from 'react-chartjs-2'
 function Analytic  (props){
     
    const data={
        labels:["4 Jan 2021","5 Jan 2021","6 Jan 2021","7 Jan 2021"],
        datasets:[
            {
                label:"dates of Submission",
                data:[1,2,3,2]


            }
        ]
       
    }
   
    return (
        <div>
            <button style={{marginLeft:"150mm"}} >Contact Us</button>
           <Line data={data} />
        </div>
    )
    
}
export default Analytic;
