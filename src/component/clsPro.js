import React from "react";

class ClsPro extends React.Component{
    // this is class using construction we add props
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='Box'>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
            </div>
        );
    }
}

export default ClsPro;