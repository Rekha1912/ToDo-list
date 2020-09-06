import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actionCreators from '../action/actions';
import Input from '../components/Input';
import Item from '../components/Item';
import Filters from '../components/Filters';
  
  class ItemsList extends Component{

    constructor(props){
      super(props);
      this.state = {
        items: this.props.items
      }
      this.filterUpdate = this.filterUpdate.bind(this);
    }

    componentWillReceiveProps(nextProps){
      this.setState({
        items: nextProps.items
      });
    }

    // checks the type of filter and updates the state

    filterUpdate(type){
      if(type === "completed"){

        const onlyCompleted = [];
        const getItems = this.props.items;
        for (var i = 0; i < getItems.length; i++) {
          if(getItems[i].completed){
            onlyCompleted.push(getItems[i]);
          }
        }
        this.setState({
          items: onlyCompleted
        });
      } else if(type === "active"){

        const onlyActive = [];
        const getItems = this.props.items;
        for (var i = 0; i < getItems.length; i++) {
          if(!getItems[i].completed){
            onlyActive.push(getItems[i]);
          }
        }
        this.setState({
          items: onlyActive
        });
      }else{
        this.setState({
          items: this.props.items
        });
      }
    }

    render() {
      return (
      <div>
        <date/>
        <Input onAdd={this.props.onAdd} />
        <table>
        {this.state.items.map((item, index) => {
          return (
            <Item
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
              index={index}
              name={item.name}
              completed={item.completed}
              onComplete={this.props.onComplete}
              items={this.props.items}
            />
          );
        })}
        </table>
        <Filters items={this.props.items} filterUpdate={this.filterUpdate} onDeleteAll={this.props.onDeleteAll}/>
      </div>
    );
  }
}
  
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