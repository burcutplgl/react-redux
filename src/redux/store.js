import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import modalReducer from "./modalSlice";

// import { dataSlice } from "./dataSlice";
// import { modalSlice } from "./modalSlice";

export const store = configureStore({
    reducer: {
    data: dataReducer,
    modal: modalReducer
}
    // reducer:{
    //     data:dataSlice,
    //     modal:modalSlice
    // }
})