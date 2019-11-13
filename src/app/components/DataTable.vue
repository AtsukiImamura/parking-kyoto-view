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
                <div
                    :class="`column w-${column.width}`"
                    v-for="(column, index) in tableInfo.columns"
                    :key="index"
                >
                    <template v-if="!column.description">{{ column.name }}</template>
                    <template v-if="column.description">
                        <a @click="displayColumnDescription(column.id)">{{ column.name }}</a>
                    </template>
                </div>
            </div>
            <div class="table-body">
                <div class="row" v-for="(row, rIndex) in tableInfo.rows" :key="rIndex">
                    <div
                        :class="`column w-${data.width}`"
                        v-for="(data,cIndex) in row.columns"
                        :key="cIndex"
                    >{{ data.value }}</div>
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

@Component({
    components: {}
})
export default class DataTable extends Vue {
    public mounted(): void {}

    public get columns(): IColumnInfo[] {
        return [
            {
                id: 0,
                name: "ID",
                width: 2,
                description: "IDです"
            },
            {
                id: 1,
                name: "駐車台数（普通）",
                width: 4
            },
            {
                id: 2,
                name: "駐車台数（軽）",
                width: 4
            }
        ];
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
        return [
            {
                columns: [
                    {
                        value: "N13-1",
                        columnId: 0
                    },
                    {
                        value: "3",
                        columnId: 1
                    },
                    {
                        value: "0",
                        columnId: 2
                    }
                ]
            },
            {
                columns: [
                    {
                        value: "N13-2",
                        columnId: 0
                    },
                    {
                        value: "10",
                        columnId: 1
                    },
                    {
                        value: "2",
                        columnId: 2
                    }
                ]
            }
        ];
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
</style>