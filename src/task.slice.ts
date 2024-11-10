import { Action, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState



export const fetchTask = createAsyncThunk('todo/fetchTask', async () => {
    const { data: todo } = await axiosApi<number | null>('todo.json');
    return todo || 0;
});


export const todoSlice = createTodo({
    name: 'todo',
    initialState,
    reducers: {}
    extraReducers: (builder) => {
        builder.
            addCase(fetchTask.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(fetchTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.value = action.payload
            })
            .addCase(fetchTask.rejected, (state) => {
                state.isLoading = true;
                state.error = true;
            });
    }
})
