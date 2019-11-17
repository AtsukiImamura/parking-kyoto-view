<template>
  <div>
    <div class="app-header real">
      <div class="content">
        <div class="left">
          <div class="logo">
            <span>京都大学文ゼミ2019年度グループ研究</span>
            <h3>京都市駐車場データと価格予想</h3>
          </div>
        </div>
        <div class="right">
          <div class="menu-list">
            <div class="menu"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-header dummy"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AppHeader extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
.app-header {
  // width: calc(100vw - 15px);
  width: calc(100% - 24px);
  height: 60px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: #009e00;
  padding: 10px 18px 3px;
  @include xs {
    padding: 8px 12px 3px;
  }
  &.dummy {
  }
  &.real {
    position: fixed;
    top: 0;
    left: 0;
  }
  .content {
    // @include main-container;
    display: flex;
    height: 100%;
    .left {
      height: 100%;
      .logo {
        display: block;
        align-items: center;
        height: 100%;
        > span {
          color: #ffffff;
          font-size: 12px;
          // padding: 4px 18px;
        }
        h3 {
          padding: 0px;
          margin: 0;
          font-size: 28px;
          color: #ffffff;

          @include xs {
            font-size: 22px;
          }
        }
      }
    }
    .right {
      .menu-list {
        .menu {
        }
      }
    }
  }
}
</style>
