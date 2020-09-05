import React from "react";

class Item extends React.Component {

    constructor(props){
        super(props);
        //alert(this.props.name);
        this.state = {itemval: this.props.name, checked: this.props.completed};
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
        this.showedit = this.showedit.bind(this);
        this.hideedit = this.hideedit.bind(this);
    }
    componentDidUpdate(prevProps){
        if(prevProps.name !== this.props.name){
        this.setState({
            itemval: this.props.name//,
            //checked: this.props.completed
        });
    }
    }

    editItem(evt){
        //alert(this.props.index);
        const val = evt.target.value;
        this.setState({
            itemval: val
        });
        this.props.onEdit(this.props.index, val);
    }
    deleteItem(){
        //alert(this.props.index);
        this.props.onDelete(this.props.index);
    }
    completeItem(evt){
        let val = false;
        if (evt.target.checked == true){
            val = true;
          } else {
             val = false;
          }
        this.props.onComplete(this.props.index, val);
    }

    showedit(evt){
        evt.target.style.display = "none";
        document.getElementById('itemval'+ this.props.index).style.display = "block";
        document.getElementById('itemval'+ this.props.index).focus();
    }

    hideedit(evt){
        evt.target.blur();
        evt.target.style.display = "none";
        document.getElementById('itemtext'+ this.props.index).style.display = "block";
    }

    render(){
        return (
        <div>
        <div class="editbox">
            <input type="checkbox" onClick={this.completeItem} className="chkboxcls"></input>
            <div id={'itemtext'+ this.props.index} onDoubleClick={this.showedit} title="Double click to Edit!" className="itemadd">{this.state.itemval}</div>
            <input id={'itemval'+ this.props.index} className="itemdisplay" type="text" onBlur={this.hideedit} onChange= {this.editItem} value={this.state.itemval} />
            <button onClick={this.deleteItem} className="btn"><i class="fas fa-minus-circle"></i></button>
        </div>
        </div>
        );
    }
};

export default Item;
