<template>
  <div class="about-main">
    <div class="top">
      <h1 class="main-title">概要</h1>
      <h3>駐車場への到達容易度を考慮した京都市内における駐車場立地・価格に関する研究</h3>
    </div>
    <div class="content-area">
      <div class="title">背景</div>
      <div class="content">
        <p>京都市は観光都市ということもあって時間貸し駐車場が多い。</p>
        <p>一方、京都市特有の道路形状を抱える。</p>
        <ul>
          <li>碁盤の目</li>
          <li>道路サイズの差がはっきりしている</li>
          <li>一方通行の道が多い</li>
        </ul>
        <p>そこで、駐車場探索行動における心理的なコストに注目すれば、駐車場への到達容易度と駐車場立地・価格の関係が割り出せるのではないかと考えた。</p>
      </div>
    </div>
    <div class="content-area">
      <div class="title">研究内容</div>
      <div class="content">
        <ol>
          <li>特定範囲（丸太町・五条通間 & 河原町・千本通間）の時間貸し駐車場について価格・立地・容量を調査</li>
          <li>各駐車場について地図上で到達容易度を測定</li>
          <li>1,2 で得られたデータをもとに分析を行う</li>
          <ol>
            <li>a. 重回帰分析・主成分分析など統計的分析: 大きな影響を与えているパラメータや信頼度を算出</li>
            <li>b. 機械学習的分析: 京都市全体の駐車場価格ヒートマップの作製を視野に</li>
          </ol>
        </ol>
      </div>
    </div>
    <div class="content-area">
      <div class="title">調査方法</div>
      <div class="content">対象範囲内でゼンリン地図に記載の時間貸し駐車場をすべて実地調査。</div>
    </div>
    <div class="content-area">
      <div class="title">メンバー</div>
      <div class="content"></div>
    </div>
    <div class="next-contents">
      <ul class="list">
        <li class="c">
          <router-link to="/about/acheivement">研究結果</router-link>
        </li>
        <li class="c">
          <router-link to="/about/data">データについて</router-link>
        </li>
        <li class="c">
          <router-link to="/">駐車場データ</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Abstract extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
.about-main {
  @include about-main;
}
</style>