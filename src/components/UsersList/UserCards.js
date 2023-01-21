import './style.css';

function UserCards(props) {
    const {users: {name: {first: firstName, last: lastName}, email, picture: {large: imgSrc}}} = props;

    return (
        <div className='card-wrapper'>
            <img src={imgSrc} alt={`${firstName} ${lastName}`} className="user-img"></img>
            <h1>{firstName} {lastName}</h1>
            <p>{email}</p>
        </div>
    )
}

export default UserCards;