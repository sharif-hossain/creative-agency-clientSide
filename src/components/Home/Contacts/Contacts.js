import React from "react";

const Contacts = () => {
  return (
    <main style={{ backgroundColor: "#FBD062" }}>
      <div className="container pt-5">
        <div className="row mb-5 mt-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5">
            <h2>
              Let us handle your <br /> project, professionally.
            </h2>
            <p className="mt-3">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5">
            <div className="mx-auto">
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Your email address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Your name / company’s name"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    className="form-control"
                    cols="30"
                    rows="10"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-dark">
                    {" "}
                    Send{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center pb-5">
            copyright Orange labs {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
