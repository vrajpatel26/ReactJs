// import { useParams } from "react-router-dom"

import { useLoaderData } from "react-router-dom"
import "./Card.css"

export const MovieDetails = () => {

    // const params = useParams();
    // console.log(params);

    const movieData = useLoaderData()
    console.log(movieData);


    // return <h1>Hello Movie {params.MovieID}</h1>

    const {Actor , Poster , Title , Type , Year , Plot ,  BoxOffice , imdbID} = movieData

    return (
        <li className="hero-container hero-movie-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} className="poster" alt={imdbID} />
                </div>

                <div className="ticket-container">
                    <div className="ticket__content">
                        <h4 className="ticket__movie-title">{Title}</h4>
                        <p className="">{Plot}</p>
                        <p className="ticket__current-price">Type:{Type}</p>
                        <button className="ticket__buy-btn">Watch</button>
                    </div>
                </div>
            </div>
        </li>
    )

}