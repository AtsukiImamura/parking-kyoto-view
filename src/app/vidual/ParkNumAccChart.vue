<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Bar } from "vue-chartjs";
import { ChartData, ChartOptions } from "chart.js";
import { IParkingData } from "../../declaration/interface/ParkingData";
import Axios from "axios";

@Component({
  components: {}
})
export default class ParkNumAccChart extends Mixins(Bar) {
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
    const parkNums = this.parkings
      .map(park => park.num + park.light_num)
      .sort((a, b) => a - b);

    // 累積
    const parkNumAccs: number[] = [];
    let currentSum = 0;
    for (const parkNum of parkNums) {
      currentSum += parkNum;
      parkNumAccs.push(currentSum);
    }

    return {
      labels: this.parkings.map((p, index) => String(index + 1)),
      datasets: [
        {
          label: "駐車台数累積",
          data: parkNumAccs,
          borderWidth: 1,
          borderColor: "#009000",
          backgroundColor: "#009000"
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
