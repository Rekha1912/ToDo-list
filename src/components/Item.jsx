import React from "react";

class Item extends React.Component {

    constructor(props){
        super(props);
        this.state = {itemval: this.props.name};
        this.editItem = this.editItem.bind(this);
        this.showedit = this.showedit.bind(this);
        this.hideedit = this.hideedit.bind(this);
    }
    editItem(evt){
        //alert(evt.target.value);
        const val = evt.target.value;
        this.setState({
            itemval: val
        })
    }
    showedit(evt){
        evt.target.style.display = "none";
        document.getElementById('itemval'+ this.props.index).style.display = "block";
    }

    hideedit(evt){
        evt.target.style.display = "none";
        document.getElementById('itemtext'+ this.props.index).style.display = "block";
    }

    render(){
        return (
        <div>
            <div>
            <input type="checkbox" ></input>
            <div id={'itemtext'+ this.props.index} onDoubleClick={this.showedit}>{this.state.itemval}</div>
            <input id={'itemval'+ this.props.index} className='itemDisplay' type="text" onBlur={this.hideedit} onChange= {this.editItem} value={this.state.itemval} />
            <button onClick={() => this.props.onDelete(this.props.index)}><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        );
    }
};

export default Item;