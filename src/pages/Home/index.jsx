// import Header from "../../components/Header"
import Header from '../../components/organisms/Header/index'
import Banner from '../../components/molecules/Banner/index'
// import ListHousings from "../../components/List-housings"
import Gallery from '../../components/organisms/Gallery'
// import Footer from '../../components/Footer'
import Footer from '../../components/molecules/Footer/index'

export default function Home() {
    return (
        <>
            <Header />
            <Banner isTitle={true} />
            <Gallery />
            {/* <ListHousings /> */}
            <Footer />
        </>
        
    )
}