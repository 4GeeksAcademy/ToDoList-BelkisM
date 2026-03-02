import { useState } from 'react';


function Listcomponent() {
    const [tareas, setTareas] = useState([])
    const [textoNuevo, setTextoNuevo] = useState("")

    const agregarTareas = () => {
        if (textoNuevo.trim() === "") {
            alert("No puedes agregar una tarea vacia")
            return
        }
        setTareas([...tareas, { texto: textoNuevo }]);
        setTextoNuevo("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        agregarTareas()
    }
    const eliminarTarea = (i) => {
        const listaModificada = tareas.filter((_, index) => index !== i)
        setTareas(listaModificada)
    }

    return (
        <div>
            <div className='row p-5'>
                <div className="card m-auto col-4">
                    <div className="card-header text-center">
                        TAREAS PENDIENTES
                    </div>
                    <form onSubmit={handleSubmit} className="card-body d-flex justify-content=center align-item-center gap-4">
                        <blockquote className="blockquote">
                            <label htmlFor="list"></label>
                            <input onChange={(e) => setTextoNuevo(e.target.value)}
                                type="text"
                                value={textoNuevo}
                                name="listComponent"
                                placeholder="Agrega una tarea" />
                        </blockquote>
                        <button onClick={agregarTareas} type="button" className="btn btn-danger mb-4">agregar</button>
                    </form>
                    <div className='lista-de-tareas'>
                        <ul className='lista-tareas'>

                            {tareas.map((t, index) => (
                                <li key={index} className="lista-tareas-item ">
                                    <div className='d-flex justify-content-between'>
                                        {t.texto}
                                        <button onClick={() => eliminarTarea(index)} className='boton-eliminar btn btn-outline-danger px-1 py-1 m-1' style={{ fontSize: '0.7rem', lineHeight: '1' }}>eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>{tareas.length === 0 ? "No tienes tareas pendientes" : `Tienes ${tareas.length} tareas pendientes`}</p>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Listcomponent
