import React, { useState } from 'react';
import './MakeAdmin.css';
const MakeAdmin = () => {
    const [loggedInUser] = useState({});
    const handleBlur = (e) =>{

    }
    const handleSubmit = (e) =>{

    }
    return (
        <div className="container">
      <div className="row my-3">
        <div className="col-md-2">
          <div>
            <a href="/"><img
              style={{ height: "45px" }}
              src="https://i.ibb.co/TBrkkyv/logo.png"
              alt=""
            /></a>
          </div>
          <div className="mt-5">
            <a href="/admin">Service List</a> <br />
            <br />
            <a href="/admin/addService">Add Service</a> <br />
            <br />
            <a href="/admin/makeAdmin">Make Admin</a>
          </div>
        </div>
        {/* <div className="col-md-1"></div> */}
        <div className="col-md-10">
          <div className="d-flex justify-content-center">
            <div className="mr-auto">
              <h4 className="ml-4">Add Service</h4>
            </div>
            <div className="profile-pic">
              <h6 className="mr-4">{loggedInUser.displayName}</h6> 
              <img style={{height:'25px', width:'25px', borderRadius:'50%'}} src={loggedInUser.photoURL} alt=""/>
            </div>
          </div>
          <div className="mt-3 form-bg">
            <form onSubmit={handleSubmit}>
              <div className="row form-border">
                <div className="col-md-7">
                  <div class="form-group">
                    <h6>
                      <label for="exampleInputEmail1">Email</label>
                    </h6>
                    <input
                      onBlur={handleBlur}
                      type="email"
                      name="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="xyz@gmail.com"
                      required
                    />
                  </div>
                  
                </div>
                
              </div>
              <div className="form-group text-right mr-0 mt-3">
                <button type="submit" className="btn btn-success">
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

export default MakeAdmin;