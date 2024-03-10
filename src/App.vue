<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="less">
html,
body,
#app {
  padding: 0;
  margin: 0;
  cursor: pointer;
}
body{
  background: black;

}
* {
  /* 滑动时报错 */
  touch-action: pan-y;
}
</style>
