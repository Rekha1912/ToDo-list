import React from "react";

class Filters extends React.Component {

    constructor(props){
        super(props);
        this.deleteAllActive = this.deleteAllActive.bind(this);
 
    }

    deleteAllActive(){
        //alert(this.props.index);
        this.props.items.map((item, index) => {
           if(item.completed == true){
            this.props.onDelete(index);
           }
        });
    }

    render(){
        return (
        <div>
            <button onClick={this.deleteAllActive} className="btn">Delete completed</button>
        </div>
        );
    }
};

export default Filters;