import React from "react";
import Counter from "./Counter";

class CounterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mount: true
        }
    }

    render() {
        return (
            <>
            <button onClick={() => {this.setState({mount: !this.state.mount})}}>unmount</button>
            {this.state.mount ? <Counter /> : null}
            </>
        )
    }
}

export default CounterPage;