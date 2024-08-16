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

        resetBidding: (state) => {
            state.value = 0;
        }
   
      },
})

export const {updateBiddng , resetBidding} = biddingSlice.actions;

export default biddingSlice.reducer;