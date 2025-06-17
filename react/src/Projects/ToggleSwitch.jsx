import { useState } from "react"

export const ToggleSwitch = () => {
    const [isOn, setisOn] = useState(false)

    const handleToggleButton = () => {
        setisOn(!isOn)
    }

    return (

        <div className="container">Toggle ON/OFF 
            <div
                className="toggle-switch"
                style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
                onClick={handleToggleButton}
            >
                {/* herte switch is class */}
                <div className={`switch ${isOn ? "on" : "off"}`}>
                    <span className="switch-state">{isOn ? "on" : "off"}</span>
                </div>
            </div>
        </div>
    )
}