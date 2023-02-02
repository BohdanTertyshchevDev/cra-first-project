import React from "react";
import {getUsers} from '../../api/';
import UserCard from "./UserCard";
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

    handleSearch = (event) => {
        // 1
        // якщо в інпутику нічого немає, то чистимо масив відфільтрованих юзерів
        if(event.target.value === "") {
            this.setState({
                filteredUsers: []
            })
            return;
        }

        // 2
        // Фільтруємо по прізвищу
        const searchValue = event.target.value; 
        const filteredUsers = this.state.users.filter(
            (user) => 
            {return user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1}
        );

        // 3
        // кладемо в стейт відфільтрованих юзерів
        this.setState({
            filteredUsers: filteredUsers
        })
    }

    setUserCount = (event) => {
        this.setState({
            userCount: event.target.value
        })
    }

    prevBtnHandler = () => {
        this.setState({
            page: this.state.page > 1 ? this.state.page - 1 : this.state.page
        })
    }

    nextBtnHandler = () => {
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
        ? filteredUsers.map((user) => <UserCard key={user.login.uuid} user={user}/>) 
        : users.map((user) => <UserCard key={user.login.uuid} user={user}/>)
    }

    render() {
        const {users, isError, isLoading} = this.state;
        return(
            <>
            
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
            onChange={this.handleSearch}
            />
            <button onClick={this.prevBtnHandler}>Previous page</button>
            <button onClick={this.nextBtnHandler}>Next page</button>

            {isError && <h2>Произошла ошибка!</h2>}
            {isLoading && <h2>Пользователи еще не загрузились!</h2>}
            <section className="card-container">
                {users.length ? this.renderUsers() : null}
            </section>
            
            </>
        )
    }
}

export default UserList;