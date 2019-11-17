<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import { Doughnut } from "vue-chartjs";
import { ChartData, ChartOptions } from "chart.js";
import { IParkingData } from "../../declaration/interface/ParkingData";
import Axios from "axios";

@Component({
  components: {}
})
export default class RoofChart extends Mixins(Doughnut) {
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
    const roofCounts = this.parkings.reduce(
      (acc, cur) => acc + (cur.has_roof ? 1 : 0),
      0
    );

    return {
      labels: ["有", "無"],
      datasets: [
        {
          label: "屋根の有無",
          data: [roofCounts, this.parkings.length - roofCounts],
          borderWidth: 1,
          borderColor: ["#009000", "#c0c0c0"],
          backgroundColor: ["#009000", "#c0c0c0"]
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
