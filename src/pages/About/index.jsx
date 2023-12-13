import Header from '../../components/organisms/Header/index'
import Banner from '../../components/molecules/Banner/index'
import Footer from '../../components/molecules/Footer/index'
import AboutCollapses from '../../components/organisms/AboutCollapses'

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