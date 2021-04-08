import ListOfGifs from 'components/ListOfGifs'
import PrincipalTitle from 'components/PrincipalTitle'
import { UseNearScreen } from 'hooks/useNearScreen'
import { UseStorage } from 'hooks/useStorage'
import React from 'react'

const LastSearches = () => {
    const { storage } = UseStorage({ key: "lastSearches" })
    const { isNear, elementRef } = UseNearScreen()

    return <section ref={elementRef} className="lastSearches">
        <PrincipalTitle title={"Ultima busqueda"} />
        {storage.length && isNear ? <ListOfGifs gifs={storage} /> : <h2>No results yet</h2>}
    </section>
}

export default React.memo(LastSearches)