import Navlink from '../../atoms/Navlink/index'

export default function Navbar() {
    return (
        <>
            <nav className="kasa-m-header__navbar">
                <Navlink
                    path='/'
                    className={(nav) => (nav.isActive ? 'red-underline' : 'no-underline')}
                >Accueil
                </Navlink>
                <Navlink
                    path='/about'
                    className={(nav) => (nav.isActive ? 'red-underline' : 'no-underline')}
                >A Propos
                </Navlink>
            </nav>
        </>
    )
}