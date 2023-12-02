import { NavLink } from "react-router-dom"
import logo from '../../assets/logo-desktop.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt='logo Kasa' />
            </div>
            <nav className="header__navbar">
                <NavLink
                    to='/'
                    className={(nav) => (nav.isActive ? 'red-underline' : 'no-underline')} //https://www.geeksforgeeks.org/link-and-navlink-components-in-react-router-dom/
                >Accueil
                </NavLink>
                <NavLink
                    to='/about'
                    className={(nav) => (nav.isActive ? 'red-underline' : 'no-underline')}
                >A Propos
                </NavLink>
            </nav>
        </div>
    )
}

