import { useState } from "react";
import arrowDownSvg from '../../assets/arrow-down.svg'
import arrowUpSvg from '../../assets/arrow-up.svg'


// mettre hors composant - data
const dataReglementations = [
    {
        title: 'Fiabilité',
        content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
        title: 'Respect',
        content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
        title: 'Service',
        content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title: 'Sécurité',
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
];

function CardReglementation({ title, content }) {

    const [showMore, setShowMore] = useState(false);

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <>
            <article class='reglementation'>
                    <header>
                        <h4>{title}</h4>
                        {/* <div class="arrow-down" onClick={handleMoreClick}></div> */}
                        {showMore ? (
                            <img src={arrowUpSvg} alt='icon arrow dropdown element' onClick={handleMoreClick} />
                        ) : (
                            <img src={arrowDownSvg} alt='icon arrow dropdown element' onClick={handleMoreClick} />
                        )}
                    </header>
                    {showMore && <p>{content}</p>} 
            </article>
        </>
    )
}

export default function Reglementations() {

    return (
        <>
            <main class='reglementations-container'>
                {dataReglementations.map((data, index) => (
                    <CardReglementation
                        title={data.title}
                        content={data.content}
                        key={`${data}-${index}`}
                    />
                ))}
            </main>
        </>
    )
}