import {createSlice} from "@reduxjs/toolkit";


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

        },
        scrollPosition: true,
    },
    reducers: {
        setParams: (state, action) => {
            state.search = {...state.search, ...action.payload}
            console.log()
        },
        switchScrollPosition: (state, action) => {
            state.scrollPosition = action.payload
        },
    }
})


const hrefSearchReducer = hrefSearchSlice.reducer;

export const {setParams, switchScrollPosition} = hrefSearchSlice.actions;


export default hrefSearchReducer