<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Line } from "vue-chartjs";
import { ChartData, ChartOptions } from "chart.js";

@Component({
  components: {}
})
export default class ParkFeeChart extends Mixins(Line) {
  // public parkings: IParkingData[] = [];

  public mounted(): void {
    this.renderChart(this.chartData, this.options);
  }

  private sigmoid(x: number): number {
    const gain = 2;
    return (Math.tanh((gain * x) / 2) + 1) / 2;
  }

  public get chartData(): ChartData {
    const DIFF = 0.01;
    const LENGTH = 2;

    const labels = [];
    const sigmoidValues = [];
    for (let i = 0; i < LENGTH / DIFF; i++) {
      const x = -0.5 * LENGTH + DIFF * i;
      labels.push(String(x).slice(0, 4));
      sigmoidValues.push(this.sigmoid(x));
    }

    return {
      labels: labels,
      datasets: [
        {
          label: "sigmoid",
          data: sigmoidValues,
          borderWidth: 1,
          borderColor: "#009000",
          pointRadius: 0,
          backgroundColor: "rgba(0, 150, 0, 0.15)"
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
