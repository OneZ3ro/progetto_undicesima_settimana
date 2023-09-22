import {
  GET_SEARCH_ARTIST,
  GET_SEARCH_ARTIST_TRACKS,
  IS_LOADING_ARTIST_FALSE,
  IS_LOADING_ARTIST_TRUE,
} from "../actions";

const initialState = {
  artist: null,
  tracks: [],
  isLoading: false,
};

const searchArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };

    case GET_SEARCH_ARTIST_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };

    case IS_LOADING_ARTIST_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    case IS_LOADING_ARTIST_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default searchArtistReducer;
