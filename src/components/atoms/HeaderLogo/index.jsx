import { Link } from 'react-router-dom'
import logo from '../../../assets/logo-desktop.svg'

export default function HeaderLogo() {
    return (
        <Link to="/" className="kasa-a-header__logo">
            <img src={logo} alt="logo Kasa" />
        </Link>
    )
}
