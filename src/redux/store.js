import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';//za da imame redux vo console pregledot


import thunk from "redux-thunk";

const store = createStore(
   reducers,
   composeWithDevTools(applyMiddleware(thunk)) //with npm install redux-devtools-extension

   //with direct extension
   //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;