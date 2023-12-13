import ArrowPrevSvg from '../../../assets/arrow-prev.svg'

export default function ArrowPrev({ onClick }) {
    return (
        <>
            <img src={ArrowPrevSvg} alt='chevron vers le bas' className='kasa-a-arrow-prev' onClick={onClick} />
        </>
    )
}