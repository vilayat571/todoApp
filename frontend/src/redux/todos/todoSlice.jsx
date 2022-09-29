import { createAsyncThunk, createSlice, nanodata } from "@reduxjs/toolkit";
import axios from 'axios';
export const getTodo = createAsyncThunk('getTodo/', async () => {
    const url = 'http://localhost:7000/todos';
    const data = await fetch(url);
    return await data.json();
});
export const addNew = createAsyncThunk('addNew/', async (data) => {
    const url = 'http://localhost:7000/todos';
    const veri = await axios.post(url, data);
    return veri.data;
});
export const removeOld = createAsyncThunk('removeOld/', async (data) => {
    console.log(data)
    const url = 'http://localhost:7000/todos';
    const veri = await axios.delete(`${url}/${data}`)
    return data;

});
export const toggle = createAsyncThunk('toggle/', async ({ id, data }) => {
    const url = 'http://localhost:7000/todos';
    const veri = await axios.patch(`${url}/${id}`, data);
    return veri.data;
})
export const todoSlice = createSlice({
    name: "todoReducer",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        allFilter: 'all'
    },
    extraReducers: {
        [getTodo.pending]: (state) => {
            state.isLoading = true
        },
        [getTodo.fulfilled]: (state, action) => {
            state.items = action.payload
        },
        [addNew.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.items.push(action.payload)
        },
        [removeOld]: (state, action) => {
            const filtered = state.items.filter(item => {
                return item.data !== action.payload
            });
            state.items = filtered;
        },
        [toggle.fulfilled]: (state, action) => {
            const { id, completed } = action.payload
            const index = state.items.findIndex(item => item.id === id);
            state.items[index].completed = !completed
        }
    },
    reducers: {
        change: (state, action) => {
            state.allFilter = action.payload
        },
        clearAll: (state, action) => {
            state.items = state.items.filter((item) => {
                return item.completed !== true
            })
        }
    }
});
export const selectedItems = state => state.todoReducer.items;
export const { change, clearAll } = todoSlice.actions;
export default todoSlice.reducer;