import * as constants from "./mutation-types";
import { findIndex } from "lodash";

export default {
  [constants.LOADING]: (state, payload) => {
    state.loading = payload;
  },
  [constants.INIT]: (state, payload) => {
    state.heroSection = payload.heroSection;
    state.products = payload.products;
  },
  [constants.SET_CART]: (state, payload) => {
    state.cart = payload;
  },
  [constants.ADD_CART]: (state, payload) => {
    state.cart.push(payload);
  },
  [constants.CHANGE_CART]: (state, payload) => {
    state.cart.splice(findIndex(state.cart, ["id", payload.id]), 1, payload);
  },
  [constants.DELETE_CART]: (state, id) => {
    state.cart.splice(findIndex(state.cart, { id }), 1);
  }
};
