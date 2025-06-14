import NetflixSeries from "./components/NetflixSeries"
import "./components/Netflix.css"

export const App = () => {
    //  return <h1>Hello , Vraj Patel</h1>

    return (

        <section className="container">
            <h1 className="card-heading">Best Netflix Series</h1>
            <NetflixSeries />

        </section>)
}
