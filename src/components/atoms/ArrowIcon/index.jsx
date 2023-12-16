export default function ArrowIcon({ onClick, src, alt, className }) {
    return (
        <>
            <img src={src} alt={alt} className={className} onClick={onClick} />
        </>
    )
}
