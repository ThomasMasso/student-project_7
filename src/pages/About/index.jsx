import Header from "../../components/Header"
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Reglementations from "../../components/Reglementations"

export default function About() {
    return (
        <>
            <Header />
            <Banner isTitle={false} />
            <Reglementations />
            <Footer />
        </>
        
    )
}