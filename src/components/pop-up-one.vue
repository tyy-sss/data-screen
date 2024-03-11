<template>
    <div class="pop-container"> <dv-decoration-8 class="decoration-left" style="width:100px;height:50px;" />
        <dv-decoration-5 class="decoration-center" style="width:200px;height:40px;" />
        <div class="pro-description">
        <div class="pro-i">13</div>
        <div class="team-i">队伍20</div>
        <dv-decoration-2 :reverse="true" style="width:5px;height:50px;" />
        <div class="description">攻击获得一血</div>
        </div>
       
        <dv-decoration-8 :reverse="true" class="decoration-right" style="width:100px;height:50px;" />
    </div>

</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.description
{
   color: white;
   font-weight: 900;
   padding: 1rem;
}
.team-i{
  color: red;
  padding: 1rem;
}
.pro-i{
   color: aqua;
   padding: 1rem;
}
.pro-description
{
    position: absolute;
    top: 2.6rem;
    left: 5.9rem;
    display: flex;
}
.pop-container
{
    position: relative;
    height: 6rem;
    width: 30rem;
    background-color: rgba(25,211,238,0.3);
}
.decoration-left {
    position: absolute;
    left: 0;
    top: 2rem;

}

.decoration-center {
    position: absolute;
    left: 8rem;
}

.decoration-right {
    position: absolute;
    left: 23rem;
    top: 2rem;
}
</style>