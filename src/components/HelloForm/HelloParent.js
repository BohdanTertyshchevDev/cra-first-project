import React from "react";
import HelloForm from "./HelloForm";

class HelloParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    getStateFromChild = (data) => {
        this.setState({
            name: data
        })
    }

    render() {
        const {name} = this.state;
        return(
            <>
            <HelloForm sendDataToParent = {this.getStateFromChild} />
            {name ? <div>Hello, {name}</div> : <div>Введите свое имя в форму</div>}
            </>
        )
    }
}

export default HelloParent;