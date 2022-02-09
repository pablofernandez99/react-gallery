import Image from "./Image"
import NoImage from "./NoImage"

const Gallery = ({ data }) => {
    const result = data

    let images
    let noImages

    if (result.length > 0) {
        images = result.map(({ id, alt_description, urls }) => (
            <Image
                url={urls.small}
                key={id}
                title={alt_description}
            />
        ))
    } else {
        noImages = <NoImage />
    }

    return (
        <div>
            <ul>
                {images}
            </ul>
            {noImages}
        </div>
    )
}

export default Gallery
