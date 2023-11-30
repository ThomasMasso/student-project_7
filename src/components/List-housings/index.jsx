import { Link } from 'react-router-dom'
import housings from '../../data/logements.json'

function Housing ({ title, cover }) {
    return (
        <>
            <Link to='/'>
                <article>
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                </article>
            </Link>
        </>
    )
}

export default function Cards() {
    return (
        <>
        <main>
            {housings.map(housing => 
                <Housing
                    title={housing.title}
                    cover={housing.cover}
                    key={housing.id}
                />
            )}
        </main>
        </>
    )
}

