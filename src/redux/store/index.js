import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSongsReducer from "../reducers/searchSongsReducer";
import searchAlbumReducer from "../reducers/searchAlbumReducer";
import searchArtistReducer from "../reducers/searchArtistReducer";
import searchMainReducer from "../reducers/searchMainReducer";

const rootReducer = combineReducers({
  searchMain: searchMainReducer,
  searchSongs: searchSongsReducer,
  searchAlbum: searchAlbumReducer,
  searchArtist: searchArtistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
