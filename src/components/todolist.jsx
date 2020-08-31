import React, { Component } from "react";

class TodoList extends Component {
    render() {
        return(
            <div className="todoMain">
                <div className="header">
                    <form>
                        <input placeholder="Enter task"></input>
                        <button type="submit"> Add </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;
