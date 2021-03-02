import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import OrderedItem from '../OrderedItem/OrderedItem';
import './ClientServiceList';

const ClientServiceList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState({});
    const [serviceList, setServiceList] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:4000/getOrderedItem?id='+ order.id)
    //     .then(res => res.json())
    //     .then(data => setOrder(data));
    // })

    useEffect(() => {
      fetch('http://localhost:4000/orderedList?email=' + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
          setServiceList(data);
        });
    }, [loggedInUser.email]);
   console.log(serviceList);
    return (
        <div className="container">
      <div className="row my-3">
        <div className="col-md-2">
          <div>
          <Link to="/"><img
              style={{ height: "45px" }}
              src="https://i.ibb.co/TBrkkyv/logo.png"
              alt=""
            /></Link>
          </div>
          <div className="mt-5">
          <Link to="/client/order">Order</Link> <br />
            <br />
            <Link to="/client/serviceList">Service List</Link> <br />
            <br />
            <Link to="/client/review">Review</Link>
          </div>
        </div>
        {/* <div className="col-md-1"></div> */}
        <div className="col-md-10">
          <div className="d-flex justify-content-center">
            <div className="mr-auto">
              <h4 className="ml-4">Order</h4>
            </div>
            <div className="profile-pic">
              <h6 className="mr-4">{loggedInUser.displayName}</h6> 
              <img style={{height:'25px', width:'25px', borderRadius:'50%'}} src={loggedInUser.photoURL} alt=""/>
            </div>
          </div>
          <div className="mt-3 form-style p-5">
             <div className="row">
             {
             serviceList.map(item => <OrderedItem item={item}></OrderedItem>)
             }
             </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ClientServiceList;