<template>
  <div>
    <div class="menu-list real">
      <div class="m-menu-back" @click="closeMobileMenu()" v-if="displayedMobileMenuId >= 0"></div>
      <div class="menu-section">
        <div class="title">
          <img class="logo" src="image/icon/book.svg" @click="onClickMobileMenu(0)" />
          <span class="nav extendable" :class="{'visible': displayedMobileMenuId == 0}">研究について</span>
        </div>
        <ul class="contents extendable" :class="{'visible': displayedMobileMenuId == 0}">
          <li class="m-only m-title">研究について</li>
          <li class="content">
            <router-link to="/about/abstract">概要</router-link>
          </li>
          <li class="content">
            <router-link to="/about/achievement">研究結果</router-link>
          </li>
          <li class="content">
            <router-link to="/about/data">データについて</router-link>
          </li>
        </ul>
      </div>
      <div class="menu-section">
        <div class="title">
          <img class="logo" src="image/icon/database.svg" @click="onClickMobileMenu(1)" />
          <span class="nav extendable" :class="{'visible': displayedMobileMenuId == 1}">データ</span>
        </div>
        <ul class="contents extendable" :class="{'visible': displayedMobileMenuId == 1}">
          <li class="m-only m-title">データ</li>
          <li class="content">
            <a href>駐車場</a>
          </li>
        </ul>
      </div>
      <div class="menu-section">
        <div class="title">
          <img class="logo" src="image/icon/graph.svg" @click="onClickMobileMenu(2)" />
          <span class="nav extendable" :class="{'visible': displayedMobileMenuId == 2}">ビジュアル</span>
        </div>
        <ul class="contents extendable" :class="{'visible': displayedMobileMenuId == 2}">
          <li class="m-only m-title">ビジュアル</li>
          <li class="content">
            <router-link to="/summary/heatmap">価格予想ヒートマップ</router-link>
          </li>
          <li class="content">
            <router-link to="/view/parking_map">駐車場マップ</router-link>
          </li>
          <li class="content">
            <router-link to="/summary">サマリー</router-link>
            <ul class="sub-list">
              <li class="sub-content">
                <router-link to="/summary/attributes">駐車場属性</router-link>
              </li>
              <li class="sub-content">
                <router-link to="/summary/fee">価格</router-link>
              </li>
              <li class="sub-content">
                <router-link to="/summary/location">位置</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="menu-section">
        <div class="title">
          <img class="logo" src="image/icon/api.svg" @click="onClickMobileMenu(3)" />
          <span class="nav extendable" :class="{'visible': displayedMobileMenuId == 3}">API</span>
        </div>
        <ul class="contents extendable" :class="{'visible': displayedMobileMenuId == 3}">
          <li class="m-only m-title">API</li>
          <li class="content disabled">
            <a href>Getting Started</a>
          </li>
          <li class="content disabled">
            <a href>Documents</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="menu-list dummy"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueRouter from "vue-router";

@Component({
  components: {}
})
export default class MenuList extends Vue {
  public displayedMobileMenuId = -1;

  beforeRouteEnter(to: VueRouter, from: VueRouter, next: any) {
    this.closeMobileMenu();
    next();
  }

  public onClickMobileMenu(index: number): void {
    if (this.displayedMobileMenuId == index) {
      this.displayedMobileMenuId = -1;
    } else {
      this.displayedMobileMenuId = index;
    }
  }

  public closeMobileMenu(): void {
    this.displayedMobileMenuId = -1;
  }

  public mounted(): void {
    console.log("MenuList mouted!");
  }
}
</script>

<style lang="scss" scoped>
.menu-list {
  width: 285px;
  height: calc(100vh - 75px);
  overflow-y: scroll;
  $margin-x: 18px;
  margin-right: 25px;
  .m-menu-back {
    display: none;
    @include xs {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;
      left: 50px;
      top: 0px;
      background-color: transparent;
    }
  }
  &.real {
    position: fixed;
    top: 75px;
    left: 0;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
    background-color: #ffffff;
  }
  &.dummy {
  }
  @include xs {
    width: 55px;
    overflow-x: visible;
    overflow-y: visible;
    margin-right: 5px;
  }
  .menu-section {
    margin: 20px 0;
    .title {
      $icon_size: 28px;

      display: flex;
      align-items: flex-end;
      background-color: #f8f8f8;
      padding: 5px 18px;
      border-bottom: 1px solid #ffffff;
      width: calc(100% - #{$margin-x * 2});
      color: #009e00;
      @include xs {
        background-color: #ffffff;
        padding: 3px 12px;
      }
      .nav {
        margin: 0px 0px 0px 8px;
        @include xs {
          display: none;
        }
      }
      .logo {
        width: $icon_size;
      }
    }
    .contents {
      margin: 8px $margin-x 8px $margin-x + 5px;
      @include xs {
        margin: 0 0 -40px 0;
        padding: 10px;
      }
      .m-title {
        border-bottom: 1px solid #c0c0c0;
        margin: 5px 3px 10px;
        padding: 5px 0;
        color: #009000;
        // background-color: #f8f8f8;
      }
      li {
        list-style: none;
        a {
          text-decoration: none;
          display: block;
          width: 100%;
          height: 100%;
          // color: #404040;
          // &:hover {
          //     color: #009e00;
          // }
        }
      }
      .content {
        padding: 5px 0px;
        &.disabled {
          a {
            color: #c0c0c0;
          }
        }
        .sub-list {
          padding: 8px 18px;
          .sub-content {
            padding: 3px 0;
          }
        }
      }
    }
  }
  .extendable {
    @include xs {
      position: absolute;
      margin-top: -45px !important;
      display: none;
      background-color: transparent;
      color: transparent;
      * {
        color: transparent;
      }

      @keyframes extend-menu-open {
        from {
          background-color: transparent;
          color: transparent;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0);
        }
        to {
          background-color: #ffffff;
          color: #404040;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
      }

      @keyframes color-disp {
        from {
          color: transparent;
        }
        to {
          color: #404040;
        }
      }

      &.visible {
        animation: extend-menu-open 0.5s ease-out 0s 1 forwards running;
        * {
          animation: color-disp 0.8s ease-out 0s 1 forwards running;
        }
        display: block;
        z-index: 5;
        left: 57px;
        overflow: hidden;
        width: calc(100vw - 85px);
        * {
          word-break: none;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
