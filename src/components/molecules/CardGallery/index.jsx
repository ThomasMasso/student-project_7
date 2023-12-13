import CardImage from '../../atoms/CardImage/index'
import CardTitle from '../../atoms/CardTitle/index'

export default function CardGallery({ title, cover }) {
    return (
        <>
                <div className='kasa-m-cardGallery'>
                    <CardImage cover={cover} title={title} />
                    <CardTitle>{title}</CardTitle>
                </div>
        </>
    )
}