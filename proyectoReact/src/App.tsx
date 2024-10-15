import { ComponenteNuevo } from "./components/ComponenteNuevo/ComponenteNuevo"


export const App = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
            {/* <MiPrimerComponent text={"Texto desde propiedades"} color={"red"} fontSize={5} />
            <ComponentCounter />
            <ComponentUseEffect/> */}
            {/* <FormComponent/> */}
            <ComponenteNuevo/>
        </div>
    )
}
