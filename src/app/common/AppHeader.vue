<template>
    <div class="app-header">
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
    width: calc(100% - 36px);
    // position: fixed;
    // top: 0;
    // left: 0;
    height: 66px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: #009e00;
    padding: 10px 18px 3px;
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