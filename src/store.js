import {createStore} from 'redux';
import reducer from './reducers';
import {obtenerStateStorage,guardarStateStorage} from './localstorage.js';

//Definir el state inicial
//Todas las funciones que se encargan de modificar el state

///Obtener citas de localstorage 
const storageState=obtenerStateStorage();

const store= createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

//cada ve que cambia
store.subscribe(()=>{
    guardarStateStorage({
        citas:store.getState().citas
    })
});

export default store;