//Help of memo , we can wrap the component that we do not want to  rerender unless  their props change.
//Here count's props is not change, so count component didnot rerender.


import { memo, useRef } from "react"

export const Counts = memo(({BipData}) => {

    const renderCounts = useRef(0)
    console.log(renderCounts);


    return (
        <div className="font-display text-center text-3xl">
            <p>Nothing changed here but Now I rendered :
                <span className="text-red-600">{renderCounts.current++} time(s)</span>
            </p>
            <p>My name is {BipData.name}</p>
        </div>
    )
}
)

