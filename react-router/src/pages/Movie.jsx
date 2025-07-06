import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const MoviesData = useLoaderData();
    console.log(MoviesData);

    return (
        <>
            <ul className="container grid grid-four--cols" >
                {MoviesData.Search.map((curMovie) => {
                    return <Card key={curMovie.imdbID} curMovie={curMovie} />
                })}
            </ul>
        </>
    )
}