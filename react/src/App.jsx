export const App = () => {
    //  return <h1>Hello , Vraj Patel</h1>

    return (
        <div>

            <NetflixSeries />
            <NetflixSeries />
            <NetflixSeries />

        </div>
    )
}

const NetflixSeries = () => {
    const name = "Money Heist";
    const rating = "9.5";
    const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt modi amet dolore perspiciatis. Temporibus labore laudantium ratione tempora ab!";
    
    const seriesType = () =>{
        const Type = "thriller"
        return Type;
    }


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
        </div>
    )
}