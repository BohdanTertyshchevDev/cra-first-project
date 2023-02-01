import React from "react";
import Tree from "./Tree";
import {MyContext} from'../contexts/userContext'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: "John",
                lastName: "Dou",
                email: "ivanov@mail.com",
                avatar: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F002%2F403%2Foriginal%2Fman-with-beard-avatar-character-isolated-icon-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-avatar&tbnid=MV9dWdy0ZY_UPM&vet=12ahUKEwi3mtOz6fP8AhVOwgIHHfBfCC8QMygDegUIARDkAQ..i&docid=j1o201ERqM1BVM&w=7973&h=7974&q=avatars&ved=2ahUKEwi3mtOz6fP8AhVOwgIHHfBfCC8QMygDegUIARDkAQ'
            }
        }
    }
    render() {
        console.log(MyContext);
        return(
            <>
            App
            <MyContext.Provider value={this.state.user}>
                <Tree />
            </MyContext.Provider>
            </>
        )
    }
}

export default App;