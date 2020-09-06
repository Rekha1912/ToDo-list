import React from "react";

class Filters extends React.Component {

    constructor(props){
        super(props);
        this.deleteAllActive = this.deleteAllActive.bind(this);
        this.parentFilterCompleted = this.parentFilterCompleted.bind(this);
        this.parentFilterActive = this.parentFilterActive.bind(this);
        this.parentFilterAll = this.parentFilterAll.bind(this);
    }

    // Delete completed tasks

    deleteAllActive(){
        var itemarr = this.props.items;
        var activeIndexs = [];
        for (var j = 0; j < itemarr.length; j++) {
           if(itemarr[j].completed === true){  
            activeIndexs.push(j);
           }
        };
        this.props.onDeleteAll(activeIndexs);
    }

    //Display all completed tasks 
    
    parentFilterCompleted(){
        this.props.filterUpdate("completed");
    }

    //Display only active tasks

    parentFilterActive(){
        this.props.filterUpdate("active");
    }

    //Display all tasks

    parentFilterAll(){
        this.props.filterUpdate("all");
    }

    render(){
        return (
        <div className="filterbox">
            <button onClick={this.parentFilterAll} className="btn">All</button>
            <button onClick={this.parentFilterActive} className="btn">Active</button>
            <button onClick={this.parentFilterCompleted} className="btn">Completed</button>
            <button onClick={this.deleteAllActive} className="btn">Delete completed</button>
        </div>
        );
    }
};

export default Filters;