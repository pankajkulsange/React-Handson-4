import React, { useEffect, useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  // name
  const [isEnable, setIsEnable] = useState(true);
  const [name, setName] = useState("label");
  function handleName() {
    setIsEnable(!isEnable);
  }
  useEffect(() => {
    return () => {
      isEnable ? setName("label upLift1") : setName("label");
    };
  }, [isEnable]);
  // age
  const [isAge, setIsAge] = useState(true);
  const [age, setAge] = useState("label");
  function handleAge() {
    setIsAge(!isAge);
  }
  useEffect(() => {
    return () => {
      isAge ? setAge("label upLift1") : setAge("label");
    };
  }, [isAge]);
  // course
  const [isCou, setCou] = useState(true);
  const [cour, setCour] = useState("label");
  function handleCourse() {
    setCou(!isCou);
  }
  useEffect(() => {
    return () => {
      isCou ? setCour("label upLift2") : setCour("label");
    };
  }, [isCou]);
  // batch
  const [isBat, setIsBat] = useState(true);
  const [batc, setBatc] = useState("label");
  function handleBatch() {
    setIsBat(!isBat);
  }
  useEffect(() => {
    return () => {
      isBat ? setBatc("label upLift2") : setBatc("label");
    };
  }, [isBat]);
  return (
    <div>
      <div className="ct-container">
        <div className="ct-wrapper">
          <div className="inpt-wrapper">
            <input className="input" type="text" onClick={handleName} />
            <label className={name}>Name</label>
          </div>
          <div className="inpt-wrapper">
            <label className={age}>Age</label>
            <input className="input" type="number" onClick={handleAge} />
          </div>
          <div className="inpt-wrapper">
            <label className={cour}>Course</label>
            <input className="input" type="text" onClick={handleCourse} />
          </div>
          <div className="inpt-wrapper">
            <label className={batc}>Batch</label>
            <input className="input" type="text" onClick={handleBatch} />
          </div>
        </div>
      </div>
      <div className="ct-footer">
        <div className="ct-footer-wrapper">
          <button className="ct-btn-light dark-bg">Cancel</button>
          <button className="ct-btn-light">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
