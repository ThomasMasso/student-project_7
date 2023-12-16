import HomeTitle from '../../atoms/HomeTitle'

export default function Banner({ isTitle }) {
    if (!isTitle) {
        return <div className="banner-about"></div>
    }

    return (
        <div className="banner-home">
            <HomeTitle>Chez vous, partout et ailleurs</HomeTitle>
        </div>
    )
}
