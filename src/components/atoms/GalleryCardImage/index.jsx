export default function GalleryCardImage({ title, cover }) {
    return (
        <>
            <img src={cover} alt={title} className='kasa-a-gallery__card-image' />
        </>
    )
}