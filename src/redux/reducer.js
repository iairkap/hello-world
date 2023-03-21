import { ADD_FAVORITE } from "./actions-types";
import { DELETE_FAVORITE } from "./actions-types";
import { FILTER_CARDS, ORDER_CARDS } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
      };
    case FILTER_CARDS:
      const allCharacterFiltered = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: allCharacterFiltered,
      };
    case ORDER_CARDS:
      return {
        ...state,
        myFavorites:
          payload === "Ascendete"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => a.id - b.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
