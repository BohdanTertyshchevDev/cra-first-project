import React, { Component } from 'react';

class TVLoader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tv: [],
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
        fetch('./tv.json')
        .then((response) => response.json())
        .then((tv) => {
            this.setState({
                tv
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
    }

    render() {
        const {tv, isLoading, isError} = this.state;
        return (
            <>
            {isLoading && <div>Loading.....</div>}
            {isError && <div>Error !</div>}

            <ul>
                {tv.map((tv, index) => 
                    <li key={index}>АКЦІЯ!!! {tv.brand} {tv.model}. Price: {tv.price}</li>
                )}
            </ul>
            </>
        );
    }
}

export default TVLoader;