<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Scatter } from "vue-chartjs";
import { ChartData, ChartOptions } from "chart.js";

@Component({
  components: {}
})
export default class ParkLocationChart extends Mixins(Scatter) {
  // public parkings: IParkingData[] = [];

  public mounted(): void {
    this.renderChart(this.chartData, this.options);
  }

  public get chartData(): ChartData {
    const TOTAL = 150;
    const Y_RANGE = 100;
    const X_RANGE = 100;

    const values: { x: number; y: number }[] = [];

    for (let i = 0; i < TOTAL; i++) {
      values.push({
        x: (0.5 - Math.random()) * X_RANGE,
        y: (0.5 - Math.random()) * Y_RANGE
      });
    }

    return {
      datasets: [
        {
          label: "random",
          data: values,
          borderWidth: 1,
          borderColor: "#009000",
          pointRadius: 2,
          backgroundColor: "rgba(0, 150, 0, 0.15)",
          pointBackgroundColor: "#009000"
          // backgroundColor: "#009000"
        }
      ]
    } as ChartData;
  }

  public options = {
    responsive: true,
    maintainAspectRatio: false
  } as ChartOptions;
}
</script>

<style lang="scss" scoped></style>
