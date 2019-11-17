// import Vue from "vue";
import { Vue } from "vue-property-decorator";
import App from "./app/App.vue";
import AppHeader from "./app/common/AppHeader.vue";
import MenuList from "./app/common/MenuList.vue";
import ParkingMap from "./app/vidual/ParkingMap.vue";
import ParkingAttrSummary from "./app/vidual/ParkingAttrSummary.vue";
import AppFooter from "./app/common/AppFooter.vue";
import ParkingFeeSummary from "./app/vidual/ParkingFeeSummary.vue";
import ParkingLocationSummary from "./app/vidual/ParkingLocationSummary.vue";
import HeadMap from "./app/vidual/HeadMap.vue";
import Abstract from "./app/about/Abstract.vue";
import Achievement from "./app/about/Achievement.vue";
import Data from "./app/about/Data.vue";

import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    // データ
    { path: "/", component: App },
    // ビジュアル
    { path: "/view/parking_map", component: ParkingMap },
    { path: "/summary", component: ParkingAttrSummary },
    { path: "/summary/attributes", component: ParkingAttrSummary },
    { path: "/summary/fee", component: ParkingFeeSummary },
    { path: "/summary/location", component: ParkingLocationSummary },
    { path: "/summary/heatmap", component: HeadMap },
    // 研究について
    { path: "/about/abstract", component: Abstract },
    { path: "/about/achievement", component: Achievement },
    { path: "/about/data", component: Data }
  ]
});

new Vue({
  components: { AppHeader, MenuList, AppFooter },
  router: router
}).$mount("#app");
