export const ParentComponent = () => {
    return (
        <>
            <h1>Hello Component A</h1>
            <Child1 data="React JS"/>
        </>
    )
}

const Child1 = (props) =>{
    return(
        <>
        <h1>HEllo Component B</h1>
        <Child2 data={props.data}/>
        </>
    )
}

const Child2 = (props) =>{
    return(
        <>
        <h1>HEllo Component B</h1>
        <Child3 data={props.data}/>
        </>
    )
}


const Child3 = (props) =>{
    return(
        <>
        <h1>I Love {props.data}</h1>
        </>
    )
}