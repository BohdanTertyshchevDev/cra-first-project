import React from "react";

class Aloha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGreeting: true
        }
    }

    clickHendler() {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

    render() {
        const {isGreeting} = this.state;
        const {name, lastName} = this.props;
        const greetingText = isGreeting ? 'Hello': 'Bye';  

        return <h1 onClick={() => {this.clickHendler()}}>{greetingText} {name} {lastName}</h1>
    }
}

export default Aloha;