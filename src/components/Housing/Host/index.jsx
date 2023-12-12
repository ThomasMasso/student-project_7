export default function Host({ name, picture }) {
    return (
        <>
            <p>{name}</p>
            <img src={picture} alt="photo du propriétaire" />
        </>
    )
}