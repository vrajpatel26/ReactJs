import { forwardRef, useRef } from "react"

export const ForwardRef = () => {

    const username = useRef(null)
    const password = useRef(null)


    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log(username.current.value);
        console.log(password.current.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {/* <BeforeReactV19 label="username : " ref={username} />
            <BeforeReactV19 label="password : " ref={password} /> */}

            <AfterReactV19 label="username : " ref={username} type="text" />
            <AfterReactV19 label="password : " ref={password} type="password" />
            <button>Submit</button>
        </form>
    )
}

// Before v19 , we have to use forwardRef.

// const BeforeReactV19 = forwardRef((props,ref)=>{
//     return(
//         <div>
//             <label>{props.label}</label>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// })



//After v19, wo don't need forwardRef
//type used for type of input like text or password.
const AfterReactV19 = (({ label, ref, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} ref={ref} />
        </div>
    )
})