import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GetService from '../GetService/GetService';
import './Services.css';

const Services = () => {
    const [addService, setAddService] = useState([]);
    const history = useHistory();
    useEffect(()=>{
        fetch('https://ancient-bastion-75645.herokuapp.com/getServices')
        .then(res => res.json())
        .then(data => setAddService(data));
    });

    const handleClick = (id) =>{
       history.push('/client/order/'+id);
    }
    return (
        <div className="service-bg">
            <div className="py-5"> 
            <h2 className="text-center mb-5">Provide awesome <span style={{color:'green'}}>services</span></h2>
            <div className="container">
                <div className="row">
                {
                    addService.map(service=><GetService key={service._id} service={service} handleClick= {handleClick}></GetService>)
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;