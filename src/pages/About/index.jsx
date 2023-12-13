// import Header from "../../components/Header"
// import Banner from '../../components/Banner'
// import Footer from '../../components/Footer'
import Header from '../../components/organisms/Header/index'
import Banner from '../../components/molecules/Banner/index'
import Footer from '../../components/molecules/Footer/index'
// import Reglementations from "../../components/Reglementations"
import AboutCollapses from '../../components/organisms/AboutCollapses'
import dataReglementations from '../../data/reglementations.json'

export default function About() {
    return (
        <>
            <Header />
            <Banner isTitle={false} />
            <AboutCollapses />
            <Footer />
        </>
        
    )
}