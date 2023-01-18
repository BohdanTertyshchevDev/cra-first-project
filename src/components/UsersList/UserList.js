import React from "react";
import {getUsers} from '../../api/'
import UserCards from "./UserCards";


class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        getUsers().then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
        });
    }


    render() {
        const {users} = this.state;
        return(
            <>
            <ul>
            <h1>Hello</h1>
            {users.length > 0 ? <UserCards users={users[0]}/> : <h2>Пользователи еще не загрузились</h2>}
            </ul>
            </>
        )
    }
}

export default UserList;