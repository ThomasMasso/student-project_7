import LogoFooter from '../../../assets/logo-footer.svg'
import FooterLogo from '../../atoms/FooterLogo/index'
import FooterCopyrightText from '../../atoms/FooterCopyrightText/index'

export default function Footer() {
    return (
        <div className="footer">
            <FooterLogo cover={LogoFooter} title="logo kasa footer" />
            <FooterCopyrightText>
                © 2020 Kasa. All rights reserved
            </FooterCopyrightText>
        </div>
    )
}
