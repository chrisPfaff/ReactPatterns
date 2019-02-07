import React from "react";
import { warm, cold } from "../img/images";
import "../styles/app.scss";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const SeasonDisplay = props => {
  return (
    <div className="Display">
      <header className="Display-header">
        <span>
          {props.location ? `You are in the ${props.location}` : `...loading`}
          <br />
        </span>
      </header>
      {props.month > 8 || props.month < 3 ? (
        <img src={cold} alt="girl who is cold" />
      ) : (
        <img src={warm} alt="sunset on beach" />
      )}
      <footer className="Display-footer">
        {props.month ? `It is ${months[props.month]}` : `...loading`}
      </footer>
    </div>
  );
};

export default SeasonDisplay;
