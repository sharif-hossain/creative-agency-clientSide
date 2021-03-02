import React, { useEffect, useState } from "react";
import "./AddService.css";
const AddService = () => {
  const [loggedInUser] = useState({});
  const [service, setService] = useState({});
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState({});
  const handleBlur = (e) => {
    const newService = { ...service };
    newService[e.target.name] = e.target.value;
    setService(newService);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", service.title);
    formData.append("description", service.description);

    fetch('https://ancient-bastion-75645.herokuapp.com/addService', {
      method: 'POST',
      
      body: formData,
    })
      .then((response) => response.json())
      .then(data => console.log(data))
  };

  console.log(msg);
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
                      <label for="exampleInputEmail1">Service Title</label>
                    </h6>
                    <input
                      onBlur={handleBlur}
                      type="text"
                      name="title"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Title"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <h6>
                      <label for="exampleFormControlTextarea1">
                        Description
                      </label>
                    </h6>
                    <textarea
                      onBlur={handleBlur}
                      class="form-control"
                      name="description"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Enter Description"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="m-2 mt-3">Icon</label>
                  <br />
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="file"
                    className="ml-2"
                   
                    required
                  />
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

export default AddService;
