import { useParams, Navigate } from 'react-router-dom';
import housings from '../../../data/logements.json';
import Slideshow from '../../../components/molecules/Slideshow';
import LocationInformations from '../../../components/molecules/LocationInformations';
import AuthorInformations from '../../../components/organisms/AuthorInformations';
import HousingCollapses from '../../../components/organisms/HousingCollapses';

export default function HousingLayout() {

    // récupérer l'id dans URL pour afficher bon logement
    const { id } = useParams();
    const currentHousing = housings.find((housing) => housing.id === id);

    return (
        <>
            {currentHousing ? (
                <main className="kasa-l-description">
                    <Slideshow
                        pictures={currentHousing.pictures}
                    />
                    <article className="kasa-l-description__container">
                        <section className="kasa-l-description__informations">
                            <LocationInformations housing={currentHousing} />
                            <AuthorInformations housing={currentHousing} />
                        </section>
                        <section className="kasa-l-description__dropdowns">
                            <HousingCollapses housing={currentHousing} />
                        </section>
                    </article>
                </main>
            ) : (
                <Navigate replace to="/404" />
            )}
        </>
    )
}