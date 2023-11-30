import logo_footer from '../../assets/logo-footer.svg'

export default function Footer () {
    return (
        <div className='footer'>
            <img src={logo_footer} alt='logo-footer' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}