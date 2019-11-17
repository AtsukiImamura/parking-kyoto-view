<template>
  <div>
    <h3>駐車場位置サマリー</h3>
    <p>準備中</p>
    <div class="hoge">
      <ParkLocationChart></ParkLocationChart>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ParkLocationChart from "./ParkLocationChart.vue";

@Component({
  components: { ParkLocationChart }
})
export default class ParkingLocationSummary extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
.hoge {
  width: calc(85vw - 290px);
  @include xs {
    width: calc(100vw - 60px);
  }
  margin: 10px auto;
}
</style>
