import React from "react";


class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");

        this.state = {
            count: 0
        }

        this.intervalId = null;
    }

    start = () => {
        this.intervalId = setInterval(() => {
            const {count} = this.state;

            this.setState({
                count: count+1
            })
        }, 1000)
        console.log(this.intervalId);
    }

    componentDidMount() {
        this.start()
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
        console.log("I will die");
    }

    render() {
        console.log("render");
        return(
            <>
                <h1 onClick={() => {this.setState({count: 1})}}>
                    {this.state.count}
                </h1>
                <button>click</button>
            </>
        )
    }
}

export default Counter;