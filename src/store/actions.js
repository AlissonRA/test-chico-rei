import * as constants from "./mutation-types";

import Swal from "sweetalert2";

import { http, ls } from "@/services";
import { find, isEmpty } from "lodash";

export default {
  init({ commit }) {
    return new Promise((resolve, reject) => {
      commit(constants.LOADING, true);
      http
        .get("/start")
        .then(response => {
          commit(constants.INIT, response.data);
          commit(constants.LOADING, false);

          resolve(response.data);
        })
        .catch(error => {
          reject(error);
          commit(constants.LOADING);
        });

      commit(constants.SET_CART, ls.get("cart") || []);
    });
  },
  async addCart({ commit, state }, { id, quantity }) {
    const product = find(state.products, { id });
    const cartStore = find(state.cart, { id });
    let cart = {};

    if (isEmpty(cartStore)) {
      cart = {
        ...product,
        quantity: quantity || 1,
        price_total: (quantity || 1) * product.price
      };
      await commit(constants.ADD_CART, cart);
    } else {
      cart = {
        ...product,
        quantity: cartStore.quantity + (quantity || 1),
        price_total: (cartStore.quantity + (quantity || 1)) * product.price
      };
      await commit(constants.CHANGE_CART, cart);
    }

    await ls.set("cart", state.cart);
  },
  async updateItemCart({ commit, state }, { id, quantity }) {
    const product = find(state.products, { id });
    const cart = {
      ...product,
      quantity: quantity,
      price_total: quantity * product.price
    };

    await commit(constants.CHANGE_CART, cart);

    await ls.set("cart", state.cart);
  },
  deleteItemCart({ commit, state }, id) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Ao fazer isso os dados não poderão ser recuperados",
      icon: "warning",
      showCancelButton: true,
      customClass: {
        confirmButton: "btn btn-primary btn-fill",
        cancelButton: "btn btn-secondary btn-fill"
      },
      confirmButtonText: "Sim, remover!",
      cancelButtonText: "Cancelar",
      buttonsStyling: false
    }).then(async response => {
      if (response.value) {
        await commit(constants.DELETE_CART, id);

        await ls.set("cart", state.cart);
      }
    });
  }
};
