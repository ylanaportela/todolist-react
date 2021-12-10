import { Link } from "react-router-dom";
import './menu.css'

const Menu = () => {
    return (
        <ul className='list-menu'>
            <li className='link'>
                <Link to='/'>List</Link>
            </li>
            <li className='link'>
                <Link to='/calendario'>Calendário</Link>
            </li>
        </ul>
    )
}

export default Menu