<template>
    <canvas id="three"></canvas>
</template>
<script lang='ts' setup>
import { onMounted } from 'vue'
import ThreeJs from '@/assets/ts/three-index'

onMounted(()=>{
    new ThreeJs();
})
</script>
<style lang="less" scoped>
</style>