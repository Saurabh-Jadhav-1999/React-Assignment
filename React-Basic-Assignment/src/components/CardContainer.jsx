import Card from './Card'
import users from '../data-files/users.json'
import '../css/Cards.css'

const CardContainer = () => {
    return (
        <div className='CardContainer'>
            {
                users.map((user) => {
                    return (
                        <Card user={user} />
                    )
                })
            }
        </div>
    )
}

export default CardContainer;