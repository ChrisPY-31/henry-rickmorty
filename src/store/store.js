import { configureStore } from '@reduxjs/toolkit'
import { characterSlice } from './reducer/characters/character'

export const store = configureStore({
  reducer: {
    character: characterSlice.reducer
  },
})