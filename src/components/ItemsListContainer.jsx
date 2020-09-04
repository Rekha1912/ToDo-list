import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actionCreators from '../action/actions';
import Item from './Item';


  
  class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: ""};
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
        dispatch(actionCreators.addItem(name));
      },
      onDelete: id => {
        dispatch(actionCreators.deleteItem(id));
      }
    };
  };
  
  //container components
const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(
    ItemsList
  );

export default ItemsListContainer;