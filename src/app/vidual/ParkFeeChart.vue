<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Line } from "vue-chartjs";
import { ChartData, ChartOptions } from "chart.js";
import Axios from "axios";
import { IParkingData } from "../../declaration/interface/ParkingData";

@Component({
  components: {}
})
export default class ParkFeeChart extends Mixins(Line) {
  public parkings: IParkingData[] = [];

  public mounted(): void {
    Axios.get("parking.json")
      .then(res => {
        this.parkings = res.data as IParkingData[];
      })
      .then(() => {
        this.renderChart(this.chartData, this.options);
      });
  }

  public get chartData(): ChartData {
    const DIFF = 0.01;
    const LENGTH = 2;

    const dataSets: Chart.ChartDataSets[] = [];
    const labels: string[] = [];
    for (const parking of this.parkings) {
      if (!parking.hourly_prices) {
        continue;
      }
      dataSets.push({
        data: Object.values(parking.hourly_prices),
        borderWidth: 0,
        borderColor: "rgba(200, 255, 200, 0.05)",
        pointRadius: 0,
        backgroundColor: "rgba(0, 150, 0, 0.07)"
      });
      if (labels.length === 0) {
        labels.push(...Object.keys(parking.hourly_prices));
      }
    }

    return {
      labels: labels,
      datasets: dataSets
    } as ChartData;
  }

  public options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 5000,
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
