export const SeriesCards = (props) => {

    const {id,img_url,name,rating,description,cast,genre,watch_url} = props.data //destructuring
    return (
        <li>
            <div>
                <img src={img_url}
                    alt={name}
                    height="40%"
                    width="40%"
                />
            </div>
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {description}</p>
            <p>Genre : {genre}</p>
            <p>Cast : {cast}</p>
            <a href={watch_url} target="_">
                <button>Watch Now</button>
            </a>
        </li>
    )
}
