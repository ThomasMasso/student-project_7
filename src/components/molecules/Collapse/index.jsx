import ArrowDown from '../../atoms/ArrowDown/index'
import ArrowUp from '../../atoms/ArrowUp/index'
import CollapseTitle from '../../atoms/CollapseTitle/index'
import CollapseContent from '../../atoms/CollapseContent/index'
import { useState } from 'react'

export default function Collapse({ title, content }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <article className='kasa-m-collapse-card'>
                <header>
                    <CollapseTitle title={title} />
                    {showMore ? (
                        <ArrowUp onShow={() => setShowMore(!showMore)} />
                    ) : (
                        <ArrowDown onShow={() => setShowMore(!showMore)} />
                    )}
                </header>
                {showMore && <CollapseContent content={content} />}
            </article>
        </>
    )
}

