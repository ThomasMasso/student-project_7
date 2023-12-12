import { useState } from "react";
import arrowNextSvg from '../../../assets/arrow-next.svg'
import arrowPrevSvg from '../../../assets/arrow-prev.svg'


export default function Slideshow({ pictures }) {

    const [indexPicture, setIndexPicture] = useState(0);

    // Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
    function handlePrevClick() {
        if (indexPicture === 0) {
            setIndexPicture(pictures.length - 1);
        } else {
            setIndexPicture(indexPicture - 1);
        }
      }
    
    // Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
    function handleNextClick() {
    if (indexPicture === pictures.length - 1) {
        setIndexPicture(0);
    } else {
        setIndexPicture(indexPicture + 1);
    }
    }

    //let picture = pictures[index];

    return (
        <>
            <section>
                {/* création des fleches de défilement d'images si le logement compte + de 1 image */}
                {pictures.length > 1 && (
                    <img src={arrowPrevSvg} alt="fleche précédente" onClick={handlePrevClick} />
                )}
                {pictures.length > 1 && (
                    <img src={arrowNextSvg} alt="fleche suivante" onClick={handleNextClick} />
                )}

                {/* affichage des photos et du compteur de photos */}
                {pictures.map((picture, index) => {
                    return (
                        <div
                            key={index} 
                        >
                            {indexPicture === index && (
                                <img src={picture} alt='image du logement' />
                            )}
                            {indexPicture === index && pictures.length > 1 && (
                                <span>
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