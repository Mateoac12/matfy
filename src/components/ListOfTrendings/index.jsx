import Categories from 'components/Categories'
import Loading from 'components/Loading'
import PrincipalTitle from 'components/PrincipalTitle'
import { UseTrends } from 'hooks/useTrends'
import React from 'react'

const ListOfTrendings = () => {
    const { trends, loading } = UseTrends()

    return <>
    <PrincipalTitle title={"ultimas horas"} />
    { loading ? <Loading /> : <Categories categories={trends} /> }
    </>
}

export default ListOfTrendings