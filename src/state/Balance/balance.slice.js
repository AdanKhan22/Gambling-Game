import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: 'balance',
    initialState:{
        value: 500,
    },

    reducers: {
        increment: (state) => {
            state.value += 100; // Update the state value with the payload
        },
        decrement: (state) => {
            state.value -=100;
        },
        
        deductBiddingAmount : (state , action ) => {
            state.value -= action.payload;
        },
        
      },
})

export const {increment , decrement , deductBiddingAmount} = balanceSlice.actions;

export default balanceSlice.reducer;