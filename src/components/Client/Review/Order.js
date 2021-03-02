import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Order.css";

const Order = () => {
  const {id} = useParams();
  const [order, setOrder] = useState({});
  const [success, setSuccess] = useState(false);
  //const [orderInfo, setOrderInfo] = useState({});
  const [file, setFile] = useState(null);
  const [loggedInUser] = useContext(UserContext);
  const handleBlur = (e) => {
    const newOrder = { ...order };
    newOrder[e.target.name] = e.target.value;
    setOrder(newOrder);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
//   useEffect(()=>{
//     fetch('http://localhost:4000/getServices')
//     .then(res => res.json())
//     .then(data => setOrderInfo(data));
// });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", loggedInUser.displayName);
    formData.append("email", loggedInUser.email);
    formData.append("productTitle", order.productTitle);
    formData.append("description", order.description);
    formData.append("price", order.price);
    formData.append("orderId", id);

    fetch("http://localhost:4000/addOrder", {
      method: "POST",

      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setOrder(data);
      });
  };
   const handleClick = ()=>{
      const msg = {...success};
      setSuccess(msg);
      success(true);
   }

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
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <input
                      onBlur={handleBlur}
                      type="text"
                      name="name"
                      value={loggedInUser.displayName}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your name/company name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onBlur={handleBlur}
                      type="email"
                      name="email"
                      value={loggedInUser.email}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      onBlur={handleBlur}
                      type="text"
                      name="productTitle"
                      
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Ex. Graphics Design"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      onBlur={handleBlur}
                      class="form-control"
                      type="text"
                      name="description"
                      
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Enter project detail"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <input
                      type="number"
                      onBlur={handleBlur}
                      name="price"
                      placeholder="Price"
                      className="form-control p-3 m-2"
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      name="file"
                      className="ml-2"
                      required
                    />
                  </div>
                </div>
               
              </div>
              <div className="form-group mr-0 mt-3">
                <button handleClick={handleClick} type="submit" className="btn btn-dark">
                  Send
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
