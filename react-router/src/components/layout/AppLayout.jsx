import { Outlet, useNavigate, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading"

export const AppLayout = ()=>{

    const navigation = useNavigation()

    if(navigation === "loading") return <Loading />



    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}