import { useEffect, useState } from "react";
import "./Pokemon.css"
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")





    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";


    const fetchPokemon = async () => {
        try {
            const res = await fetch(API)
            const data = await res.json()
            //    console.log(data);

            const detailedPokemonData = data.results.map(async (currPokemon) => {
                // console.log(currPokemon.url);

                const res = await fetch(currPokemon.url)
                const data = await res.json()
                // console.log(data);
                return data;
            })
            // console.log(detailedPokemonData);

            const detailedResponse = await Promise.all(detailedPokemonData)
            console.log(detailedResponse);
            setPokemon(detailedResponse)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        }
    }


    useEffect(() => {
        fetchPokemon()
    }, [])


    //for search functionality
    const searchData = pokemon.filter((currPokemon) => {
      return  currPokemon.name.toLowerCase().includes(search.toLowerCase())
    })


    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }



    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }


    return (
        <>
            <section className="container">
                <header>
                    <h1>Let's Catch Pokemon</h1>
                </header>

                <div className="pokemon-search">
                    <input
                        type="text"
                        placeholder="search Pokemon"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div>
                    <ul className="cards">
                        {/* {pokemon.map((currPokemon) => { */}
                        {searchData.map((currPokemon) => {
                            return (
                                <PokemonCards key={currPokemon.id} pokemonData={currPokemon} />
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}