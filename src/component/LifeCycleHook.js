import React from "react";
import Child from "./Child";
// Child.js and User.js and Test.js part of this file
class LifeCycleHook extends React.Component{
    constructor(){
        super();
        // state defined

        this.state = {
            data:null,
        };
        console.log("Constructed called ")
    }
    componentDidMount(){
        console.log("componentDidMount called ")
        alert("component Mounted")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called ")
        alert("component Update")
    }

    render(){
        console.log("render called ")
        return(
            <div>
            <h1>Life Cycle Hook</h1>
            {/* Anonymous Function */}
            <button onClick={()=>{
                this.setState ({data:"Updated"})
                }}>Call Me</button>

                {/* child.js use here */}
                <Child data={this.state.data} />
            </div>
        );
    }
}

export default LifeCycleHook;