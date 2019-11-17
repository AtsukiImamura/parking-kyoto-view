<template>
  <div class="app-footer"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AppFooter extends Vue {
  public mounted(): void {}
}
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100vw;
  min-height: 80px;
  background-color: #009000;
  margin-top: 10px;
}
</style>
