import { useState, createContext } from "react";
import { apikey } from "../api/config";

export const photoContext = createContext()

const PhotoContextProvider = props => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const runSearch = query => {
        console.log(query)
        try {
            fetch(`https://api.unsplash.com/search/photos?page=1&per_page=8&query=${query}&client_id=${apikey}`)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data.results)
                    setImages(data.results)
                    setLoading(false)
                })
        } catch (error) {
            console.log("Encountered an error with fetching and parsing data", error)
        }
    }

    return (
        <photoContext.Provider value={{ images, loading, runSearch }}>
            {props.children}
        </photoContext.Provider>
    )
}

export default PhotoContextProvider
