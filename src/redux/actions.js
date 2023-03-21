import { ADD_FAVORITE } from "./actions-types";
import { DELETE_FAVORITE } from "./actions-types";
import { FILTER_CARDS, ORDER_CARDS } from "./actions-types";

export const addFavorite = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const OrderCards = (id) => {
  return { type: ORDER_CARDS, payload: id };
};
