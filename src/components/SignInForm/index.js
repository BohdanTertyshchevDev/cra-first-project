import React from 'react';
import './style.css';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            isEmailValid: true
        }
    }
    

    universalChangeHendler = ({target: {value, name}}) => {
        this.setState({
            [name] : value
        })
    }


    submitHendler = (event) => {
        event.preventDefault();
        if(!this.state.email.includes('@')) {
            this.setState({
                isEmailValid: false
            })
        }
    }

    render() {
        const {email, pass, isEmailValid} = this.state;
        return(
            <form className="form-wrapper flex-column" onSubmit={this.submitHendler}>
                <label className='flex-column'>
                    Enter your email
                    <input className={isEmailValid ? '' : 'invalid'} onChange={this.universalChangeHendler} name="email" type= "text" placeholder='kfjgfjg@gamil.com' value={email}/>
                </label>
                <label className='flex-column'>
                    Enter your password 
                    <input onChange={this.universalChangeHendler} value={pass} name="pass" type = "password"/>
                </label>
                <button type='submit'>Submit form</button>
            </form>
        )
    }
}

export default SignInForm;