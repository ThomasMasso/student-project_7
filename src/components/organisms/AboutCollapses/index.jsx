import Collapse from '../../molecules/Collapse/index'
import dataReglementations from '../../../data/reglementations.json'
import Banner from '../../molecules/Banner'

export default function AboutCollapses() {
    return (
        <>
            <Banner isTitle={false} />

            <main className="kasa-o-about-collapse-container">
                {dataReglementations.map((data, id) => (
                    <Collapse
                        title={data.title}
                        content={data.content}
                        key={id}
                    />
                ))}
            </main>
        </>
    )
}
