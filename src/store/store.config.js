import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import hrefSearchReducer from "./hrefSearch.slice";
import personReducer from "./person.slice";
import searchReducer from "./search.slice";


const store = configureStore({
    reducer: {
        hrefSearchReducer: hrefSearchReducer,
        movieReducer: movieReducer,
        personReducer: personReducer,
        searchReducer:searchReducer
    },

})

export {store};