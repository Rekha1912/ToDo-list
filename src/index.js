/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todolist from './components/todolist';


ReactDOM.render(
  <div>
    <Todolist/>
  </div>,
  document.getElementById('root')
);

*/

import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

//action creator
const addItem = (name) => {
  return {
    type: "ADD_ITEM",
    item: {
      name: name
    }
  };
};

const deleteItem = index => {
  return {
    type: "DELETE_ITEM",
    index: index
  };
};

//reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

//store
var store = createStore(reducer);

//presentational components
const Item = props => {
  return (
    <div>
      <div>
        <input type="checkbox" ></input>
        {props.name}
        <button onClick={() => props.onDelete(props.index)}><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  );
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: ""};
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  addItem() {
    if (this.name == "") {
      return;
    } 
    else{
      this.props.onAdd(this.state.name);
      this.setState({ name: "" });
    }
  }
  render() {
    return (
      <div>
        <input 
          placeholder= "Add Task !!!"
          onChange={this.handleChangeName.bind(this)}
          value={this.state.name}
        />
        <button onClick={() => this.addItem()}><i class="fas fa-plus"></i></button>
      </div>
    );
  }
}

const ItemsList = props => {
  return (
    <div>
      <Input onAdd={props.onAdd} />
      {props.items.map((item, index) => {
        return (
          <Item
            onDelete={props.onDelete}
            index={index}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name) => {
      dispatch(addItem(name));
    },
    onDelete: id => {
      dispatch(deleteItem(id));
    }
  };
};

//container components
const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ItemsList
);

const App = () => {
  return (
    <div>
      <ItemsListContainer />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
