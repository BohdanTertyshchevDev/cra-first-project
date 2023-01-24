import React from "react";
import {getUsers} from '../../api/'
import UserCards from "./UserCards";
import './style.css'


class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100
        }
    }

    componentDidMount() {
        getUsers(this.state.userCount).then((data) => {
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

    setUserCount = (event) => {
        this.setState({
            userCount: event.target.value
        })
    } 


    loadUsers = (event) => {
        getUsers(this.state.userCount).then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
        });
    }


    renderUsers = () => {
        const {users, filteredUsers} = this.state;
        return filteredUsers.length > 0
        ? filteredUsers.map((user) => <UserCards key={user.login.uuid} users={user}/>)
        : users.map((user) => <UserCards key={user.login.uuid} users={user}/>)
    }

    render() {
        const {users} = this.state;
        return(
            <>
            <ul>
            <h1>USERS</h1>
            <input
            type="number"
            min={1}
            max={100}
            onChange={this.setUserCount}
            />
            <button onClick={this.loadUsers}>Загрузить юзеров</button>
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