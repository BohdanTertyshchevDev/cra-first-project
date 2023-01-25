import React from "react";

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    changeHendler = ({target: {value, name}}) => {
        this.setState({
            [name] : value
        })
    }

    submitHendler = (event) => {
        event.preventDefault();
        const {props: {sendDataToParent}, state: {name}} = this;
        sendDataToParent(name);
    }

    render() {
        return(
            <form onSubmit={this.submitHendler}>
                <input 
                type="text"
                placeholder="Type your name"
                name="name"
                value={this.state.name}
                onChange={this.changeHendler}
                />
                <button>Sent my name</button>
            </form>
        )
    }
}

export default HelloForm;