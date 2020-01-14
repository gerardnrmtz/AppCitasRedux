import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { borrarCitaAction } from "../actions/citaActions.js";

const ListadoCitas = () => {
  const citas = useSelector(state => state.citas);

  //Mensaje condicional
  const mensaje =
    Object.keys(citas.citas).length === 0
      ? "No hay citas"
      : "Administra las Citas aqui";

  //Dispatch para mandar a eliminar una cita
  const dispatch = useDispatch();

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>
        <div className="Lista-citas">
          {citas.citas.map(cita => (
            <div className="media mt-3" key={cita.id}>
              <div className="media-body">
                <h3 className="mt-0">{cita.mascota}</h3>
                <p className="card-text">
                  <span>Nombre Dueño:{cita.propietario}</span>
                </p>
                <p className="card-text">
                  <span>Fecha:{cita.fecha}</span>
                </p>
                <p className="card-text">
                  <span>Hora:{cita.hora}</span>{" "}
                </p>
                <p className="card-text">
                  <span>Sintomas:{cita.sintomas}</span> <br />{" "}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(borrarCitaAction(cita.id))}
                >
                  Borrar &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ListadoCitas;
