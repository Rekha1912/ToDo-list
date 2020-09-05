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
        //alert(this.props.index);
        var getchkboxes = document.getElementsByClassName("chkboxcls");
        for (var i = 0; i < getchkboxes.length; i++) {
            getchkboxes[i].checked = false;
        };
        var itemarr = this.props.items;
        var activeIndexs = [];
        for (var i = 0; i < itemarr.length; i++) {
           if(itemarr[i].completed == true){  
            activeIndexs.push(i);
           }
        };
        this.props.onDeleteAll(activeIndexs);
    }

    selectAll(){
        //alert(this.props.index);
        var getItems = document.getElementsByClassName("editbox");
        for (var i = 0; i < getItems.length; i++) {
            getItems[i].style.display = "block";
        }
    }

    selectActive(){
        //alert(this.props.index);
        this.selectAll();
        var getItems = document.getElementsByClassName("editbox");
        for (var i = 0; i < getItems.length; i++) {
            if(getItems[i].firstChild.checked){
                getItems[i].style.display = "none";
            }
        }
    }

    selectCompleted(){
        //alert(this.props.index);
        this.selectAll();
        var getItems = document.getElementsByClassName("editbox");
        for (var i = 0; i < getItems.length; i++) {
            if(!getItems[i].firstChild.checked){
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