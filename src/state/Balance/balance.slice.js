import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: 'balance',
    initialState:{
        value: 1500,
    },

    reducers: {
        increment: (state , action) => {
            state.value += 100 + action.payload ; 
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