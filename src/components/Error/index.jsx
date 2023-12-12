import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error-container">
            <h1 className="error-container__title">404</h1>
            <p className="error-container__paragraph">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className="error-container__redirection">Retourner sur la page d’accueil</Link>
        </div>
    )
}