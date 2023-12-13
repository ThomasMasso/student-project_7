import CardImage from '../../atoms/CardImage/index'
import CardTitle from '../../atoms/CardTitle/index'

export default function CardTitleImg({ title, cover }) {
    return (
        <>
                <div className='cardTitleImg'>
                    <CardImage cover={cover} title={title} />
                    <CardTitle>{title}</CardTitle>
                </div>
        </>
    )
}