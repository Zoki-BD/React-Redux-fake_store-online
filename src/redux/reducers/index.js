//ovde ke gi kombinirame site reduceri

import { combineReducers } from "redux";

import { productReducer, selectedProductReducer, izbrisiProductReducer, dodadiProductReducer } from "./productReducer";



const reducers = combineReducers({
   allProducts: productReducer,  //our naming 
   oneProduct: selectedProductReducer,
})

export default reducers;