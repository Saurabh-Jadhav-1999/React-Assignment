import "../css/card.css"

const Card = () => {
    return (
        <div className="card">
            <img src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy" alt="{props.username}" className="card-image" />
            <div className="card-body">
            <div className="card-header">Leanne Graham</div>
                <div className="user-details">
                    <p><strong>Email: </strong>Sincere@april.biz</p>
                    <p><strong>Phone: </strong>1-770-736-8031 x56442</p>
                    <p><strong>Company: </strong>Romaguera-Crona</p>
                    <p><strong>Website: </strong>hildegard.org</p>
                    <p><strong>Address: </strong>Kulas Light, Apt. 556, Gwenborough, 92998-3874</p>
                </div>
            </div>
        </div>
    )
}

export default Card