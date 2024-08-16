import { createSlice } from "@reduxjs/toolkit";

export const biddingSlice = createSlice({
    name: 'bidding',
    initialState:{
        value: 0,
    },

    reducers: {
        updateBiddng: (state , action) => {
            state.value += action.payload; 
           
        },
   
      },
})

export const {updateBiddng} = biddingSlice.actions;

export default biddingSlice.reducer;