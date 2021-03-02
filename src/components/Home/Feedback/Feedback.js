import React, { useEffect, useState } from "react";
import GetFeedback from "../GetFeedback/GetFeedback";

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(()=>{
         fetch('https://ancient-bastion-75645.herokuapp.com/feedback')
         .then(res => res.json())
         .then(data => setFeedbacks(data));
    })
  return (
    <div style={{backgroundColor:'#E5E5E5'}}>
        <div className="container py-5">
      <div className="text-center pb-4">
        <h2>
          Clients <span style={{ color: "green" }}>feedback</span>
        </h2>
      </div>
      <div className="row">
          {
             feedbacks.map(feedback =><GetFeedback key={feedback._id} feedback={feedback}></GetFeedback>)
          }
      </div>
    </div>
    </div>
  );
};

export default Feedback;
