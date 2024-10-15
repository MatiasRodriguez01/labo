import { ChangeEvent, useState } from "react"
import { ITarea } from "./type/ITarea";

function App() {

  const [tareaTexto, setTareaTexto] = useState("");

  const [tareas, setTareas] = useState<ITarea[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTareaTexto(value);
  }

  const agregarTarea = () => {
    if (tareaTexto.length > 0) {
      const nuevaTarea: ITarea = {
        id: new Date().toISOString(),
        texto: tareaTexto,
        completado: false
      }

      setTareas((prev) => [...prev, nuevaTarea])
      setTareaTexto("")
    } else {
      alert("Ingresa una tarea")
    }
  }

  console.log(tareas[1])
  

  return (
    <div>
      <section>
        <label>Tarea:</label>
        <input type="text" value={tareaTexto} onChange={handleChange} />
      </section>
      <section>
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </section>
      <section>
        <h2>Tareas Disponibles</h2>
        {
          tareas.length > 0 ? (
            tareas.map(({ id, texto, completado }, index) => (
              <div key={id}>
                <p>{texto}</p>
              </div>
            ))
          ) : (
            <h3>No hay tareas</h3>
          )
        }
      </section>
    </div>
  )
}

export default App
