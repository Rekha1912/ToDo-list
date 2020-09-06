import React from "react";

class Input extends React.Component {
    constructor(props) {
      super(props);
        this.state = { name: ""};
        this.addItemWithkey = this.addItemWithkey.bind(this);
    }
    handleChangeName(event) {
      this.setState({ name: event.target.value });
    }

    addItem() {
      if (this.state.name !== "") {
        this.props.onAdd(this.state.name);
        this.setState({ name: "" });
      }
    }

    //used for enter key event

    addItemWithkey(e) {
      if((e.which || e.keyCode) == 13){ 
        if (this.state.name !== "") {
          this.props.onAdd(this.state.name);
          this.setState({ name: "" });
        }
    }
  }

    render() {
      return (
        <div>
          <input className="boxstyle"
            placeholder= "Add Task !!!" onKeyUp={this.addItemWithkey} onChange={this.handleChangeName.bind(this)} value={this.state.name}
          />
          <button onClick={() => this.addItem()} className="btn"><i class="fas fa-plus-circle"></i></button>
        </div>
      );
    }
  }

export default Input;