import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services";


export const getTVList = createAsyncThunk(
    'tvSlice/getTVList',
    async (queryString, {rejectWithValue}) => {
        try {
            switchScrollPosition()
            return await movieService.getDiscoverTV(queryString);
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)


export const getTvItem = createAsyncThunk(
    'tvSlice/getTvItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getTvById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getCreditsTvItem = createAsyncThunk(
    'tvSlice/getCreditsTvItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getTvById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

export const getTrailerTvItem = createAsyncThunk(
    'tvSlice/getTrailerTvItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getTvById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
)

const tvSlice = createSlice({
    name: 'tvSlice',
    initialState: {
        tvList: [],
        tvItemDetails: undefined,
        error: null,
        status: null,
        scrollTVPosition: true,
        trailer: undefined,
    },
    reducers: {
        setElement: (state, action) => {
            state.tvItemDetails = action.payload.movieItem
        },
        switchScrollTVPosition: (state, action) => {
            state.scrollTVPosition = action.payload
        }
    },
    extraReducers: {
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
        }

    }
})

