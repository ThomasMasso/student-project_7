import Tag from '../../atoms/Tag/index'

export default function LocationInformations({ housing }) {
    return (
        <div className="kasa-m-location-informations">
            <h3>{housing.title}</h3>
            <p>{housing.location}</p>
            {housing.tags.map((tags, index) => 
                <Tag key={index} content={tags} />
            )}
        </div>
    )
}
