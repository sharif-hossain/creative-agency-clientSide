import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Review = () => {
    const [review, setReview] = useState({});
  const [loggedInUser] = useContext(UserContext);
  const handleBlur = (e) => {
    const newOrder = { ...review};
    newOrder[e.target.name] = e.target.value;
    setReview(newOrder);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', loggedInUser.displayName);
    formData.append('photoURL', loggedInUser.photoURL);
    formData.append('company', review.company);
    formData.append('description', review.description);

    fetch('https://ancient-bastion-75645.herokuapp.com/review',{
        method:'POST',
        body:formData,
    })
    .then(res => res.json())
    .then(data => setReview(data));
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
                      type="text"
                      name="company"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your name/company name designation"
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
                      placeholder="Enter Description"
                      required
                    ></textarea>
                  </div>
                </div>
                
              </div>
              <div className="form-group mr-0 mt-3">
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Review;