import React from "react";
import {getUsers} from '../../api/'
import UserCards from "./UserCards";
import './style.css'


class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: []
        }
    }

    componentDidMount() {
        getUsers().then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
            console.log(results);
        });
    }

    handlSearch = (event) => {
        if(event.target.value === "") {
            this.setState({
                filteredUsers:  []
            })
            return;
        }

        const filteredUsers = this.state.users.filter(
            (user) => 
            {return user.name.last.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1}
        )

        this.setState({
            filteredUsers
        })
    }


    renderUsers = () => {
        const {users, filteredUsers} = this.state;
        return filteredUsers.length > 0
        ? filteredUsers.map((user) => <UserCards users={user}/>)
        : users.map((user) => <UserCards users={user}/>)
    }

    render() {
        const {users} = this.state;
        return(
            <>
            <ul>
            <h1>USERS</h1>

            <input
            type="text"
            autoComplete="off"
            placeholder="Поиск юзера по фамилии"
            onChange={this.handlSearch}
            />

            <section className="card-container">
                {users.length ? this.renderUsers() : <h2>Пользователи еще не загрузились</h2>}
            </section>
            </ul>
            </>
        )
    }
}

export default UserList;