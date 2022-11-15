import React, { Component } from "react";
import "./residenceDoc.css";

class ResidenceDocument extends Component {
  render() {
    const handle = () => {
      let output = document.getElementById("output");
      let today = new Date();
      let arriveDay = new Date(document.getElementById("date-1").value);
      function calcDate(date1, date2) {
        var diff = Math.floor(date1.getTime() - date2.getTime());
        if (diff) {
          var day = 1000 * 60 * 60 * 24;
          var days = Math.floor(diff / day);
          var months = Math.floor(days / 31);
          var years = Math.floor(months / 12);
          var message = date2.toDateString();    
          message = " You have been here for: ";
          message += `<span>${days}</span> days, `;
          message += `<span>${months}</span> months, `;
          message += `<span>${years}</span> year`;
          return (output.innerHTML = message);
        } else {
          output.innerHTML = "Please select a valid date";
        }
      }

      calcDate(today, arriveDay);
    };

    return (
      <>
        <h1>Residence documents</h1>

        <div class="container1">
          <p className="dateText">
            If you want to know how long you have been in Norway, just enter the
            date you arrived.
          </p>
          <div className="inp-wrapper">
            <div className="date-wrapper">
              <label className="lableTilte" for="date-1">
                Enter a date
              </label>
              <input type="date" id="date-1" />
              <button className="submitBtn" onClick={handle} id="submit">
                Submit
              </button>
            </div>
          </div>

          <div id="output">Select the dates to get started</div>
        </div>
      </>
    );
  }
}

export default ResidenceDocument;
