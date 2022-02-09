import {createSlice} from "@reduxjs/toolkit";

const hrefSearchSlice = createSlice({
    name: 'hrefSearchSlice',
    initialState: {
        search: {
            language: 'uk-UA',
            sort_by: 'popularity.desc',
            page: 1,
            with_genres: ''
        }
    },
    reducers: {
        setParams: (state, action) => {
            state.search = {...state.search, ...action.payload}
        }
    }
})


const hrefSearchReducer = hrefSearchSlice.reducer;

export const {setParams} = hrefSearchSlice.actions;


export default hrefSearchReducer