import Navlink from '../../atoms/Navlink/index'

export default function Navbar() {
    return (
        <>
            <nav className="header__navbar">
                <Navlink
                    path="/"
                    className={(nav) =>
                        nav.isActive
                            ? 'header__link red-underline'
                            : 'header__link no-underline'
                    }
                >
                    Accueil
                </Navlink>
                <Navlink
                    path="/about"
                    className={(nav) =>
                        nav.isActive
                            ? 'header__link red-underline'
                            : 'header__link no-underline'
                    }
                >
                    A Propos
                </Navlink>
            </nav>
        </>
    )
}
