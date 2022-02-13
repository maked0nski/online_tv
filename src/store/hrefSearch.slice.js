import {createSlice} from "@reduxjs/toolkit";
import {LOCALES} from "../i18n";


const hrefSearchSlice = createSlice({
    name: 'hrefSearchSlice',
    initialState: {
        search: {
            language: 'uk-UA',
            sort_by: 'popularity.desc',
            page: 1,
            pageTv: 1,
            pagePerson: 1,
            with_genres: '',
            locale: LOCALES.RUSSIAN,
            query: null
        },
        scrollPosition: true,
    },
    reducers: {
        setParams: (state, action) => {
            state.search = {...state.search, ...action.payload}
        },
        switchScrollPosition: (state, action) => {
            state.scrollPosition = action.payload
        },
    }
})


const hrefSearchReducer = hrefSearchSlice.reducer;

export const {setParams, switchScrollPosition} = hrefSearchSlice.actions;


export default hrefSearchReducer