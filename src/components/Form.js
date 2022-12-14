import React from "react";
import "./Form.Styles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="Email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea rows="6" placeholder="Type a short message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
