import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './uiSlice'
import projectsReducer from './projectsSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectsReducer,
  },
})