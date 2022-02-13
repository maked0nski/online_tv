import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services";
import {switchScrollPosition} from "./hrefSearch.slice";


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

export const getTVList = createAsyncThunk(
    'movieSlice/getTVList',
    async (queryString, {rejectWithValue}) => {
        try {
            switchScrollPosition()
            return await movieService.getDiscoverTV(queryString);
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getMovieItem = createAsyncThunk(
    'movieSlice/getMovieItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getMovieById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getTvItem = createAsyncThunk(
    'movieSlice/getTvItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getTvById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getCreditsMovieItem = createAsyncThunk(
    'movieSlice/getCreditsMovieItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getMovieById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getCreditsTvItem = createAsyncThunk(
    'movieSlice/getCreditsTvItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getTvById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getTrailerMovieItem = createAsyncThunk(
    'movieSlice/getTrailerMovieItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getMovieById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)
export const getTrailerTvItem = createAsyncThunk(
    'movieSlice/getTrailerTvItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getTvById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

//
// export const getLanguages = createAsyncThunk(
//     'movieSlice/getLanguages',
//     async (_, {rejectWithValue}) => {
//         try {
//             console.log('11')
//             return await movieService.getLanguagesList();
//         } catch (e) {
//             rejectWithValue(e.message);
//         }
//     }
// )



const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movieList: [],
        tvList: [],
        movieItemDetails: undefined,
        tvItemDetails: undefined,
        credits: undefined,
        trailer: undefined,
        error: null,
        status: null,
        scrollPosition: true,
        scrollTVPosition: true,
        // languages: []
    },
    reducers: {
        addMovieElement: (state, action) => {
            state.movieItemDetails = action.payload.movieItem
        },
        switchScrollPosition: (state, action) => {
            state.scrollPosition = action.payload
        },
        switchScrollTVPosition: (state, action) => {
            state.scrollTVPosition = action.payload
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


        [getTVList.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getTVList.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.tvList = [...state.tvList, ...action.payload.results];
            state.error = null;
        },
        [getTVList.rejected]: (state, action) => {
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


        [getTvItem.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getTvItem.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.tvItemDetails = action.payload;
            state.error = null;
        },
        [getTvItem.rejected]: (state, action) => {
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



        [getCreditsTvItem.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getCreditsTvItem.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.credits = action.payload;
            state.error = null;
        },
        [getCreditsTvItem.rejected]: (state, action) => {
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
        },

        [getTrailerTvItem.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getTrailerTvItem.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.trailer = action.payload;
            state.error = null;
        },
        [getTrailerTvItem.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },


        // [getLanguages.fulfilled]: (state, action) => {
        //     state.status = 'fulfilled';
        //     state.languages = [...state.languages, ...action.payload];
        //     console.log(state.languages)
        //     state.error = null;
        // }
    }
})

const movieReducer = movieSlice.reducer;


export const {addMovieElement, switchScrollTVPosition} = movieSlice.actions;

export default movieReducer;