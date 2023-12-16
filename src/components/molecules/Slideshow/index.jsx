import { useState } from 'react'

// import composants
import ArrowIcon from '../../atoms/ArrowIcon'

// import assets
import ArrowNextIcon from '../../../assets/arrow-next.svg'
import ArrowPrevIcon from '../../../assets/arrow-prev.svg'

export default function Slideshow({ pictures }) {
    const [indexPicture, setIndexPicture] = useState(0)

    // Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
    const handlePrevClick = () => {
        setIndexPicture(
            indexPicture === 0 ? pictures.length - 1 : indexPicture - 1,
        )
    }

    // Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
    const handleNextClick = () => {
        setIndexPicture(
            indexPicture === pictures.length - 1 ? 0 : indexPicture + 1,
        )
    }

    return (
        <>
            <section className="kasa-m-slideshow">
                {/* création des fleches de défilement d'images si le logement compte + de 1 image */}
                {pictures.length > 1 && (
                    <ArrowIcon
                        onClick={handlePrevClick}
                        src={ArrowPrevIcon}
                        alt="chevron vers la gauche"
                        className="kasa-a-arrow-prev"
                    />
                )}
                {pictures.length > 1 && (
                    <ArrowIcon
                        onClick={handleNextClick}
                        src={ArrowNextIcon}
                        alt="chevron vers la droite"
                        className="kasa-a-arrow-next"
                    />
                )}

                {/* affichage des photos et du compteur de photos */}
                {pictures.map((picture, index) => {
                    return (
                        <div key={index} className="kasa-m-slideshow__pic">
                            {indexPicture === index && (
                                <img src={picture} alt="image du logement" />
                            )}
                            {indexPicture === index && pictures.length > 1 && (
                                <span className="kasa-m-slideshow__pic-count">
                                    {index + 1}/{pictures.length}
                                </span>
                            )}
                        </div>
                    )
                })}
            </section>
        </>
    )
}
