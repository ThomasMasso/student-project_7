import Header from "../../components/Header"
import Banner from '../../components/Banner'
import ListHousings from "../../components/List-housings"
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <Banner isTitle={true} />
            <ListHousings />
            <Footer />
        </>
        
    )
}