
export const NetflixSeries = () => {
    const name = "Money Heist";
    const rating = "9.5";
    const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt modi amet dolore perspiciatis. Temporibus labore laudantium ratione tempora ab!";
    
    const seriesType = () =>{
        const Type = "thriller"
        return Type;
    }

    let age = 19;

    let canWatch = "Not Available"
    if(age>=18) canWatch = "Watch Now";



    return (
        // <div>
        //     <img src="MONEY-HEIST.jpg" alt="MONEY-HEIST" height="40%" width="40%" />
        //     <h2>Name: Money Heist</h2>
        //     <h3>Rating: 9.3</h3>
        //     <p>Summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt modi amet dolore perspiciatis. Temporibus labore laudantium ratione tempora ab!</p>
        // </div>




        //---------------use of dynamic values.
        <div>
            <img src="MONEY-HEIST.jpg" alt="MONEY-HEIST" height="40%" width="40%" />
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {summary}</p>
            <p>Type : {seriesType()}</p>
            {/* <button>{age > 18 ? "Watch now" : "Not Available" }</button> */}
            <button>{canWatch}</button>

        </div>
    )
}

// export default NetflixSeries;


export const Footer = () =>{
    return(
        <p>Copyright @Asus 2025</p>
    )
}