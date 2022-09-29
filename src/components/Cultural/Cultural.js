import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import './Cultural.css'
const Cultural = () => {

    const [culturals,setCultural]=useState([]);

    useEffect( ()=>{
        fetch('cultural.json')
       .then(res => res.json())
       .then(data => setCultural(data))
    },[])
    return (
        <div className="main-container">
            
            <div className="cultural-container">
               {
                culturals.map(cultural=><Content
                    key={cultural.id}
                    cultural={cultural}
                    >

                    </Content>)
               }
            </div>

            <div className="cultural-right-container">
                 <h1>right</h1>
            </div>
        </div>
    );
};

export default Cultural;