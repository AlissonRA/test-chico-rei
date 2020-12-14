import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { http } from "@/services";

import Notifications from "@/components/NotificationPlugin";
import Loading from "@/components/Loading";
import VueCurrencyFilter from "vue-currency-filter";

Vue.config.productionTip = false;

Vue.use(Notifications);
Vue.component("Loading", Loading);

/* Money */
Vue.use(VueCurrencyFilter, {
  symbol: "R$",
  thousandsSeparator: ".",
  fractionCount: 2,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true
});

new Vue({
  router,
  store,
  render: h => h(App),
  created: () => http.init()
}).$mount("#app");
