import React from "react";
import "./section2.css";

const Section2 = () => {
  return (
    <div className="Section_2">
      <div className="head-text-outer">
        <div className="head-text">
          <h1 className="head-text">Why You Should Be Investing?</h1>
        </div>
      </div>

      <div className="section_2_inside_up">
        <div className="highreturn-box">
          <div className="image-box">
            <img
              src="../../returns.png"
              alt=""
              style={{ width: "40%", height: "34%" }}
            />
          </div>

          <div className="inner-text">
            <h2 className="t1">High Returns</h2>
          </div>
        </div>
        <div className="beat-inflation">
          <div className="image-box">
            <img src="../../inflation.png" alt="" />
          </div>
          <div className="inner-text">
            <h2 className="t1">Beat Inflation</h2>
          </div>
        </div>

        <div className="tax-benifit">
          <div className="image-box">
            <img
              src="../../tax.png"
              alt=""
              style={{ width: "55%", height: "55%" }}
            />
          </div>
          <div className="inner-text">
            <h2 className="t1">Get tax benefits</h2>
          </div>
        </div>

        <div className="section_2_inside_down">
          <div className="additional-income">
            <div className="image-box">
              <img src="../../passive.png" alt="" />
            </div>
            <div className="inner-text">
              <h2 className="t1">Earn additional income</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section2;
