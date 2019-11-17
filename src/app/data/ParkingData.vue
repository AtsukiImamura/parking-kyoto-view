<template>
  <div>
    <div class="top">
      <div class="left title">
        <h3>駐車場データ</h3>
      </div>
      <div class="right actions">
        <img src="image/icon/download.svg" />
      </div>
    </div>
    <div class="table">
      <div class="table-header">
        <div class="row">
          <div class="column w-2">
            <a href>ID</a>
          </div>
          <div class="column w-3">
            <a href>駐車台数（普通車）</a>
          </div>
          <div class="column w-3">
            <a href>駐車台数（軽）</a>
          </div>
          <div class="column w-2">
            <a href>屋根</a>
          </div>
          <div class="column w-3">
            <a href>場内で入れ替え</a>
          </div>
          <div class="column w-2">
            <a href>立体駐車場</a>
          </div>
          <div class="column w-4">
            <a href>接する道路</a>
          </div>
          <div class="column w-4">
            <a href>入口の面する道路</a>
          </div>
          <div class="column w-3">
            <a href>入出庫管理システム</a>
          </div>
          <div class="column w-2">
            <a href>提携</a>
          </div>
          <div class="column w-6">
            <a href>提携先</a>
          </div>
        </div>
      </div>
      <div class="table-body">
        <div class="row to-detail" v-for="(parking, rIndex) in displayParkings" :key="rIndex">
          <div class="column w-2">
            <a @click="displayModalId = parking.id">{{ parking.id }}</a>
          </div>
          <div class="column w-3">{{ parking.num }}</div>
          <div class="column w-3">{{ parking.light_num }}</div>
          <div
            class="column w-2"
            :class="{'v--true': parking.has_roof.value, 'v--false': !parking.has_roof.value}"
          >{{ parking.has_roof.display }}</div>
          <div
            class="column w-3"
            :class="{'v--true': parking.can_park_in.value, 'v--false': !parking.can_park_in.value}"
          >{{ parking.can_park_in.display}}</div>
          <div
            class="column w-2"
            :class="{'v--true': parking.multi_floors.value, 'v--false': !parking.multi_floors.value}"
          >{{ parking.multi_floors.display }}</div>
          <div class="column w-4">
            <span
              :class="`road-level lv--${road}`"
              v-for="(road, index) in parking.roads"
              :key="index"
            >{{ road }}</span>
          </div>
          <div class="column w-4">
            <span
              :class="`road-level lv--${entranse}`"
              v-for="(entranse, index) in parking.entranses"
              :key="index"
            >{{ entranse }}</span>
          </div>
          <div class="column w-3">{{ parking.system.display }}</div>
          <div
            class="column w-2"
            :class="{'v--true': parking.coop.value, 'v--false': !parking.coop.value}"
          >{{ parking.coop.display }}</div>
          <div class="column w-6">{{ parking.coop_target }}</div>
          <ParkingDetail
            v-if="displayModalId === parking.id"
            :parking="parking"
            @close="displayModalId = ''"
          ></ParkingDetail>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  ITableInfo,
  IColumnInfo,
  IRowData
} from "../../declaration/interface/Data";
import {
  IParkingData,
  IParkingDisplayData
} from "../../declaration/interface/ParkingData";
import ParkingDetail from "./ParkingDetail.vue";
import Axios from "axios";
import ParkingUtil from "../../util/ParkingUtil";

@Component({
  components: { ParkingDetail }
})
export default class ParkingData extends Vue {
  // public mounted(): void {}

  private parkings: IParkingData[] = [];

  public displayModalId: string = "";

  public get displayParkings(): IParkingDisplayData[] {
    return ParkingUtil.convertParkingDataForDisplay(this.parkings);
  }

  public mounted(): void {
    Axios.get("parking.json").then(res => {
      this.parkings = res.data as IParkingData[];
    });
  }

  public get columns(): IColumnInfo[] {
    if (this.parkings.length == 0) {
      return [];
    }
    return Object.keys(this.parkings[0]).map((key, index) => {
      return {
        id: index,
        name: key,
        width: 2
      };
    });
  }

  public get columnsMap(): { [key: number]: IColumnInfo } {
    return this.columns.reduce(
      (acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      },
      {} as {
        [key: number]: IColumnInfo;
      }
    );
  }

  public get rows(): IRowData[] {
    return this.parkings.map((park, index) => {
      return {
        columns: Object.values(park).map((col: ParkingData, ci: number) => {
          return {
            value: String(col),
            columnId: ci
          };
        })
      };
    });
  }

  public get tableInfo(): ITableInfo {
    return {
      name: "",
      columns: this.columns,
      rows: this.rows.map(row => {
        row.columns = row.columns.map(data => {
          const column = this.columns[data.columnId];
          data.width = column ? column.width : 2;
          return data;
        });
        return row;
      })
    };
  }
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
  width: 100%;
  margin: 20px 0 10px 0;
  .title {
    h3 {
      font-size: 28px;
      margin: 12px 0;

      @include xs {
        font-size: 22px;
      }
    }
  }
  .actions {
    display: flex;
    img {
      width: 32px;
      margin: 3px 12px;
    }
  }
}

.table-body {
  a {
    color: #009000;
    text-decoration: underline;
  }
  .to-detail {
    &:hover {
      background-color: #fafafa;
    }
  }
}
</style>