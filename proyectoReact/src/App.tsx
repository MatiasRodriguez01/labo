import { AppProduct } from "./components/AppProduct/AppProduct"
import { ComponentCounter } from "./components/componentCounter/ComponentCounter"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
import { Button } from "react-bootstrap"
import { ComponentUseEffect } from "./components/componentUseEffect/ComponentUseEffect"

export const App = () => {

    //const [enableCounter, setEnableCounter] = useState<boolean>(false);


    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
            <MiPrimerComponent text={"Texto desde propiedades"} color={"red"} fontSize={5} />
            <ComponentCounter />
            <ComponentUseEffect/>
            <FormComponent/>
            <AppProduct/>
        </div>
    )
}
