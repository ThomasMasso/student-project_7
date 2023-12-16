import { Link } from 'react-router-dom'

export default function LinkReturnHome({ path, children }) {
    return (
        <>
            <Link to={path} className="link-home">
                {children}
            </Link>
        </>
    )
}
