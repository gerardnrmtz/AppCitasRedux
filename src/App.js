import React from "react";
import AgregarCita from './components/AgregarCitas.js';
import ListadoCitas from './components/ListadoCitas.js';
//Redux
import store from ".//store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">
            Administrador de pacientes de veterinaria
          </h1>
        </header>
        <div className="row">
          <div className="col-md-6 mt-3"><AgregarCita/></div>
          <div className="col-md-6"><ListadoCitas/></div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
