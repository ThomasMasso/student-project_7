import HomeTitle from "../../atoms/HomeTitle";

export default function Banner ({ isTitle }) {

    if (!isTitle) {
        return <div className="kasa-m-banner__about"></div>;
    }

    return (
        <div className="kasa-m-banner__home">
            <HomeTitle>
                Chez vous, partout et ailleurs 
            </HomeTitle>
        </div>
    )
}