import Navbar from '../../molecules/HeaderNavbar'
import HeaderLogo from '../../atoms/HeaderLogo'

export default function Header() {
    return (
        <div className="header">
            <HeaderLogo />
            <Navbar />
        </div>
    )
}
