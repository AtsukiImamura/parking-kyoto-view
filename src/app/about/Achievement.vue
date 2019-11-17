<template>
  <div class="about-main">
    <div class="top">
      <h1 class="main-title">研究結果</h1>
    </div>
    <div class="content-area">
      <div class="title"></div>
      <div class="content">
        <div class="now-researcing">
          <img class="research-icon" src="/image/icon/research.svg" />
          <h2>絶賛研究中！</h2>
        </div>
      </div>
    </div>
    <div class="next-contents">
      <ul class="list">
        <li class="c">
          <router-link to="/about/data">データについて</router-link>
        </li>
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
export default class Achievement extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
.about-main {
  @include about-main;
  .now-researcing {
    margin: 20px auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .research-icon {
      width: 200px;
    }
  }
}
</style>