import NetflixSeries from "./components/NetflixSeries"
// import "./components/Netflix.css"
import "./components/Netflix.module.css"
import styles from "./components/Netflix.module.css"
import { EventHandling } from "./components/EventHandling"
import { EventProps } from "./components/EventProps"
// import './index.css'
import { EventPropagation } from "./components/EventPropagation"


export const App = () => {
    //  return <h1>Hello , Vraj Patel</h1>

    return (

        <section className="container">
            {/* <h1 className={styles['card-heading']}>Best Netflix Series</h1> */}
            {/* <NetflixSeries /> */}
            {/* <EventHandling/> */}
            {/* <EventProps /> */}
            < EventPropagation />


        </section>)
}
