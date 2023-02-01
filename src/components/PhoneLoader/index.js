import React, { Component } from 'react';

class PhoneLoader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phones: [],
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        this.load();
    }

    load = () => {
        fetch('./phones.json')
        .then((response) => response.json())
        .then((phones) => {
            this.setState({
                phones
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
        const {phones, isLoading, isError} = this.state;
        return (
            <>
            {isLoading && <div>Loading......</div>}
            {isError && <div>Error!</div>}
            

            <ul>
                {phones.map((phone, index) => 
                    <li key={index}>{phone.brand} {phone.model}. Price: {phone.price}</li>
                )}
            </ul>
            </>
        );
    }
}

export default PhoneLoader;
