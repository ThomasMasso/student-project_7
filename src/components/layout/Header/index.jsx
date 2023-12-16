import Navbar from '../../molecules/HeaderNavbar'
import HeaderLogo from '../../atoms/HeaderLogo'

export default function Header() {
    return (
        <div className="kasa-o-header">
            <HeaderLogo />
            <Navbar />
        </div>
    )
}
