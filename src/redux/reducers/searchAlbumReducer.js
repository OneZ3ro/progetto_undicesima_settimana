import {
  GET_SEARCH_ALBUM,
  IS_LOADING_ALBUM_FALSE,
  IS_LOADING_ALBUM_TRUE,
} from "../actions";

const initialState = {
  album: [],
  isLoading: false,
};

const searchAlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ALBUM:
      return {
        ...state,
        album: action.payload,
      };

    case IS_LOADING_ALBUM_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    case IS_LOADING_ALBUM_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default searchAlbumReducer;
