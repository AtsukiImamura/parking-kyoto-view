<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { Bar } from "vue-chartjs";
import { ChartData, ChartOptions } from "chart.js";

@Component({
  components: {}
})
export default class PriceChart extends Mixins(Bar) {
  @Prop() public priceInfo!: Map<string, number>;

  public mounted(): void {
    this.renderChart(this.chartData, this.options);
  }

  public get chartData(): ChartData {
    return {
      labels: this.priceInfo ? Object.keys(this.priceInfo) : [],
      datasets: [
        {
          label: "価格",
          data: this.priceInfo ? Object.values(this.priceInfo) : [],
          borderWidth: 1,
          borderColor: "#009000",
          backgroundColor: "#009000"
        }
      ]
    } as ChartData;
  }

  public options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 100,
            suggestedMax: 2000,
            callback: function(value, index, values) {
              return value + "円";
            }
          }
        }
      ]
    }
  } as ChartOptions;
}
</script>

<style lang="scss" scoped></style>
