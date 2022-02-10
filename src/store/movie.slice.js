import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services";

export const getMovieList = createAsyncThunk(
    'movieSlice/getMovieList',
    async (queryString, {rejectWithValue}) => {
        try {
            switchScrollPosition()
            return await movieService.getDiscoverMovie(queryString);
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getMovieItem = createAsyncThunk(
    'movieSlice/getMovieItem',
    async ({id, queryString}, {dispatch, rejectWithValue}) => {
        try {
            return await movieService.getMovieById({id,queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getCreditsMovieItem = createAsyncThunk(
    'movieSlice/getCreditsMovieItem',
    async ({id, queryString}, {dispatch, rejectWithValue}) => {
        try {
            return await movieService.getMovieById({id,queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getTrailerMovieItem = createAsyncThunk(
    'movieSlice/getTrailerMovieItem',
    async ({id, queryString}, {dispatch, rejectWithValue}) => {
        try {
            return await movieService.getMovieById({id,queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)



const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movieList: [],
        movieItemDetails: undefined,
        credits: undefined,
        trailer: undefined,
        error: null,
        status: null,
        scrollPosition: true
    },
    reducers: {
        addMovieElement: (state, action) => {
            state.movieItemDetails = action.payload.movieItem
        },
        switchScrollPosition: (state, action) => {
            state.scrollPosition = action.payload
        }
    },
    extraReducers: {
        [getMovieList.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieList.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movieList = [...state.movieList, ...action.payload.results];
            state.error = null;
        },
        [getMovieList.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },


        [getMovieItem.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieItem.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movieItemDetails = action.payload;
            state.error = null;
        },
        [getMovieItem.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },


        [getCreditsMovieItem.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getCreditsMovieItem.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.credits = action.payload;
            state.error = null;
        },
        [getCreditsMovieItem.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },


        [getTrailerMovieItem.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getTrailerMovieItem.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.trailer = action.payload;
            state.error = null;
        },
        [getTrailerMovieItem.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

const movieReducer = movieSlice.reducer;


export const {addMovieElement, switchScrollPosition} = movieSlice.actions;

export default movieReducer;