import { useState } from "react"
let name = "Mohmeed"

export default function Myutoon (){
    const[name, setName] = useState("Mohmed")

    function buttonClickcked() {
       if (name === "Mohmed") {
        setName("Ahmed")
       } else {
        setName("Mohmed")
       }
    }
    return(
        <div>
            <button onClick={buttonClickcked}>Click Me</button>
            <h1>{name}</h1>
        </div>
    )
}