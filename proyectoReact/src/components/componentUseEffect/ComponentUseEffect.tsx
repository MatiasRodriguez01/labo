import { useEffect, useState } from "react";

export const ComponentUseEffect = () => {

    const [state, setState] = useState<boolean>(false)

    useEffect(() => {
        console.log('Componente montado')
        return () => {
            console.log("Componente desmontado")
        }
    }, []);

    useEffect(() => {
        console.log(state)
    }, [state]);

    const handleClick = () => (
        setState(!state)
    )

    return (
        <div>
            <p>{state ? "Es true" : "Es false"}</p>
            <button onClick={handleClick}>Cambiar State</button>
        </div>
    )
}
