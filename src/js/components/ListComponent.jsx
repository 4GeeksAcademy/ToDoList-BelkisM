import { useState } from 'react';


function Listcomponent() {
    const [tareas, setTareas] = useState([])
    const [textoNuevo, setTextoNuevo] = useState("")

    const agregarTareas = () => {
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
        // words.filter((_,index) => index !== 1);
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

                        <button onClick={agregarTareas} type="button" className="btn btn-primary mb-4">agregar</button>
                    </form>



                    <div className='lista-de-tareas'>
                        <ul className='lista-tareas'>

                            {tareas.map((t, index) => (
                                <li key={index} className="lista-tareas-item">{t.texto}
                                    <button onClick={() => eliminarTarea(index)} className='btn-eliminar'>x</button>
                                </li>

                            ))}
                        </ul>

                        <p>{tareas.length === 0? "No tienes tareas pendientes": `Tienes ${tareas.length} tareas pendientes`}</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Listcomponent
