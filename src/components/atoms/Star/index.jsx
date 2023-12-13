export default function Star({ cover, title }) {
    return (
        <>
            <img src={cover} alt={title} className="star" />
        </>
    )
}