<template>

    <dv-border-box-8 class="container-right-rank">
        <div class="rw-title">rw答题情况</div>
        <table class="score-table">
            <tr>
                <th>题目名称</th>
                <th>答题人数</th>
                <th>题目热度</th>

            </tr>

            <tr v-for="i in 5" :key="i">
                <!-- 缺少判断前三名的特殊化 -->
                <td>001</td>
               
                <td>23</td>
                <td>50</td>


            </tr>
        </table>
    </dv-border-box-8>

</template>

<script lang="ts" setup>


</script>
<style lang="less" scoped>
.rw-title{
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    
}
.score-table{
  margin: 0 auto;
  color: white;
  width: 15rem;

  td {
    text-align: center;
    padding: 0.3rem;
    color: rgb(139, 11, 11);
  }

  th {
    color: rgb(253, 252, 252);
    font-size: 0.9rem;
    text-align: center;
    padding: 0.6rem;
  }
}
.team-logo{                                   
     height: 1rem;
     width: 1rem;
}
.container-right-rank{
    padding: 0.15rem;
    width: 20rem;
    height: 15rem;
}
</style>