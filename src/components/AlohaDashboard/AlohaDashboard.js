import React from "react";
import Aloha from "../Aloha/Aloha"; 


class AlohaDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userArray :[
                {
                    id: 1,
                    firstName: "Tony",
                    lastName: "Stark"
                },
                {
                    id: 2,
                    firstName: "Druc",
                    lastName: "Bener"
                },
                {
                    id: 3,
                    firstName: "Peter",
                    lastName: "Parker"
                }
            ]
        }
    }

    userToAloha() {
        const {userArray} =  this.state;
        return userArray.map((user) => <Aloha key={user.id} name={user.firstName} lastName={user.lastName}/>)
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