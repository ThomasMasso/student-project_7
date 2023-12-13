import Collapse from "../../molecules/Collapse";

export default function HousingCollapses({ housing }) {

    const equipments = housing.equipments.map((equipment, index) =>
        <ul key={index}>
            <li>{equipment}</li>
        </ul>
    )

    return (
        <>
            <Collapse
                title='Description'
                content={housing.description}
            />
            <Collapse
                title='Équipements'
                content={equipments}
            />
        </>
    )
}