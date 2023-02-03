import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  charaSearch: [],
  favorites: [],
  detail: [],
  favoCharacter: [],
  moreConfigure: false,
  isNavigate: false,
  charaDelete: false,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    getCharacters: (state, action) => {
      state.characters = action.payload;
    },
    getSearch: (state, action) => {
      state.charaSearch = action.payload;
    },
    getNavigate: (state) => {
      state.isNavigate = !state.isNavigate;
    },
    getFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    getDelete: (state, action) => {
      console.log(action.payload);
      const delte = state.favorites.filter(
        (chara) => chara.id !== action.payload
      );
      state.favorites = delte;
    },
    getDetail: (state, action) => {
      state.detail = action.payload;
    },
    getConfigure: (state) => {
      state.moreConfigure = !state.moreConfigure;
    },
    getSearchChara: (state, action) => {
      console.log(action.payload);
      let charac = state.charaSearch.filter((chara) => {
        if (
          chara.name
            .toString()
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        ) {
          return chara;
        }
      });
      state.characters = charac;
    },
    getDesenFavo: (state, action) => {
      if (action.payload === "Ascendente") {
        state.characters = state.characters.sort((a, b) =>
          a.id > b.id ? 1 : -1
        );
      } else if (action.payload === "Descendente") {
        state.characters = state.characters.sort((a, b) =>
          a.id > b.id ? -1 : 1
        );
      }
    },
    getCharaDelete: (state) => {
      state.charaDelete = !state.charaDelete;
    },
    getFavoCharacters: (state , action)=>{
      state.favoCharacter = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  getCharacters,
  getNavigate,
  deleteChara,
  getFavorites,
  getDelete,
  getDetail,
  getConfigure,
  getSearchChara,
  getSearch,
  getDesenFavo,
  getCharaDelete,
  getFavoCharacters,
} = characterSlice.actions;
