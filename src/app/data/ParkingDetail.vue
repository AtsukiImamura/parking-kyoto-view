<template>
  <div class="wrapper" @click="close">
    <div class="modal" ref="modal" @click="doNothing">
      <div class="map">
        <iframe
          :src="mapSrc"
          :width="mapWidth"
          :height="mapHeight"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
      <div class="summary-info info-area">
        <div class="title">
          <h3>サマリー</h3>
        </div>
        <div class="info">
          <div class="key">ID</div>
          <div class="value">{{ parking.id }}</div>
        </div>
        <div class="info">
          <div class="key">緯度</div>
          <div class="value">{{ parking.coordinates.x }}</div>
        </div>
        <div class="info">
          <div class="key">経度</div>
          <div class="value">{{ parking.coordinates.y }}</div>
        </div>
      </div>
      <div class="price-info info-area" v-if="parking.hourly_prices">
        <div class="title">
          <h3>料金</h3>
        </div>
        <div class="unit-info">
          <div class="unit">
            <div class="key">昼間単位価格</div>
            <div class="value">{{ parking.unit_price }}円</div>
          </div>
          <div class="unit">
            <div class="key">昼間単位時間</div>
            <div class="value">{{ parking.unit_period }}分</div>
          </div>
        </div>
        <div class="chart-area">
          <PriceChart :price-info="parking.hourly_prices"></PriceChart>
        </div>
      </div>
      <div class="detail-info info-area">
        <div class="title">
          <h3>属性</h3>
        </div>
        <div class="info">
          <div class="key">駐車台数（普通車）</div>
          <div class="value">{{ parking.num }}</div>
        </div>
        <div class="info">
          <div class="key">駐車台数（軽）</div>
          <div class="value">{{ parking.light_num }}</div>
        </div>
        <div class="info">
          <div class="key">屋根</div>
          <div
            class="value"
            :class="{'v--true': parking.has_roof.value, 'v--false': !parking.has_roof.value}"
          >{{ parking.has_roof.display }}</div>
        </div>
        <div class="info">
          <div class="key">駐車場内での入れ替え</div>
          <div
            class="value"
            :class="{'v--true': parking.can_park_in.value, 'v--false': !parking.can_park_in.value}"
          >{{ parking.can_park_in.display}}</div>
        </div>
        <div class="info">
          <div class="key">形式</div>
          <div
            class="value"
            :class="{'v--true': parking.multi_floors.value, 'v--false': !parking.multi_floors.value}"
          >{{ parking.multi_floors.display }}</div>
        </div>
        <div class="info">
          <div class="key">面する道路</div>
          <div class="value">
            <span
              :class="`road-level lv--${road}`"
              v-for="(road, index) in parking.roads"
              :key="index"
            >{{ road }}</span>
          </div>
        </div>
        <div class="info">
          <div class="key">入口の面する道路</div>
          <div class="value">
            <span
              :class="`road-level lv--${entranse}`"
              v-for="(entranse, index) in parking.entranses"
              :key="index"
            >{{ entranse }}</span>
          </div>
        </div>
        <div class="info">
          <div class="key">料金収受システム</div>
          <div class="value">{{ parking.system.display }}</div>
        </div>
        <div class="info">
          <div class="key">提携</div>
          <div
            class="value"
            :class="{'v--true': parking.coop.value, 'v--false': !parking.coop.value}"
          >{{ parking.coop.display }}</div>
        </div>
        <div class="info">
          <div class="key">提携先</div>
          <div class="value">{{ parking.coop_target }}</div>
        </div>
      </div>
      <div class="mobile-close-button" @click="close()">
        <div class="i">
          <span>閉じる</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { IParkingDisplayData } from "../../declaration/interface/ParkingData";
import PriceChart from "./PriceChart.vue";

@Component({
  components: { PriceChart }
})
export default class ParkingDetail extends Vue {
  @Prop() public parking!: IParkingDisplayData;

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

    this.mapHeight = innerHeight * (1 - 0.4 * heightSigmoid) * 0.6;
    this.mapWidth =
      innerWidth * (1.1 - 0.6 * widthSigmoid) * 0.9 * (1.8 - widthSigmoid);
    (this.$refs.modal as HTMLDivElement).style.height =
      innerHeight * (0.5 + 0.4 * heightSigmoid) + "px";
    //   innerHeight * (1 - 0.24 * heightSigmoid) - 10 + "px";
    (this.$refs.modal as HTMLDivElement).style.width =
      innerWidth * (1.1 - 0.6 * widthSigmoid) + "px";
  }

  public mapHeight: number = 0;

  public mapWidth: number = 0;

  public get mapSrc(): string {
    return `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${this.parking.coordinates.y},${this.parking.coordinates.x}&zoom=17`;
  }

  public get apiKey(): string {
    return "AIzaSyB1kasGQgq9yPz6JtNaTHnIgdM-c3-AcCM";
  }

  @Emit()
  public close(): void {}

  public doNothing(e: Event): void {
    // return false;
    e.stopPropagation();
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  .modal {
    width: 55vw;
    min-width: 360px;
    height: 75vh;
    min-height: 200px;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 30px auto;
    padding: 25px 0;
    @include xs {
      //   padding: 25px 0 50px;
      //   position: relative;
    }
    .mobile-close-button {
      display: none;
      @include xs {
        position: fixed;
        height: 25px;
        bottom: 0px;
        left: 0px;
        width: 100%;
        padding: 15px;
        background-color: #009000;
        color: #ffffff;
        display: flex;
        justify-content: center;
      }
    }
    .map {
      margin: 10px;
      display: flex;
      justify-content: center;
    }
    .info-area {
      width: 90%;
      margin: 25px auto;
      .title {
        margin: 15px 0 10px 0;
        padding: 8px 0px;
        color: #808080;
        h3 {
          padding: 0;
          margin: 0;
        }
      }
      .info {
        display: flex;
        padding: 3px 0;
        &:nth-child(even) {
          background-color: #f8f8f8;
        }
        .key {
          width: 37%;
          padding: 5px 1.5%;
          @include xs {
            width: 46%;
          }
        }
        .value {
          width: 57%;
          padding: 5px 1.5%;
          @include xs {
            width: 48%;
          }
        }
      }
    }
    .price-info {
      .unit-info {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 5px 0 20px;
        .unit {
          width: 50%;
          @include xs {
            width: 100%;
            margin-top: 5px;
          }
          display: flex;
          margin-right: -1px;
          .key,
          .value {
            border: 1px solid #c0c0c0;
            padding: 8px 12px;
            @include xs {
              border-width: 0;
              padding: 5px 1.5%;
            }
          }
          .key {
            background-color: #f8f8f8;
            width: 40%;
            border-right-width: 0px;
          }
          .value {
            width: 60%;
          }
        }
      }
      .chart-area {
        width: 80%;
        margin: 0 auto;
        @include xs {
          width: 100%;
        }
      }
    }
  }
}
</style>