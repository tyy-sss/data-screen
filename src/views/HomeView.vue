<script lang="ts" setup>
import { Decoration1, Decoration2 } from "@kjgl77/datav-vue3";
</script>
<template>
  <!-- 引入之后就可以在vue的template中直接使用 -->
  <decoration-1
    :color="['pink', 'yellow']"
    style="width: 200px; height: 50px"
  />
  <decoration-2 :reverse="true" style="width: 5px; height: 150px" />
  <dv-border-box-1 class="container" :color="['red']"> </dv-border-box-1>
</template>
<style>
.container {
  height: 100px;
}
</style>