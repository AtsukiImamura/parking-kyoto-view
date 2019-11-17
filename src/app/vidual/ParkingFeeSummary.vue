<template>
  <div>
    <h3>駐車場価格サマリー</h3>
    <p>準備中</p>
    <div class="hoge">
      <ParkFeeChart></ParkFeeChart>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ParkFeeChart from "./ParkFeeChart.vue";

@Component({
  components: { ParkFeeChart }
})
export default class ParkingFeeSummary extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
.hoge {
  width: calc(85vw - 290px);
  @include xs {
    width: calc(100vw - 60px);
  }
}
</style>
