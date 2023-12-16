export default function CardImage({ title, cover }) {
    return (
        <>
            <img src={cover} alt={title} className="author-card__pic" />
        </>
    )
}
