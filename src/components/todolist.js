import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    render() {
        return(
            <div className="todoMain">
                <div className="header">
                    <form onSubmit ={this.addItem}>
                        <input ref={(a) => this.inputElement = a}
                                placeholder="Enter task"></input>
                        <button type="submit"> Add </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;
