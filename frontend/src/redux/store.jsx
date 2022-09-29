import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos/todoSlice";

export const store = configureStore({
    reducer: {
        todoReducer: todoSlice
    }
})