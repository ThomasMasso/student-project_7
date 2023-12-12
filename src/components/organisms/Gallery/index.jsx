import housings from '../../../data/logements.json'
import GalleryCard from '../../molecules/GalleryCard'

export default function Gallery() {
    return (
        <>
            <main className="kasa-o-gallery">
                {housings.map(housing => 
                    <GalleryCard
                        title={housing.title}
                        cover={housing.cover}
                        id={housing.id}
                    />
                )}
            </main>
        </>
    )
}