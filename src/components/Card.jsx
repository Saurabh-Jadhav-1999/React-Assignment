import '../css/Card.css'

const Card = (props) => {
    const user = props.user

    return (
        <div className="card">
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="{props.username}" className="card-image" />
            <div className="card-body">
                <div className="card-header">{user.name}</div>
                <div className="user-details">
                    <p><strong>Email: </strong>{user.email}</p>
                    <p><strong>Phone: </strong>{user.phone}</p>
                    <p><strong>Company: </strong>{user.company.name}</p>
                    <p><strong>Website: </strong>{user.website}</p>
                    <p><strong>Address: </strong>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                </div>
            </div>
        </div>
    )
}

export default Card