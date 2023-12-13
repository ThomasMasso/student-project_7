import ArrowNextSvg from '../../../assets/arrow-next.svg'

export default function ArrowNext({ onClick }) {
    return (
        <>
            <img src={ArrowNextSvg} alt='chevron vers la droite' className='kasa-a-arrow-next' onClick={onClick} />
        </>
    )
}