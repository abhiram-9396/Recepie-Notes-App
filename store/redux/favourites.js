import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState:{
        ids:[]
    },
    reducers:{ //reducers are the functions which are responsible to change the state.
        addFavourite: (state, action) => {
            state.ids.push(action.payload);
        },
        removeFavourite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id),1);
        },
    }
});

export const addFavourite = favouriteSlice.actions.addFavourite;
export const removeFavourite = favouriteSlice.actions.removeFavourite;
export default favouriteSlice.reducer;