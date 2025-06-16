

export const EventHandling = () =>{

    const handleClickButton = () =>{
        alert("hey i am onClick event")
    }

    return(
        <>
        <button onClick={handleClickButton}>Click Me</button>
        </>
    )
}