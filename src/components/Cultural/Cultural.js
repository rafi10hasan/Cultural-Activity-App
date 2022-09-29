import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import './Cultural.css'
const Cultural = () => {

    const [culturals,setCultural]=useState([]);
    const [time,setTime]=useState([]);

    useEffect( ()=>{
        fetch('cultural.json')
       .then(res => res.json())
       .then(data => setCultural(data))
    },[])
   

   const handleAddToCalculation=(culturals)=>{
      const newTime=[...time,culturals];
      setTime(newTime);
      console.log(time)
   }

   let total=0;
   for(const element of time){
      total=total+element.time;
   }

    return (
        <div className="main-container">
            
            <div className="cultural-container">
               {
                culturals.map(cultural=><Content
                    key={cultural.id}
                    cultural={cultural}
                    handleAddToCalculation={handleAddToCalculation}
                    >

                    </Content>)
               }
            </div>

            <div className="cultural-right-container">
                 <h3>Md.Rafi Hasan</h3>
                 <h4>Dhanmondi,shukrabad</h4>
                 <div className='user'>
                      <div>
                          <h3>70KG</h3>
                          <h4>Weight</h4>
                      </div>

                      <div>
                          <h3>5.8</h3>
                          <h4>Height</h4>
                      </div>

                      <div>
                          <h3>24YRS</h3>
                          <h4>Age</h4>
                      </div>
                 </div>
                 <h4>Details:{culturals.length}</h4>

                 <div>
                    <h3>Add a Break:</h3>
                    <div className='break-content'>
                         <button>10s</button>
                         <button>20s</button>
                         <button>30s</button>
                         <button>40s</button>
                         <button>50s</button>
                    </div>
                 </div>

                 <div>
                     <h3>Exercise Details:</h3>
                     <div className='exercise-details'>
                        <h3>Exercise Time:</h3>
                        <h3>{total}s</h3>
                     </div>
                      
                     <div className='exercise-details'>
                        <h3>Break Time:</h3>
                        <h3>0s</h3>
                     </div>

                 </div>

                 <div className='activity'>
                    <button>Activity Completed</button>
                 </div>
            </div>
        </div>
    );
};

export default Cultural;