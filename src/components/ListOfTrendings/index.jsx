import Categories from 'components/Categories'
import Loading from 'components/Loading'
import PrincipalTitle from 'components/PrincipalTitle'
import { UseNearScreen } from 'hooks/useNearScreen'
import { UseTrends } from 'hooks/useTrends'
import React from 'react'

const ListOfTrendings = () => {
    const { trends } = UseTrends()
    const { isNear, elementRef } = UseNearScreen({ margin:'0px' })

    return <section ref={elementRef} className="listoftrendings">
        <PrincipalTitle title={"ultimas horas"} />
        { !isNear ? <Loading /> : <Categories categories={trends} /> }
    </section>
}

export default ListOfTrendings