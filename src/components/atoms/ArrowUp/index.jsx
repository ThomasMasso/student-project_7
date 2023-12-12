import ArrowUpSvg from '../../../assets/arrow-up.svg'

export default function ArrowUp({ onShow }) {
    return (
        <>
            <img src={ArrowUpSvg} alt='chevron vers le haut' className='kasa-a-arrow-up' onClick={onShow} />
        </>
    )
}