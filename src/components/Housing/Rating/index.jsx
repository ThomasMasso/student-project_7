import starActive from '../../../assets/star-active.svg';
import starInactive from '../../../assets/star-inactive.svg';

export default function Rating({ rating }) {

    const notes = [1, 2, 3, 4, 5];

    return (
        <div className="rate__container">
            {notes.map((note) => {
                rating >= note ? (
                    <img
                        key={note.toString()}
                        src={starActive}
                        alt='étoiles colorées représentant une note'
                    />
                ) : (
                    <img
                        key={note.toString()}
                        src={starInactive}
                        alt='étoiles colorées représentant une note'
                    />
                )
            }
            )}
        </div>
    )
}