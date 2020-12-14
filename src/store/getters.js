import { find } from "lodash";

export default {
  getProductById: state => id => {
    return find(state.products, { id });
  }
};
