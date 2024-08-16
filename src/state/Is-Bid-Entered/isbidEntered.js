import { createSlice } from "@reduxjs/toolkit";

export const isBidEnteredSlice = createSlice({
    name: 'isBidEntered',
    initialState:{
        value: false,
    },

    reducers: {
        checkBidEntered: (state) => {
            state.value = !state.value; 
           
        },
   
      },
})

export const {checkBidEntered} = isBidEnteredSlice.actions;

export default isBidEnteredSlice.reducer;