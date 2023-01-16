import React from "react";
import Aloha from "../Aloha/Aloha"; 


const userArray = [
    {
        firstName: "Tony",
        lastName: "Stark"
    },
    {
        firstName: "Druc",
        lastName: "Bener"
    },
    {
        firstName: "Peter",
        lastName: "Parker"
    }
]


class AlohaDashboard extends React.Component{
    userToAloha() {
        return userArray.map((user) => <Aloha name={user.firstName} lastName={user.lastName}/>)
    }
    render() {
        return(
            <>
                {this.userToAloha()}
            </>
        )
    };
}

export default AlohaDashboard;