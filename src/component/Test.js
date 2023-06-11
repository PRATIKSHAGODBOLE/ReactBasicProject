import React from "react";

class Test extends React.Component{
    constructor(){
        super()

        this.sate={
            toggle:true,
        };
    }
    
    render(){
        return(
            <div>
            <h1>React component will unmount</h1>
            {/* age this.state.toggle hai to user component ko dikhao  */}
            {this.state.toggle ? <User /> : null}
            {/* ! lagya hai button but click krte hi data remove ho jayega (means unmount hona) */}
            <button onClick={()=>{this.State({toggle : !this.state.toggle})}}></button>
            </div>
        );
    }
}

export default Test;