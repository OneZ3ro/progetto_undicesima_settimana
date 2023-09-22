import { GET_HIPHOP, GET_POP, GET_ROCK } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hipHop: [],
};

const searchMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK:
      return {
        ...state,
        rock: action.payload,
      };

    case GET_POP:
      return {
        ...state,
        pop: action.payload,
      };

    case GET_HIPHOP:
      return {
        ...state,
        hiphop: action.payload,
      };

    default:
      return state;
  }
};

export default searchMainReducer;
