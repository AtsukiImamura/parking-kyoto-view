<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Bubble } from "vue-chartjs";
import { Chart, ChartData, ChartOptions } from "chart.js";
import Axios from "axios";
import { IParkingData } from "../../declaration/interface/ParkingData";

@Component({
  components: {}
})
export default class ParkUnitChart extends Mixins(Bubble) {
  public parkings: IParkingData[] = [];

  public afterDatasetDraw(chart: Chart, options: ChartOptions) {
    // console.log(chart);
    // const ctx = chart.ctx;
    // ctx.fillStyle = "rgba(0,0,0, 0.2)";
    // ctx.fillRect(0, 0, 40, 60);
  }

  public mounted(): void {
    this.addPlugin({
      afterDatasetDraw: this.afterDatasetDraw
    });
    Axios.get("parking.json")
      .then(res => {
        this.parkings = res.data as IParkingData[];
      })
      .then(() => {
        this.renderChart(this.chartData, this.options);
      });
  }

  private sigmoid(x: number): number {
    const gain = 2;
    return (Math.tanh((gain * x) / 2) + 1) / 2;
  }

  public get chartData(): ChartData {
    const DIFF = 0.01;
    const LENGTH = 2;

    const dataSets: Chart.ChartDataSets[] = [];

    const summary: {
      [key: string]: {
        [key: string]: {
          x: number;
          y: number;
          r: number;
        };
      };
    } = {};
    const labels: string[] = [];
    for (const parking of this.parkings) {
      if (!parking.hourly_prices) {
        continue;
      }
      if (!summary[parking.unit_price]) {
        summary[parking.unit_price] = {};
      }
      if (!summary[parking.unit_price][parking.unit_period]) {
        summary[parking.unit_price][parking.unit_period] = {
          x: parking.unit_price,
          y: parking.unit_period,
          r: 0
        };
      }
      summary[parking.unit_price][parking.unit_period].r++;
      if (labels.length === 0) {
        labels.push(...Object.keys(parking.hourly_prices));
      }
    }

    const bubbles = Object.values(summary).reduce(
      (acc, cur) => {
        acc.push(...Object.values(cur));
        return acc;
      },
      [] as {
        x: number;
        y: number;
        r: number;
      }[]
    );
    const maxRadius = bubbles.reduce((acc, cur) => {
      return Math.max(cur.r, acc);
    }, 0);

    return {
      // labels: bubbles.map(b => "+"),
      datasets: [
        {
          data: bubbles.map(b => {
            b.r = (b.r / maxRadius) * 120;
            return b;
          }),
          borderWidth: 1,
          borderColor: "rgba(0, 150, 0, 0.7)",
          pointRadius: 0,
          backgroundColor: "rgba(0, 150, 0, 0.4)",
          pointStyle: "circle"
          // label:
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
          ticks: {
            suggestedMin: 5,
            callback: function(value, index, values) {
              return value + "min";
            }
          }
        }
      ],
      xAxes: [
        {
          ticks: {
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
