import starActive from '../../../assets/starActive.png'
import starInactive from '../../../assets/starInactive.png'
import Star from '../../atoms/Star/index'

export default function Rating({ rating }) {
    const notes = [1, 2, 3, 4, 5]

    return (
        <div className="kasa-m-rate__container">
            {notes.map((note) =>
                rating >= note ? (
                    <Star
                        key={note.toString()}
                        cover={starActive}
                        title="étoile"
                    />
                ) : (
                    <Star
                        key={note.toString()}
                        cover={starInactive}
                        title="étoile"
                    />
                ),
            )}
        </div>
    )
}
