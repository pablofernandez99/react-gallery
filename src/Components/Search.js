import Container from "./Container"

const Search = ({searchTerm}) => (
    <div>
        <h2>{searchTerm} Pictures</h2>
        <Container searchTerm={searchTerm} />
    </div>
)

export default Search
