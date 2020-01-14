import {combineReducers} from 'redux';
import citasReducer from './/citasReducer.js';
import errorReducer from './/ErrorReducer.js';

export default combineReducers({
    citas:citasReducer,
    error:errorReducer
});