import React from "react";

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {props: {sendDataToParent}, state: {name}} = this;
        sendDataToParent(name);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                type="text"
                placeholder="Type your name"
                name="name"
                value={this.state.name}
                onChange={this.changeHandler}
                />
                <button>Send my name</button>
            </form>
        )
    }
}

export default HelloForm;