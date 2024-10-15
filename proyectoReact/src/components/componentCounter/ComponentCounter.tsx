import { useState } from "react"

export const ComponentCounter = () => {

    const [counter, setCounter] = useState<number>(0);

    const IncrementCounter = () => {
        setCounter((prev) => prev + 1)
    }
    const DecrementCounter = () => {
        if (counter > 0){
            setCounter((prev) => prev - 1)
        }
    }
    return (
        <div>

            <h2>Valor de counter: {counter}</h2>

            <button onClick={IncrementCounter}>Incrementar</button>
            <button onClick={DecrementCounter}>Decrementar</button>
        </div>
    )
}
