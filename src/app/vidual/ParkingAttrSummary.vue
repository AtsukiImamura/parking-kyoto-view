<template>
  <div class="charts">
    <div class="chart-area">
      <div class="title">
        <h3>駐車台数累積</h3>
      </div>
      <div class="chart">
        <ParkNumAccChart></ParkNumAccChart>
      </div>
    </div>
    <div class="chart-area multi">
      <div>
        <div class="chart-area">
          <div class="title">
            <h3>屋根</h3>
          </div>
          <div class="chart">
            <RoofChart></RoofChart>
          </div>
        </div>
      </div>
      <div>
        <div class="chart-area">
          <div class="title">
            <h3>場内での駐車</h3>
          </div>
          <div class="chart">
            <ParkInsideChart></ParkInsideChart>
          </div>
        </div>
      </div>
    </div>
    <div class="chart-area multi">
      <div>
        <div class="chart-area">
          <div class="title">
            <h3>立体・平面</h3>
          </div>
          <div class="chart">
            <ParkingShapeChart></ParkingShapeChart>
          </div>
        </div>
      </div>
      <div>
        <div class="chart-area">
          <div class="title">
            <h3>料金収受方式</h3>
          </div>
          <div class="chart">
            <TollSystemChart></TollSystemChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ParkNumAccChart from "./ParkNumAccChart.vue";
import RoofChart from "./RoofChart.vue";
import ParkInsideChart from "./ParkInsideChart.vue";
import ParkingShapeChart from "./ParkingShapeChart.vue";
import TollSystemChart from "./TollSystemChart.vue";

@Component({
  components: {
    ParkNumAccChart,
    RoofChart,
    ParkInsideChart,
    ParkingShapeChart,
    TollSystemChart
  }
})
export default class ParkingAttrSummary extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
@include charts;
</style>
