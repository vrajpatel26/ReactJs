import { useEffect, useState } from "react";
// import axios from "axios"
import { Card } from "../component/UI/Card";
import { getMovie } from "../services/getServie";

export const Movie = () => {

    const [data,setData] = useState([])

    // const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"

    const getMovieData = async () => {
        try {
            // const res = await axios.get(API)
            const res = await getMovie()
            
            // console.log(res.data.Search);
            setData(res.data.Search) //api path

        } catch (error) {
            console.error("Error Message : ",error.message)
            console.error("Error Status : ",error.response.status)
            console.error("Error data : ",error.response.data)

        }
    }


    useEffect(() => {
        getMovieData()
    }, [])

    return (
        <ul className="container grid grid-four--cols">
            {
                data.map((curElem)=>{
                    return <Card key={curElem.imdbID} movieData ={curElem}/>
                })
            }
        </ul>
    )
}
