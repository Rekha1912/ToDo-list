import React from "react";
import equal from 'fast-deep-equal';

class Item extends React.Component {

    constructor(props){
        super(props);
        this.state = {itemval: this.props.name, checked: this.props.completed};
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
        this.showedit = this.showedit.bind(this);
        this.hideedit = this.hideedit.bind(this);
    }

    componentDidUpdate(prevProps){
        if(!equal(this.props.name, prevProps.name)){
            this.setState({
                itemval: this.props.name,
                checked: this.props.completed
            });
        }
        if(!equal(this.props.completed, prevProps.completed)){
            this.setState({
                itemval: this.props.name,
                checked: this.props.completed
            });
        }
    }

    editItem(evt){
        const val = evt.target.value;
        this.setState({
            itemval: val
        });
        this.props.onEdit(this.props.index, val);
    }

    deleteItem(evt){
        this.props.onDelete(this.props.index);
    }

    completeItem(evt){
        let val = false;
        if (evt.target.checked){
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
        let txtClass = "itemadd";
        if(this.state.checked){
            txtClass = "checkeditem";
        }
        return (
        <tr class="editbox">
            <td>
                <input id={'itemchkbox'+ this.props.index} type="checkbox" onClick={this.completeItem} className="chkboxcls" checked={this.state.checked}></input>
            </td>
            <td>
                <span id={'itemtext'+ this.props.index} onDoubleClick={this.showedit} title="Double click to Edit!" className={txtClass}>{this.state.itemval}</span>
                <input id={'itemval'+ this.props.index} className="itemdisplay" type="text" onBlur={this.hideedit} onChange= {this.editItem} value={this.state.itemval} />
            </td>
            <td>
                <button onClick={this.deleteItem} className="btn"><i class="fas fa-minus-circle"></i></button>
            </td>    
        </tr>
        );
    }
};

export default Item;
