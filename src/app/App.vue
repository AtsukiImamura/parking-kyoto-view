<template>
    <div class="main">
        <DataTable></DataTable>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import AppHeader from "./common/AppHeader.vue";
import DataTable from "./components/DataTable.vue";

@Component({
    components: { DataTable }
})
export default class App extends Vue {
    public mounted(): void {}
}
</script>

<style lang="scss" scoped>
.main {
    @include main-container;
    background-color: #ffffff;
}
</style>