import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    characters:[],
    favorites:[],
    detail:[],
    isNavigate: false
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
       getCharacters:(state, action)=>{
            state.characters = action.payload
       },
       getNavigate: (state)=>{
            state.isNavigate = !state.isNavigate
       },
       getFavorites: (state , action)=>{
            state.favorites.push(action.payload)
       },
       getDelete: (state, action)=>{
          console.log(action.payload)
          const delte = state.favorites.filter(chara => chara.id !== action.payload)
          state.favorites = delte
       },
       getDetail:(state , action)=>{
          state.detail =action.payload
       }
    }
});


// Action creators are generated for each case reducer function
export const { getCharacters ,getNavigate ,deleteChara , getFavorites ,getDelete ,getDetail} = characterSlice.actions;