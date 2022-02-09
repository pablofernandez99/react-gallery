import { NavLink } from 'react-router-dom'
import './styles/Navigation.css'

const Navigation = () => (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to="/mountain">
                    Mountain
                </NavLink>
            </li>
            <li>
                <NavLink to="/beach">
                    Beaches
                </NavLink>
            </li>
            <li>
                <NavLink to="/bird">
                    Birds
                </NavLink>
            </li>
            <li>
                <NavLink to="/food">
                    Food
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default Navigation