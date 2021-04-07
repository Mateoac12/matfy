import ListOfGifs from 'components/ListOfGifs'
import Loading from 'components/Loading'
import PrincipalTitle from 'components/PrincipalTitle'
import { UseGifs } from 'hooks/useGifs'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const {gifs, loading} = UseGifs({keyword})


    return <>
        <PrincipalTitle
            title={"Tus Gifs de "}
            keyword={keyword}
        />
        {
            loading ? <Loading /> : <ListOfGifs gifs={gifs} />
        }
    </>
}

export default SearchResults
