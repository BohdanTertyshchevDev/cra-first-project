import React from "react";
import Aloha from "../Aloha/Aloha"; 


class AlohaDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userArray :[
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
        }
    }

    userToAloha() {
        const {userArray} =  this.state;
        return userArray.map((user) => <Aloha name={user.firstName} lastName={user.lastName}/>)
    }

    sortUser() {
        const {userArray} =  this.state;
        const newArray = [...userArray];
        newArray.sort((a, b) =>{
            if(a.firstName > b.firstName) {
                return 1;
            } else {
                return -1;
            }
        });
        this.setState({
            userArray: newArray
        })
    }

    render() {
        return(
            <>
                <button onClick={() => {this.sortUser()}}>Sort</button>
                {this.userToAloha()}
            </>
        )
    };
}

export default AlohaDashboard;