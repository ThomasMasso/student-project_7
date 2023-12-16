import { useState } from 'react'

// import composants
import ArrowIcon from '../../atoms/ArrowIcon/index'
import CollapseTitle from '../../atoms/CollapseTitle/index'
import CollapseContent from '../../atoms/CollapseContent/index'

// import assets
import ArrowDownIcon from '../../../assets/arrow-down.svg'
import ArrowUpIcon from '../../../assets/arrow-up.svg'

export default function Collapse({ title, content }) {
    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <article className="kasa-m-collapse-card">
                <header>
                    <CollapseTitle title={title} />
                    {showMore ? (
                        <ArrowIcon
                            onClick={() => setShowMore(!showMore)}
                            src={ArrowUpIcon}
                            alt="chevron vers le haut"
                            className="kasa-a-arrow-up"
                        />
                    ) : (
                        <ArrowIcon
                            onClick={() => setShowMore(!showMore)}
                            src={ArrowDownIcon}
                            alt="chevron vers le bas"
                            className="kasa-a-arrow-down"
                        />
                    )}
                </header>
                {showMore && <CollapseContent content={content} />}
            </article>
        </>
    )
}
