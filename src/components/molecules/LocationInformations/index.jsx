import Tag from '../../atoms/Tag/index'

export default function LocationInformations({ housing }) {
    return (
        <div className="kasa-m-location">
            <h3>{housing.title}</h3>
            <p>{housing.location}</p>
            <div className="kasa-m-location__container">
                {housing.tags.map((tags, index) => 
                    <Tag key={index} content={tags} />
                )}
            </div>
            
        </div>
    )
}
