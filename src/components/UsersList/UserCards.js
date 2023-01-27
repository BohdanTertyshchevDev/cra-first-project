import PropTypes from 'prop-types';
import React from 'react';
import './style.css';


class UserCards extends React.Component {
    render() {
        const {users: {name: {first: firstName, last: lastName}, email, picture: {large: imgSrc}}} = this.props;

        return (
            <div className='card-wrapper'>
                <img src={imgSrc} alt={`${firstName} ${lastName}`} className="user-img"></img>
                <h1>{firstName} {lastName}</h1>
                <p>{email}</p>
            </div>
        )
    }
}

UserCards.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string,
            last: PropTypes.string
        }),
        email: PropTypes.string.isRequired,
        picture: PropTypes.shape({
            large: PropTypes.string.isRequired
        })
    }).isRequired
}

export default UserCards;