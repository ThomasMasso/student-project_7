import Collapse from "../../molecules/Collapse/index"
import dataReglementations from "../../../data/reglementations.json"

export default function AboutCollapses() {
    return (
        <>
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