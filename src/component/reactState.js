import React from "react";

export default class ReactState extends React.Component{
    constructor (props){
        super(props)

        this.state = {
            roll : this.props.roll,
            name : this.props.name,
        };
      
    }
   
   
    render(){
        return ( 
     <div>
        <h1>{this.state.roll}</h1>
        <h1>{this.state.name}</h1>
        {/* Anonymous Function  */}
        <button onClick={ ()=>{ this.setState({roll:15, name:"prachi"}) } }>Update Me</button>

        </div>
        );
    }
}
