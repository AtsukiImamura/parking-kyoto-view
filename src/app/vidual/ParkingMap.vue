<template>
  <div class="wrapper" ref="wrapper">
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1pOo_dH4P8bBoUUN3INxqyzBEmU2VrNdd&z=15&ll=35.003700, 135.759645"
      :width="mapWidth"
      :height="mapHeight"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ParkingMap extends Vue {
  public mapHeight: number = 0;

  public mapWidth: number = 0;

  public mounted(): void {
    window.onresize = this.onResize;
    this.onResize();
  }

  private sigmoid(x: number): number {
    const gain = 2;
    return (Math.tanh((gain * x) / 2) + 1) / 2;
  }

  public onResize(): void {
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;

    const widthSigmoid = this.sigmoid((innerWidth - 300) / 1000);
    const heightSigmoid = this.sigmoid((innerHeight - 300) / 1000);

    this.mapHeight = innerHeight * (1 - 0.5 * heightSigmoid);
    this.mapWidth = innerWidth * (1.0 - 0.25 * widthSigmoid) * 0.9;
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 20px auto;
  @include xs {
    margin: 15px 5px;
  }
}
</style>