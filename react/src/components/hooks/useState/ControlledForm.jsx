import { useState } from "react"

export const ControlledForm = () => {

    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Handle form submission with Uncontrolled state.
        // const dataValue = document.querySelector("#inputName").value
        // console.log(dataValue);


        console.log(name);
    }

    return (
        <section>
            {/* <h1>Uncontrolled Component</h1> */}
            <h1>Controlled Component</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    {/* for uncontrolled */}
                    {/* <input type="text" id="inputName" name="name" /> */}

                    {/* for controlled */}
                    <input type="text" id="inputName" name="name" value={name} onChange={handleChange} />

                </label>
                <br />
                <button>Submit</button>
            </form>
        </section>
    )
}