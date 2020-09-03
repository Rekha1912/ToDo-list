import React from "react";
//import ReactDOM from "react-dom";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      tele: null,
      email: "",
      address: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleNumberChange(event) {
    this.setState({ tele: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  handleSubmit() {
    this.setState({ username: "", tele: null, email: "", address: ""});
    alert('Form is submitted');
    //evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Contact Form</h1>
        <p>Enter your Name:</p>
        <input type="text" name="username" onChange={this.handleNameChange} />
        <p>Enter your Phone Number:</p>
        <input type="number" name="tele" onChange={this.handleNumberChange} />
        <p> Enter your Email ID: </p>
        <input type="email" name="email" onChange={this.handleEmailChange} />
        <p> Enter your Address: </p>
        <textarea name="address" onChange={this.handleAddressChange} />
        <br />
        <button type="submit"> Submit </button>
        <button type="reset"> Reset </button>
      </form>
    );
  }
}

export default ContactForm;
