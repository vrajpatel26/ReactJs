import "./Propagation.css"

export const EventPropagation = () => {
    const handleGrandParents = () => {
        console.log("Grandparent clicked");
    }

    const handleParents = () => {
        console.log("parents clicked");

    }

    const handleChild = (event) => {
        console.log(event);

        console.log("child clicked");

    }


    return (
        <>
            {/* -----------------------Event bubbling--------------- */}

            <section className="main-div" onClick={handleGrandParents}>
                <div className="g-div" onClick={handleParents}>
                    <div className="p-div" onClick={handleChild}>
                        <div className="c-div">
                            Child
                        </div>
                    </div>
                </div>
            </section>


            {/* -----------------------Event capturing--------------- */}


            <section className="main-div" onClickCapture={handleGrandParents}>
                <div className="g-div" onClickCapture={handleParents}>
                    <div className="p-div" onClickCapture={handleChild}>
                        <div className="c-div">
                            Child
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}