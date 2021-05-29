import React, { useEffect, useState } from "react";
import { firebase } from "./firebase";

function App() {
  const initialState = "";
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState(initialState);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idTarea, setIdTarea] = useState(initialState);
  const [tareaEditada, setTareaEditada] = useState(initialState);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("tareas").get();
        // console.log(data.docs)
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTareas(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  const agregar = async (e) => {
    e.preventDefault();

    if (!tarea.trim()) {
      console.log("vacio");
      return;
    }

    try {
      const db = firebase.firestore();
      const nuevaTarea = {
        name: tarea,
        fecha: Date.now(),
      };
      const data = await db.collection("tareas").add(nuevaTarea);
      setTareas([...tareas, { ...nuevaTarea, id: data.id }]);
      setTarea("");
    } catch (error) {
      console.log(error);
    }

    console.log(tarea);
  };

  const eliminar = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection("tareas").doc(id).delete();

      const arrayFiltrado = tareas.filter((item) => item.id !== id);
      setTareas(arrayFiltrado);
    } catch (error) {
      console.log(error);
    }
  };

  const editar = (id) => {
    setModoEdicion(true);
    setIdTarea(id);
    console.log("modo ediccion");
  };

  const editarTarea = (e) => {
    setTareaEditada(e);
  };

  const guardarTarea = async () => {
    if (!tareaEditada.trim()) {
      setModoEdicion(false);
      return;
    }

    try {
      const db = firebase.firestore();
      await db.collection("tareas").doc(idTarea).update({
        name: tareaEditada,
      });
    } catch (error) {
      console.log(error);
    }
    console.log("guardar tarea");
    const arrayFiltrado = tareas.map((item) =>
      item.id === idTarea
        ? { id: item.id, fecha: item.fecha, name: tareaEditada }
        : item
    );
    setTareas(arrayFiltrado);
    setModoEdicion(false);
    setIdTarea(initialState);
    setTareaEditada(initialState);
  };
  return (
    <div className="container mt-3">
      <h1 className="text-center">ToDo List test github</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Lista tareas</h3>
          <ul className="list-group">
            {tareas.map((item) => (
              <li className="list-group-item" key={item.id}>
                {modoEdicion && item.id === idTarea ? (
                  <input
                    type="text"
                    onChange={(e) => editarTarea(e.target.value)}
                    placeholder={item.name}
                    value={tareaEditada}
                  />
                ) : (
                  item.name
                )}
                <button
                  className="btn btn-danger btn-sm float-right"
                  onClick={() => eliminar(item.id)}
                >
                  Eliminar
                </button>
                {modoEdicion && item.id === idTarea ? (
                  <button
                    className="btn btn-success mx-2 btn-sm float-right"
                    onClick={() => guardarTarea()}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    className="btn btn-warning mx-2 btn-sm float-right"
                    onClick={(id) => editar(item.id)}
                  >
                    Editar
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Agregar Tarea</h3>
          <form onSubmit={agregar}>
            <input
              type="text"
              placeholder="Ingrese tarea"
              className="form-control mb-2"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            <button className="btn btn-dark btn-block" type="submit">
              Agregar Tarea
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
