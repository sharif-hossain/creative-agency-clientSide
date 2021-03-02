import React from "react";

const HeaderBody = () => {
  return (
    <div className="container">
      <div
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4">
          <h1 className="font-weight-bold">
            Lets Grow Your Brand To The Next Level.
          </h1>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            assumenda itaque dicta tempora, atque consequuntur?
          </p>
          <div className="btn btn-dark">Hire us</div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <img
            className="img-fluid w-100"
            src="https://i.ibb.co/bgCrGp2/Frame.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
