import { Link } from "react-router-dom";

export default function LinkReturnHome({ path, children }) {
    return (
        <>
            <Link to={path} className='kasa-a-link__home'>{children}</Link>
        </>
    )
}