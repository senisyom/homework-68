import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosApi from "./axiosApi";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoState {
  tasks: Task[];
  taskForm: string;
  isLoading: boolean;
  error: boolean;
}

const initialState: TodoState = {
  tasks: [],
  taskForm: "",
  isLoading: false,
  error: false,
};

export const fetchTask = createAsyncThunk("todo/fetchTask", async () => {
  const { data } = await axiosApi<Task[]>("todo.json");
  return data;
});
export const addTask = createAsyncThunk(
  "todo/addTask",
  async (title: string) => {
    const { data } = await axiosApi.post<Task>("tasks.json", {
      title,
      completed: false,
    });
    return data;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTaskInput: (state, action: PayloadAction<string>) => {
      state.taskForm = action.payload;
    },
    getNewTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTask.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTask.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.taskForm = "";
      });
  },
});
export const { addTaskInput } = todoSlice.actions;
export default todoSlice.reducer;
