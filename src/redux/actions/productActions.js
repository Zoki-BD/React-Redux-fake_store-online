import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types"


export const setProducts = (products) => {
   return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products
   }
};

export const selectedProduct = (product) => {
   return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product
   }
};

export const removeSelectedProduct = () => {
   return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,

   }
};


//Proba za remove na proizvod od listata
export const izbrisiProduct = (products) => {
   return {
      type: ActionTypes.IZBRISI_PRODUCT,
      payload: products
   }
};


export const addToCart = (itemID) => {
   return {
      type: ActionTypes.ADD_TO_CART,
      payload: {
         id: itemID,
      }
   }
}

export const addToCartFromDetailsPage = (product) => {
   return {
      type: ActionTypes.ADD_TO_CART_FROM_DETAILS_PAGE,
      payload: product
   }
}

export const adjustItemQty = (itemID, qty) => {
   return {
      type: ActionTypes.ADJUST_QTY,
      payload: {
         id: itemID,
         qty,
      },
   };
};


export const removeFromCart = (itemID) => {
   return {
      type: ActionTypes.REMOVE_FROM_CART,
      payload: {
         id: itemID,
      },
   };
};



//Check
export const dodadiProduct = (data) => {
   return {
      type: ActionTypes.DODADI_PRODUCT,
      payload: data
   }
}

//Ova e akcijata za Thunk api async preku Redux 
// export const fetchProducts = () => {

//    return async function (dispatch, getState) {
//       const response = await fakeStoreApi.get("/products");

//       dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })

//       //dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data })
//   
//    }

// };

// export const fetchSingleProduct = (Id) => {

//    return async function (dispatch, getState) {
//       const response = await fakeStoreApi.get(`/products/${Id}`);

//       dispatch({ type: ActionTypes.FETCH_SINGLE_PRODUCT, payload: response.data })

//       //dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
//      
//    }

// };


//Formated for cleaner code
export const fetchProducts = () => async (dispatch) => {
   const response = await fakeStoreApi.get("/products");
   dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });

   //dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data })

};

export const fetchSingleProduct = (Id) => async (dispatch) => {
   const response = await fakeStoreApi.get(`/products/${Id}`);
   dispatch({ type: ActionTypes.FETCH_SINGLE_PRODUCT, payload: response.data });

   //dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data })

};