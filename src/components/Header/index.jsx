import { Link } from "react-router-dom"
import logo from '../../assets/logo-desktop.svg'

function NavLinkUnderline({ path, className, name }) {
    return (
        <>
            <Link
                to={path}
                className={className}
            >{name}</Link>
        </>
    )
}

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt='logo Kasa' />
            </div>
            <div className="header__navbar">
                <NavLinkUnderline path='/' className='red-underline' name='Accueil' />
                <NavLinkUnderline path='/about' className='no-underline' name='A Propos' />
            </div>
        </div>
    )
}

