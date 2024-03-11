<template>

    <dv-border-box-8 class="container-left-rank">
        <table class="score-table">
            <tr>
                <th>排名</th>
                <th></th>
                <th>队伍名称</th>
                <th>得分</th>

            </tr>

            <tr v-for="i in 10" :key="i">
                <!-- 缺少判断前三名的特殊化 -->
                <td>001</td>
                <td><img class="team-logo"
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oC9ZmasIzoCw0Bo2cpmsgAHaNK?w=115&h=187&c=7&r=0&o=5&dpr=2&pid=1.7"
                     alt="队伍logo"></td>
                <td>eee</td>
                <td>0</td>


            </tr>
        </table>
    </dv-border-box-8>

</template>

<script lang="ts">


</script>
<style lang="less" scoped>
.score-table{
  margin: 0 auto;
  color: white;
  width: 15rem;

  td {
    text-align: center;
    padding: 0.3rem;
  }

  th {
    color: rgb(50,197,233);
    font-size: 0.9rem;
    text-align: center;
    padding: 0.6rem;
  }
}
.team-logo{                                   
     height: 1rem;
     width: 1rem;
}
.container-left-rank{

    width: 15rem;
    height: 25rem;
}
</style>