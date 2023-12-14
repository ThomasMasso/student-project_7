import ArrowDownSvg from '../../../assets/arrow-down.png'

export default function ArrowDown({ onShow }) {
    return (
        <>
            <img src={ArrowDownSvg} alt='chevron vers le bas' className='kasa-a-arrow-down' onClick={onShow} />
        </>
    )
}