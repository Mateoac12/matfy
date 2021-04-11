import ListOfGifs from 'components/ListOfGifs'
import Loading from 'components/Loading'
import PrincipalTitle from 'components/PrincipalTitle'
import { UseGifs } from 'hooks/useGifs'
import { Helmet } from 'react-helmet'

const SearchResults = ({ params }) => {
    const { keyword, rating } = params
    const {gifs, loading} = UseGifs({ keyword, rating })

    return <>
        <PrincipalTitle title={"Tus Gifs de "} keyword={keyword} />
        {
            loading
                ? (
                    <>
                        <Helmet>
                            <title>Cargando...</title>
                            <meta name="description" content="Cargando gifs de Matfy"/>
                        </Helmet>
                        <Loading />
                    </>
                )
                : (
                    <>
                        <Helmet>
                            <title>{String(gifs.length)} resultados de {keyword} | Matfy</title>
                            <meta name="description" content={`Busqueda de ${keyword} en Matfy, pagina para buscar gifs`}/>
                        </Helmet>
                        <ListOfGifs gifs={gifs} />
                    </>
                )
        }
    </>
}

export default SearchResults
