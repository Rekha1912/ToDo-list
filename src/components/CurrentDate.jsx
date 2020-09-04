import React, { Component } from "react";
import { render } from "react-dom";

class CurrentDate extends Component {
  constructor(props){
    super(props);
    var today = new Date();
      //var dd = String(today.getDate()).padStart(2, '0');
      //var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      //var yyyy = today.getFullYear();

      var dateToday = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
      this.state={dateToday: dateToday};
  }

  render() {
    return (
      <div>
        {this.state.dateToday}
      </div>
    );
  }

  };
export default CurrentDate;
