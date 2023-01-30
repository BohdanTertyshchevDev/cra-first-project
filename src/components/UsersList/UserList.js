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
            userCount: 15,
            page: 1,
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        const {userCount, page} = this.state;
        this.loadUsers(userCount, page);
    }

    componentDidUpdate(prevProps, prevState) {
        const {userCount, page} = this.state;
        if(prevState.page !== page) {
            this.loadUsers(userCount, page);
        }

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

    prevButtonHendler = () => {
        this.setState({
            page: this.state.page > 1 ? this.state.page - 1 : this.state.page
        })
    }

    nextButtonHendler = () => {
        this.setState({
            page: this.state.page + 1 
        })
    }


    loadUsers = (userCount, page) => {
        getUsers(userCount, page).then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
        })
        .catch((error) => {
            this.setState({
                isError: true
            })
        })
        .finally(() => {
            this.setState({
                isLoading: false
            })
        })
        ;
    }


    renderUsers = () => {
        const {users, filteredUsers} = this.state;
        return filteredUsers.length > 0
        ? filteredUsers.map((user) => <UserCards key={user.login.uuid} users={user}/>)
        : users.map((user) => <UserCards key={user.login.uuid} users={user}/>)
    }

    render() {
        const {users, isError, isLoading} = this.state;
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

            <button onClick={this.prevButtonHendler}>Previous page</button>
            <button onClick={this.nextButtonHendler}>Next page</button>


            {isError && <h2>Произошла ошибка</h2>}
            {isLoading && <h2>Пользователи еще не загрузились</h2>}

            <section className="card-container">
                {users.length ? this.renderUsers() : null}
            </section>
            </ul>
            </>
        )
    }
}

export default UserList;