import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(props){
     console.log("componentWillReceiveProps in the Child")
    }
    render(){
        console.log("render called in child")
        return(
            <div>
            <h1>{this.props.data}</h1>
            </div>
        );
    }
}

export default Child;