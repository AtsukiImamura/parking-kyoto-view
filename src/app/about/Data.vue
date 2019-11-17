<template>
  <div class="about-main">
    <div class="top">
      <h1 class="main-title">データについて</h1>
    </div>
    <div class="content-area">
      <div class="title">取得データ</div>
      <table class="definition-table">
        <tbody>
          <tr>
            <td class="data-name">駐車台数（普通車）</td>
            <td class="data-definition">普通車・軽自動車ともに駐車可能な駐車スペースの数</td>
          </tr>
          <tr>
            <td class="data-name">駐車台数（軽）</td>
            <td class="data-definition">軽自動車専用の駐車スペースの数</td>
          </tr>
          <tr>
            <td class="data-name">屋根の有無</td>
            <td class="data-definition">駐車場に屋根があるかどうか。一部に屋根がある場合は駐車スペースの半分以上をカバーしていることを基準とする。</td>
          </tr>
          <tr>
            <td class="data-name">駐車行為が場内で可能か</td>
            <td class="data-definition">場内に通路のある駐車場を対象とする。</td>
          </tr>

          <tr>
            <td class="data-name">駐車場形式</td>
            <td class="data-definition">立体 or 平面。駐車場全体として立体でも時間貸し駐車場が1フロアにか設置されていない場合は平面とする。</td>
          </tr>
          <tr>
            <td class="data-name">道路の接し方</td>
            <td class="data-definition">
              接している道路ごとに道路のレベルをカウントする。道路レベルについては
              <a href="#road-level">こちら</a>を参照。
            </td>
          </tr>
          <tr>
            <td class="data-name">入口の接する道路</td>
            <td class="data-definition">
              駐車場入口が接している道路について道路レベルをカウント。「入口」が存在しない開放型の駐車場については当該道路から進入可能であればカウントする。道路レベルについては
              <a
                href="#road-level"
              >こちら</a>を参照。
            </td>
          </tr>
          <tr>
            <td class="data-name">料金収受システム</td>
            <td class="data-definition">1.車の下のやつ、2.出入り口で収集、3.その他 に分類</td>
          </tr>
          <tr>
            <td class="data-name">提携の有無</td>
            <td class="data-definition">駐車場が商業施設等と提携しているかどうか</td>
          </tr>
          <tr>
            <td class="data-name">提携施設</td>
            <td class="data-definition">駐車場が商業施設等と提携している場合に当該商業施設の名称</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="content-area">
      <div class="title">算出データ</div>
      <div class="content"></div>
    </div>
    <div id="road-level" class="content-area">
      <div class="title">道路レベル</div>
      <table class="definition-table">
        <tbody>
          <tr>
            <td class="data-name">レベル１</td>
            <td class="data-definition">片側2車線以上を有する主要道路。（ex: 烏丸通）</td>
          </tr>
          <tr>
            <td class="data-name">レベル２</td>
            <td class="data-definition">片側１車線の道路。（ex: 二条通）</td>
          </tr>
          <tr>
            <td class="data-name">レベル３</td>
            <td class="data-definition">一車線のみの道路。多くは一通。（ex: 高倉通）</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="next-contents">
      <ul class="list">
        <li class="c">
          <router-link to="/">駐車場データ</router-link>
        </li>
        <li class="c">
          <router-link to="/summary">サマリー</router-link>
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
export default class Data extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
.about-main {
  @include about-main;
  .definition-table {
    width: 100%;
    // padding: 0 0 0 10px;
    margin: 20px 0 0 10px;
    border-collapse: collapse;
    font-weight: 100;
    .data-name {
      width: 30%;
      background-color: rgba(0, 144, 0, 0.15);
    }
    .data-definition {
      width: 70%;
    }
    td,
    th {
      border: 1px solid #c0c0c0;
    }
    th {
      background-color: rgba(0, 144, 0, 0.15);
    }
    td {
      padding: 6px 8px;
    }
  }
}
</style>