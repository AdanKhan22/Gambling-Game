// src/state/state.js
import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./Balance/balance.slice";
import biddingReducer from "./Bidding-Amount/bidding-Amount.js";

const store = configureStore({
    reducer: {
        balance : balanceReducer,
        bidding : biddingReducer,
    }
});

export default store;
