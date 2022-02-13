import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services";


export const searchMovie = createAsyncThunk(
    'searchSlice/searchMovie',
    async (queryString, {rejectWithValue}) => {
        try {
            return await movieService.getSearchMovie(queryString)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)
export const getSearchTv = createAsyncThunk(
    'searchSlice/getSearchTv',
    async (queryString, {rejectWithValue}) => {
        try {
            return await movieService.getSearchTv(queryString)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)
export const getSearchPerson = createAsyncThunk(
    'searchSlice/getSearchPerson',
    async (queryString, {rejectWithValue}) => {
        try {
            return await movieService.getSearchPerson(queryString)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)
const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        searchResult: [],
        movie: undefined,
        tv: undefined,
        person: undefined,
        status: null,
        error: null
    },
    reducers: {
        setMovie: (state, action) => {
            state.movie = {...state.movie, ...action.payload}
        },
        setTv: (state, action) => {
            state.tv = {...state.tv, ...action.payload}
        },
        setPerson: (state, action) => {
            state.person = {...state.person, ...action.payload}
        }
    },
    extraReducers: {
        [searchMovie.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            // state.movie = [...state.searchResult, ...action.payload];
            state.movie = action.payload;
            state.error = null;
        },
        [getSearchTv.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            // state.tv = [...state.searchResult, ...action.payload];
            state.tv = action.payload;
            state.error = null;
        },
        [getSearchPerson.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            // state.person = [...state.searchResult, ...action.payload];
            state.person = action.payload;
            state.error = null;
        }
    }
})

const searchReducer = searchSlice.reducer;

export const {setMovie, setTv, setPerson} = searchSlice.actions;

export default searchReducer