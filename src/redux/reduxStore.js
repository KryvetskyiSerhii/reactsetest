import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articles from "./articles";
import menu from "./menu";

const rootReducer = combineReducers({
    modal: menu,
    articles: articles
})


export const store = configureStore({
    reducer: rootReducer
})