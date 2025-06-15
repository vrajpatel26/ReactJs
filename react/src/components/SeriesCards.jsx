
// export const SeriesCards = (props) => {

//     const { img_url, name, rating, description, cast, genre, watch_url } = props.data //destructuring

//     const btn_style = {
//         padding: "1.2rem",
//         border: "none",
//         fontSize: "1.5rem",
//         backgroundColor: `${rating >= 8.5 ? " rgb(113, 221, 113)" : "rgb(207, 207, 58)"}`,
//         color: "black",
//         fontWeight:"bold",
//         cursor:"pointer"
//     }

//     const ratingColor = rating >= 8.5 ? "super-hit" : "average";

//     const btnColor = rating >= 8.5 ? "super-hit" : "average";

//     return (
//         <li className="card">
//             <div>
//                 <img src={img_url}
//                     alt={name}
//                     height="40%"
//                     width="40%"
//                 />
//             </div>
//             <div className="card-content">
//                 <h2>Name: {name}</h2>
//                 {/* <h3 style={{padding :"0.6rem 0rem"}}>Rating: {rating}</h3> */}
//                 {/* <h3>Rating: <span className={` rating ${rating >= 8.5 ? "super-hit" : "average"}`}> {rating} </span> </h3> */}
//                 <h3>Rating: <span className={` rating ${ratingColor}`}> {rating} </span> </h3>

//                 <p>Summary: {description}</p>
//                 <p>Genre : {genre.join(", ")}</p>
//                 <p>Cast : {cast.join(", ")}</p>
//                 <a href={watch_url} target="_">
//                     <button style={btn_style}>Watch Now</button>
//                 </a>
//             </div>
//         </li>
//     )
// }

//-------------------Css module------------------------------------------------------


// import styles from "./Netflix.module.css"


// export const SeriesCards = (props) => {

//     const { img_url, name, rating, description, cast, genre, watch_url } = props.data //destructuring

//     const btn_style = {
//         padding: "1.2rem",
//         border: "none",
//         fontSize: "1.5rem",
//         backgroundColor: `${rating >= 8.5 ? " rgb(113, 221, 113)" : "rgb(207, 207, 58)"}`,
//         color: "black",
//         fontWeight:"bold",
//         cursor:"pointer"
//     }

//     const ratingColor = rating >= 8.5 ? styles['super-hit'] : styles['average'];

//     const btnColor = rating >= 8.5 ? styles['super-hit'] : styles['average'];

//     return (
//         <li className={styles.card}>
//             <div>
//                 <img src={img_url}
//                     alt={name}
//                     height="40%"
//                     width="40%"
//                 />
//             </div>
//             <div className={styles['card-content']}>
//                 <h2>Name: {name}</h2>
//                 {/* <h3 style={{padding :"0.6rem 0rem"}}>Rating: {rating}</h3> */}
//                 {/* <h3>Rating: <span className={` rating ${rating >= 8.5 ? "super-hit" : "average"}`}> {rating} </span> </h3> */}
//                 <h3>Rating: <span className={` ${styles.rating} ${ratingColor}`}> {rating} </span> </h3>

//                 <p>Summary: {description}</p>
//                 <p>Genre : {genre.join(", ")}</p>
//                 <p>Cast : {cast.join(", ")}</p>
//                 <a href={watch_url} target="_">
//                     <button style={btn_style}>Watch Now</button>
//                 </a>
//             </div>
//         </li>
//     )
// }




//------------------Using Styled components-----------------------------------

import styles from "./Netflix.module.css"
import styled from "styled-components"


export const SeriesCards = (props) => {

    const { img_url, name, rating, description, cast, genre, watch_url } = props.data //destructuring



    // const ButtonStyled = styled.button(
    //     {
    //         padding: "1.2rem",
    //         border: "none",
    //         fontSize: "1.5rem",
    //         backgroundColor: `${rating >= 8.5 ? " rgb(113, 221, 113)" : "rgb(207, 207, 58)"}`,
    //         color: "black",
    //         fontWeight: "bold",
    //         cursor: "pointer"
    //     }

    // )


    //---------using template litrals
    const ButtonStyled = styled.button`
            padding: 1.2rem;
            border: none;
            font-size: 1.5rem;
            background-color: ${(props) =>
            props.rating >= 8.5 ? "rgb(113, 221, 113)" : "rgb(207, 207, 58)"};
            color: black;
            font-weight: bold;
            cursor: pointer;
    `
    const ratingColor = rating >= 8.5 ? styles['super-hit'] : styles['average'];

    const btnColor = rating >= 8.5 ? styles['super-hit'] : styles['average'];

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url}
                    alt={name}
                    height="40%"
                    width="40%"
                />
            </div>
            <div className={styles['card-content']}>
                <h2>Name: {name}</h2>
                {/* <h3 style={{padding :"0.6rem 0rem"}}>Rating: {rating}</h3> */}
                {/* <h3>Rating: <span className={` rating ${rating >= 8.5 ? "super-hit" : "average"}`}> {rating} </span> </h3> */}
                <h3>Rating: <span className={` ${styles.rating} ${ratingColor}`}> {rating} </span> </h3>

                <p>Summary: {description}</p>
                <p>Genre : {genre.join(", ")}</p>
                <p>Cast : {cast.join(", ")}</p>
                <a href={watch_url} target="_">
                    {/* <button style={btn_style}>Watch Now</button> */}
                    <ButtonStyled rating={rating}>Watch Now</ButtonStyled>


                </a>
            </div>
        </li>
    )
}
