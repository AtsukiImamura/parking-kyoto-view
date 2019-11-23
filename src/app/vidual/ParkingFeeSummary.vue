<template>
  <div class="charts">
    <div class="chart-area">
      <div class="title">
        <h3>駐車場料金分布</h3>
      </div>
      <div class="chart">
        <ParkFeeChart></ParkFeeChart>
      </div>
    </div>
    <div class="chart-area">
      <div class="title">
        <h3>単位時間・単位料金の分布</h3>
      </div>
      <div class="chart">
        <ParkUnitChart></ParkUnitChart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ParkFeeChart from "./ParkFeeChart.vue";
import ParkUnitChart from "./ParkUnitChart.vue";

@Component({
  components: { ParkFeeChart, ParkUnitChart }
})
export default class ParkingFeeSummary extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
@include charts;
</style>
