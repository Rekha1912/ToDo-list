import React from "react";

class Filters extends React.Component {

    constructor(props){
        super(props);
        this.deleteAllActive = this.deleteAllActive.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.selectActive = this.selectActive.bind(this);
        this.selectCompleted = this.selectCompleted.bind(this);
    }

    deleteAllActive(){
        var getchkboxes = document.getElementsByClassName("chkboxcls");
        for (var i = 0; i < getchkboxes.length; i++) {
            getchkboxes[i].checked = false;
        };
        var itemarr = this.props.items;
        var activeIndexs = [];
        for (var j = 0; j < itemarr.length; j++) {
           if(itemarr[j].completed === true){  
            activeIndexs.push(j);
           }
        };
        this.props.onDeleteAll(activeIndexs);
    }

    selectAll(){
        var getItems = document.getElementsByClassName("editbox");
        for (var i = 0; i < getItems.length; i++) {
            getItems[i].style.display = "block";
        }
    }

    selectActive(){
        this.selectAll();
        var getItems = document.getElementsByClassName("editbox");
        for (var i = 0; i < getItems.length; i++) {
            if(getItems[i].firstChild.firstChild.checked){
                getItems[i].style.display = "none";
            }
        }
    }

    selectCompleted(){
        this.selectAll();
        var getItems = document.getElementsByClassName("editbox");
        for (var i = 0; i < getItems.length; i++) {
            if(!getItems[i].firstChild.firstChild.checked){
                getItems[i].style.display = "none";
            }
        }
    }

    render(){
        return (
        <div className="filterbox">
            <button onClick={this.selectAll} className="btn">All</button>
            <button onClick={this.selectActive} className="btn">Active</button>
            <button onClick={this.selectCompleted} className="btn">Completed</button>
            <button onClick={this.deleteAllActive} className="btn">Delete completed</button>
        </div>
        );
    }
};

export default Filters;