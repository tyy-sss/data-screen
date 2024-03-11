<template>
  <canvas id="three"></canvas>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { init } from "@/assets/ts/three-index";

onMounted(() => {
  init();
});
</script>
<style lang="less" scoped>
canvas {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
