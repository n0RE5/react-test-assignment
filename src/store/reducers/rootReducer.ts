import { combineReducers } from "@reduxjs/toolkit";
import booksReducer from "./booksReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    booksReducer,
    searchReducer
})

export default rootReducer