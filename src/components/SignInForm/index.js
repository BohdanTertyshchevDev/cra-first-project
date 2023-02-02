import React from 'react';
import './style.css'

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            isEmailValid: true
        }
    }

    universalChangeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        if(!this.state.email.includes('@')) {
            this.setState({
                isEmailValid: false
            })
        }
    }

    render() {
        const {email, pass, isEmailValid} = this.state;
        return (
            <form className="form-wrapper flex-column" onSubmit={this.submitHandler}>
                <label className='flex-column'>
                    Your email: 
                    <input className={isEmailValid ? '' : 'invalid'} onChange={this.universalChangeHandler} name='email' type='text' placeholder='test@gmail.com' value={email} />
                </label>
    
                <label className='flex-column'>
                    Your password:
                    <input onChange={this.universalChangeHandler} value={pass} name='pass' type='password' />
                </label>
    
                <button type='submit'>Submit form</button>
            </form>
        )
    }
}

export default SignInForm;

/*
Написати компоненту з формою, що складається з одного інпута і кнопки відправки.
За натисненням на кнопку поряд з формою виникає напис, який вітає коритсувача тим ім'ям, яке було введено інпут.

Задача (*): 
Форма, яка вітається повинна бути всередині батьківскої форми.
В батьківській формі зберігається ім'я користувача у стейті.

Тобто, форма у якій запитується ім'я користувача – дочірня.
Форма, у якій відображається вітання ім'я користувача – батьківська.
Дитина повинна передати батьку name юзера, щоб він зміг з ним привітатися.
*/