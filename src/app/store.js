import { configureStore } from "@reduxjs/toolkit";
import countersReducer from '../feature/counterSlice'

export const store = configureStore(
    {
        reducer : {
            counter : countersReducer,
        }
    }
);

 