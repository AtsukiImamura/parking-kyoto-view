<template>
    <div class="menu-list">
        <div class="menu-section">
            <div class="title">
                <img src="image/icon/book.svg" />
                <span>研究について</span>
            </div>
            <ul class="contents">
                <li class="content">
                    <a href>概要</a>
                </li>
                <li class="content">
                    <a href>研究結果</a>
                </li>
                <li class="content">
                    <a href>データについて</a>
                </li>
            </ul>
        </div>
        <div class="menu-section">
            <div class="title">
                <img src="image/icon/database.svg" />
                <span>データ</span>
            </div>
            <ul class="contents">
                <li class="content">
                    <a href>駐車場</a>
                </li>
            </ul>
        </div>
        <div class="menu-section">
            <div class="title">
                <img src="image/icon/graph.svg" />
                <span>ビジュアル</span>
            </div>
            <ul class="contents">
                <li class="content">
                    <a href>価格予想ヒートマップ</a>
                </li>
                <li class="content">
                    <a href>駐車場マップ</a>
                </li>
                <li class="content">
                    <a href>サマリー</a>
                </li>
            </ul>
        </div>
        <div class="menu-section">
            <div class="title">
                <img src="image/icon/api.svg" />
                <span>API</span>
            </div>
            <ul class="contents">
                <li class="content">
                    <a href>Getting Started</a>
                </li>
                <li class="content">
                    <a href>Documents</a>
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
export default class MenuList extends Vue {
    public mounted(): void {
        console.log("MenuList mouted!");
    }
}
</script>

<style lang="scss" scoped>
.menu-list {
    width: 270px;
    min-height: calc(100vh - 87px);
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
    $margin-x: 18px;
    margin-right: 25px;
    .menu-section {
        margin: 20px 0;
        .title {
            $icon_size: 28px;
            display: flex;
            align-items: flex-end;
            background-color: #f8f8f8;
            // border:
            padding: 5px 18px;
            border-bottom: 1px solid #ffffff;
            width: calc(100% - #{$margin-x * 2});
            color: #009e00;
            span {
                margin: 0px 0px 0px 8px;
            }
            img {
                width: $icon_size;
            }
        }
        .contents {
            margin: 8px $margin-x 8px $margin-x + 5px;
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
            }
        }
    }
}
</style>