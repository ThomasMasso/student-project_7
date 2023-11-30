export default function Banner ({ isTitle }) {

    const title = 'Chez vous, partout et ailleurs';

    if (!isTitle) {
        return <div className="banner-about"></div>;
    }

    return (
        <div className="banner-home">
            <h1>
              {title}  
            </h1>
        </div>
    )
}