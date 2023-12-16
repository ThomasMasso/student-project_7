import CardImage from '../../atoms/CardImage/index'
import CardTitle from '../../atoms/CardTitle/index'

export default function CardGallery({ title, cover }) {
    return (
        <>
            <div className="home-gallery__card">
                <CardImage cover={cover} title={title} />
                <CardTitle>{title}</CardTitle>
            </div>
        </>
    )
}
