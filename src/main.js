import Vue from "vue";
import App from "./App.vue";
import jquery from "jquery";
require("bootstrap/dist/css/bootstrap.css");
require("devicons/css/devicons.css");
require("font-awesome/css/font-awesome.css");
require("./style.css");

require("bootstrap");
require("jquery.easing");
Vue.config.productionTip = false;
Vue.prototype.jquery = jquery;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
