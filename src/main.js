import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
axios.defaults.baseURL =
  "https://frosty-bern-acwuycxv7kid.vapor-farm-f1.com/api";

Vue.use(VueAxios, axios);


new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
