import React from "react";

class Aloha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGreeting: true
        }
    }

    clickHandler() {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

    render() {
        const {isGreeting} = this.state;
        const {name, lastName} = this.props;
        const greetingText = isGreeting ? 'Hello' : 'Bye';

        return <h1 onClick={() => {this.clickHandler()}}>{greetingText} {name} {lastName}!</h1>
    }

}

export default Aloha;