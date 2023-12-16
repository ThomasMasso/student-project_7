import ErrorTitle from '../../atoms/ErrorTitle'
import LinkReturnHome from '../../atoms/LinkReturnHome'

export default function Error() {
    return (
        <div className="kasa-m-error__container">
            <ErrorTitle>404</ErrorTitle>
            <div className="kasa-m-error__paragraph">
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <LinkReturnHome path="/">
                Retourner sur la page d’accueil
            </LinkReturnHome>
        </div>
    )
}
