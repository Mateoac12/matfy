import ListOfGifs from 'components/ListOfGifs'
import PrincipalTitle from 'components/PrincipalTitle'

const SearchResults = ({ params }) => {
    const { keyword } = params

    return <>
        <PrincipalTitle
            title={"Tus Gifs de "}
            keyword={keyword}
        />
        <ListOfGifs keyword={keyword} />
    </>
}

export default SearchResults
