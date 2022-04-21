import rootReducer from "./rootreducer";
import {createStore} from "redux";
import thunk from 'redux-thunk'

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;