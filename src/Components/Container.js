import { useContext, useEffect } from "react"
import { photoContext } from "../context/photocontext"
import Gallery from "./Gallery"
import Loader from "./Loader"

import "./styles/Container.css"

const Container = ({ searchTerm }) => {
    const { images, loading, runSearch } = useContext(photoContext)

    useEffect(() => {
        runSearch(searchTerm)
    }, [searchTerm])

    return (
        <div className="photo-container">
            {loading ? <Loader /> : <Gallery data={images} />}
        </div>
    )
}

export default Container
