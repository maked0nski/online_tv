import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import hrefSearchReducer from "./hrefSearch.slice";


const store = configureStore({
    reducer: {
        movieReducer: movieReducer,
        hrefSearchReducer: hrefSearchReducer
    },

})

export {store};