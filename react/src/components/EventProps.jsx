// import "./index.css"
// import './index.css'


export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey , ${user}`);
    }

    const handleHover = () => {
        alert(`Hey , thanks for hover`);
    }

    return (
        <>
            <WelcomeUser
                onClick={() => HandleWelcomeUser("Vraj")} 
            onMouseEnter={handleHover}
        
            />
        </>
    )
}


const WelcomeUser = (props) =>{

    const greeting = () =>{
        console.log("Hey , welcome !");
        props.onClick()
        
    }

    return(
        <>
            <button onClick={props.onClick}>Click Me</button>  
            <button onMouseEnter={props.onMouseEnter}>Hover Me</button>      
            <button onClick={greeting}>Click Me</button>    
        </>
    )
}