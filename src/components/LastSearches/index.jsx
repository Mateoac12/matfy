import ListOfGifs from 'components/ListOfGifs'
import PrincipalTitle from 'components/PrincipalTitle'
import { UseStorage } from 'hooks/useStorage'
import React from 'react'

const LastSearches = () => {
    const { storage } = UseStorage({ key: "lastSearches" })

    return <>
        <PrincipalTitle title={"Ultima busqueda"} />
        {storage.length ? <ListOfGifs gifs={storage} /> : <h2>No results yet</h2>}
    </>
}

export default LastSearches