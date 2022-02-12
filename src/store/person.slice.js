import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services";


export const getAllPerson = createAsyncThunk(
    'personSlice/getAllPerson',
    async (queryString, {rejectWithValue}) => {
        try {
            scrollPersPosition();
            return await movieService.getAllPersons(queryString);
        } catch (e) {
            rejectWithValue(e.message);
        }
    }
);

export const getPersonItem = createAsyncThunk(
    'personSlice/getPersonItem',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getPersonById({id, queryString})
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)


export const getPersonMoreInfo = createAsyncThunk(
    'personSlice/getPersonMoreInfo',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getPersonExternalInfo({id, queryString})
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const getPersonCombined_credits = createAsyncThunk(
    'personSlice/getPersonCombined_credits',
    async ({id, queryString}, {rejectWithValue}) => {
        try {
            return await movieService.getCombined_credits({id, queryString})
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)



const personSlice = createSlice({
    name: 'personSlice',
    initialState: {
        personsList: [],
        personItem: undefined,
        combined_credits: undefined,
        moreInfo: undefined,
        personDetail: undefined,
        error: null,
        status: null,
        persScrollPosition: true,
    },
    reducers: {
        scrollPersPosition: (state, action) => {
            state.persScrollPosition = action.payload
        },
    },
    extraReducers: {
        [getAllPerson.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllPerson.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.personsList = [...state.personsList, ...action.payload.results];
            state.error = null;
        },
        [getAllPerson.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

        [getPersonItem.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getPersonItem.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.personItem = action.payload;
            state.error = null;
        },
        [getPersonItem.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },


        [getPersonMoreInfo.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.moreInfo = action.payload;
            state.error = null;
        },


        [getPersonCombined_credits.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.combined_credits = action.payload;
            state.error = null;
        },
    }
})

const personReducer = personSlice.reducer;

export const {scrollPersPosition} = personSlice.actions;

export default personReducer