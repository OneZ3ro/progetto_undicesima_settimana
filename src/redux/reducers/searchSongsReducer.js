import {
  GET_SEARCH_SONGS,
  IS_LOADING_SONGS_FALSE,
  IS_LOADING_SONGS_TRUE,
} from "../actions";

const initialState = {
  songs: [],
  isLoading: false,
};

const searchSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_SONGS:
      return {
        ...state,
        songs: action.payload,
      };

    case IS_LOADING_SONGS_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    case IS_LOADING_SONGS_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default searchSongsReducer;
