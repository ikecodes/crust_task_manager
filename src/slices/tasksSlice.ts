import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ITask} from '../ts/interfaces';

export interface Task {
  tasks: ITask[];
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
    deleteTask: (state, {payload}: PayloadAction<any>) => {
      const filteredTask = state.tasks.filter(task => task.id !== payload);
      state.tasks = filteredTask;
    },
    checkTask: (state, {payload}: PayloadAction<any>) => {
      const updatedTask = state.tasks.map(task =>
        task.id === payload ? {...task, isCompleted: !task.isCompleted} : task,
      );
      state.tasks = updatedTask;
    },
  },
});

export const {resetTasks, addTask, deleteTask, checkTask} = tasksSlice.actions;

export default tasksSlice;
