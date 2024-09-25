import { useState } from "react"
export default function MyInput() {
    const[myInputValue, setMyInputValue] = useState("");
    function handleInputChange(event) {
        setMyInputValue(event.target.value)
    }
    return(
        <>
        <label>Youre Name</label>
        <input
        value={myInputValue}
         onChange={handleInputChange} />
        </>
    )
}