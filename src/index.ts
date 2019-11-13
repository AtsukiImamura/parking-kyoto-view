// import Vue from "vue";
import { Vue } from "vue-property-decorator";
import App from "./app/App.vue";
import AppHeader from "./app/common/AppHeader.vue";
import MenuList from "./app/common/MenuList.vue";

import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [{ path: "/", component: App }]
});

new Vue({
  components: { AppHeader, MenuList },
  router: router
}).$mount("#app");
