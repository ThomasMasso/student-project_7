import { Link } from 'react-router-dom'
import GalleryCardImage from '../../atoms/GalleryCardImage/index'
import GalleryCardTitle from '../../atoms/GalleryCardTitle/index'

export default function GalleryCard({ id, title, cover }) {
    return (
        <>
            <Link to={`/housing/${id}`}>
                <article className='kasa-m-gallery__card'>
                    <GalleryCardImage cover={cover} title={title} />
                    <GalleryCardTitle>{title}</GalleryCardTitle>
                </article>
            </Link>
        </>
    )
}