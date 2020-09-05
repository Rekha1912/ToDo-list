import React, { Component } from "react";
import { render } from "react-dom";

class CurrentDate extends Component {
  constructor(props){
    super(props);

      var today = new Date();
        var weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";

        var dayToday = weekday[today.getDay()];
        var dateToday = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();

    this.state={dayToday: dayToday, dateToday: dateToday};
  }

  render() {
    return (
      <div>
        {this.state.dayToday}  < br/>
        {this.state.dateToday}
      </div>
    );
  }
  };
export default CurrentDate;

