import { useParams } from 'react-router-dom';
//import { useState } from "react";
import housings from '../../data/logements.json';
import Slideshow from '../../components/Housing/Slideshow';
import Tag from '../../components/Housing/Tag';
import Host from '../../components/Housing/Host';
import Rating from '../../components/Housing/Rating';

export default function Housing() {

    // récupérer l'id dans URL pour afficher bon logement
    const { id } = useParams();
    const currentHousing = housings.find((housing) => housing.id === id);


    return (
        <>
            <main className="housing">
                <Slideshow
                    pictures={currentHousing.pictures}
                    id={currentHousing.id}
                />
                <article className="housing__container">
                    <section className="housing__informations">
                        <div className="informations__location">
                            <h3>{currentHousing.title}</h3>
                            <p>{currentHousing.location}</p>
                            {currentHousing.tags.map((tags, index) => 
                                <Tag key={index} content={tags} />
                            )}
                        </div>
                        <div className="informations__author">
                            <div>
                                <Host name={currentHousing.host.name} picture={currentHousing.host.picture} />
                                <Rating rating={currentHousing.rating}/>
                            </div>
                            <div></div>
                        </div>
                    </section>
                    <section className="housing__dropdowns">
                        <div className="dropdown__description"></div>
                        <div className="dropdown__equipements"></div>
                    </section>
                </article>
            </main>
        </>
    )
}