import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import hrefSearchReducer from "./hrefSearch.slice";
import personReducer from "./person.slice";


const store = configureStore({
    reducer: {
        movieReducer: movieReducer,
        hrefSearchReducer: hrefSearchReducer,
        personReducer: personReducer
    },

})

export {store};