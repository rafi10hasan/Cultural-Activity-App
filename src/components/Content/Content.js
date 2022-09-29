import React from 'react';
import './Content.css'
const Content = (props) => {
    const{img,title,description,Age,time}=props.cultural;
    return (
        <div className="content"> 
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>For Age:{Age}</h4>
            <h4>Time:{time}</h4>
            <button>Add To List</button>
        </div>
    );
};

export default Content;