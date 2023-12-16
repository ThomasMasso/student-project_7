import Tag from '../../atoms/Tag/index'

export default function LocationInformations({ housing }) {
    return (
        <div className="housing__informations-location">
            <h3>{housing.title}</h3>
            <p>{housing.location}</p>
            <div className="housing__informations-tags-container">
                {housing.tags.map((tags, index) => (
                    <Tag key={index} content={tags} />
                ))}
            </div>
        </div>
    )
}
