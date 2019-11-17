<template>
    <div class="main">
        <ParkingData></ParkingData>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import AppHeader from "./common/AppHeader.vue";
import ParkingData from "./data/ParkingData.vue";

@Component({
    components: { ParkingData }
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