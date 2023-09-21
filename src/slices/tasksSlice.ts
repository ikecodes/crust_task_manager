import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface Task {
  tasks: {}[];
}
const initialTasksState: Task = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {
    resetTasks: state => {
      state.tasks = [];
    },
    addTask: (state, {payload}: PayloadAction<any>) => {
      state.tasks = [...state.tasks, payload];
    },
  },
});

export const {resetTasks, addTask} = tasksSlice.actions;

export default tasksSlice;
