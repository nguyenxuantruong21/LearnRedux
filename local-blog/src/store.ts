import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.Slice'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

// config typescript
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
