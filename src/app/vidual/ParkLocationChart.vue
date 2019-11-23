<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Scatter, Bubble } from "vue-chartjs";
import { ChartData, ChartOptions } from "chart.js";
import Axios from "axios";
import { IParkingData } from "../../declaration/interface/ParkingData";

@Component({
  components: {}
})
export default class ParkLocationChart extends Mixins(Bubble) {
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

    const bubbles: { x: number; y: number; r: number }[] = this.parkings.map(
      parking => {
        return {
          x: parking.coordinates[0],
          y: parking.coordinates[1],
          r: (parking.num + parking.light_num) * 2
        };
      }
    );

    return {
      datasets: [
        {
          // label: "random",
          data: bubbles,
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
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          display: false
          // ticks: {
          //   callback: function(value, index, values) {
          //     return Math.floor(Number(value) * 100) / 100;
          //   }
          // }
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    }
  } as ChartOptions;
}
</script>

<style lang="scss" scoped></style>
