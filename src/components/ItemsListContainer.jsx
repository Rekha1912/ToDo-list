import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actionCreators from '../action/actions';
import Item from './Item';
import Filters from './Filters';
  
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
  
  const ItemsList = props => {
    
    return (
      <div>
        <date/>
        <Input onAdd={props.onAdd} />
        <table>
        {props.items.map((item, index) => {
          return (
            <Item
              onDelete={props.onDelete}
              onEdit={props.onEdit}
              index={index}
              name={item.name}
              completed={item.completed}
              onComplete={props.onComplete}
              items={props.items}
            />
          );
        })}
        </table>
        <Filters items={props.items} onDeleteAll={props.onDeleteAll}/>
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
      },
      onEdit: (index, value) => {
        dispatch(actionCreators.editItem(index,value));
      },
      onComplete: (index, value) => {
        dispatch(actionCreators.completeItem(index,value));
      },
      onDeleteAll: id => {
        dispatch(actionCreators.deleteItems(id));
      }
    };
  };
  
  //container components
const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(
    ItemsList
  );

export default ItemsListContainer;