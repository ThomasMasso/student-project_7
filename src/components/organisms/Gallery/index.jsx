import { Link } from 'react-router-dom'
import housings from '../../../data/logements.json'
import CardTitleImg from '../../molecules/CardTitleImg'

export default function Gallery() {
    return (
        <>
            <main className="kasa-o-gallery">
                {housings.map(housing =>
                    <Link 
                        to={`/housing/${housing.id}`}
                        key={housing.id}
                    >
                            <CardTitleImg
                            title={housing.title}
                            cover={housing.cover}
                            />
                    </Link>
                    
                )}
            </main>
        </>
    )
}