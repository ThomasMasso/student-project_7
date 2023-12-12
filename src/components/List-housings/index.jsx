import { Link } from 'react-router-dom'
import housings from '../../data/logements.json'

function Housing ({ title, cover, id }) {
    return (
        <>
            <Link to={`/housing/${id}`}>
                <article className='housing'>
                    <img src={cover} alt={title} className='housing__image' />
                    <h3 className='housing__title'>{title}</h3>
                </article>
            </Link>
        </>
    )
}

export default function Cards() {
    return (
        <>
        <main className='housings-container'>
            {housings.map(housing => 
                <Housing
                    title={housing.title}
                    cover={housing.cover}
                    id={housing.id}
                />
            )}
        </main>
        </>
    )
}

