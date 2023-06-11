import React from "react";

class User extends React.Component{
   componentWillUnmount(){
    alert("User Deleted")
    console.log("componentWillUnmount called")
   }
    render(){
        return(
            <div>
            <ul>
                <li>Name : Pratiksha</li>
                <li>Age : 21</li>
                <li>City : Nagpur</li>
            </ul>
            </div>
        );
    }
}

export default User;