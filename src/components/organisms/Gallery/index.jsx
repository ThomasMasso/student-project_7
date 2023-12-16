import { Link } from 'react-router-dom'
import housings from '../../../data/logements.json'
import CardGallery from '../../molecules/CardGallery'
import Banner from '../../molecules/Banner'

export default function Gallery() {
    return (
        <>
            <Banner isTitle={true} />
            <main className="kasa-o-gallery">
                {housings.map((housing) => (
                    <Link to={`/housing/${housing.id}`} key={housing.id}>
                        <CardGallery
                            title={housing.title}
                            cover={housing.cover}
                        />
                    </Link>
                ))}
            </main>
        </>
    )
}
