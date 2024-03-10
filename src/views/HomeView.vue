<script lang="ts" setup>
import lineChart from '@/components/line-chart.vue';
import { BorderBox11 as DvBorderBox11, BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3'

</script>

<template>
  <dv-full-screen-container>
    <dv-border-box-11 class="border-frame" :color="['rgb(41,148,187)', 'rgb(41,148,187)']" backgroundColor="black"
      title="数据大屏--战队分析"></dv-border-box-11>
    <div class="frame-container">
      <div class="first region"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
          <dv-decoration-7 class="CTF-title" style="width:9.375rem;height:1.875rem;">CTF 题</dv-decoration-7>
          <div class="pro-list" v-for="i in 5" :key="i">
            <div class="li-container">
              <dv-decoration-9 class="pro-concrete" style="width:5.625rem;height:5.625rem;">{{ i }}</dv-decoration-9>
              <dv-border-box-8 class="pro-getScore" style="width:15rem;height:5rem;">
                <table class="score-table1">
                  <tr>
                    <th>答题题序</th>
                    <th>得分</th>
                    <th>答题时间</th>

                  </tr>

                  <tr>
                    <td>第一个答题</td>
                    <td>222</td>
                    <td>11:00</td>


                  </tr>
                </table>
              </dv-border-box-8>

            </div>

          </div>
        </dv-border-box-7></div>
      <div class="second region"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
          <dv-decoration-7 class="team-information" style="width:9.375rem;height:1.875rem;">队伍信息</dv-decoration-7>
          <div class="team-first">
            <dv-decoration-2 class="team-border" style="width:25rem;height:0.3125rem;" />
            <img class="team-logo"
              src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oC9ZmasIzoCw0Bo2cpmsgAHaNK?w=115&h=187&c=7&r=0&o=5&dpr=2&pid=1.7">
            <dv-decoration-7 class="team-inform" style="width:6.25rem;height:1.8785rem;"
              :color="['rgba(256,256,256,0.4)', 'rgba(256,256,256,0.4)']"> 队伍5 </dv-decoration-7>
            <table class="score-table">

              <tr>
                <td>6677</td>



              </tr>
              <tr>

                <th>总得分</th>

              </tr>

            </table>
            <table class="score-table">

              <tr>
                <td>2</td>
                <td>5771</td>
                <td>1413</td>


              </tr>
              <tr>
                <th>总榜排名</th>
                <th>攻击得分</th>
                <th>RW得分</th>

              </tr>

            </table>
            <dv-decoration-2 class="team-border2" style="width:25rem;height:0.3125rem;" />
          </div>
          <div class="team-second">
            <div class="team-second-title">能力分布</div>
            <dv-active-ring-chart class="team-view"
              :config="{ radius: '80%', activeRadius: '85%', data: [{ name: '周口', value: 120 }, { name: '南阳', value: 100 }], lineWidth: 40, digitalFlopStyle: { fontSize: 20 } }"
              style="width:15.625rem;height:15.625rem" />
          </div>
          <div class="team-third">
            <div class="team-third-title">排名变化曲线</div>

            <lineChart></lineChart>
          </div>
        </dv-border-box-7></div>
      <div class="third region">

        <dv-border-box-7 class="rank-top" :color="['rgba(41,148,187,0.4)']">
          <dv-decoration-7 class="team-log" style="width:9.375rem;height:1.875rem;">日志信息</dv-decoration-7>
          <div class="logo-information">
            <div class="concrete-information"><span class="white-flag">6 -25 12:19:22</span><span class="yellow-flag">
                队伍7 </span><span class="green-flag">提交了</span><span>2 </span><span class="white-flag">10 题目</span><span
                class="yellow-flag">RW题目</span><span class="white-flag">答案</span></div>

          </div>

        </dv-border-box-7>
        <dv-border-box-7 class="rank-bottom" :color="['rgba(41,148,187,0.4)']">
          <dv-decoration-7 class="get-rw" style="width:9.375rem;height:1.875rem;">rw总得分</dv-decoration-7>
          <table class="rw-score-table">
            <tr>
              <th>题目名称</th>
              <th>题目得分</th>
              <th>答题情况</th>

            </tr>
            <tr v-for="i in 12" :key="i">
              <td>2</td>
              <td>5771</td>
              <td>⭕</td>


            </tr>


          </table>
        </dv-border-box-7>
      </div>

    </div>

  </dv-full-screen-container>



</template>

<style lang="less" scoped>
.rw-score-table {
  margin: 0 auto;

  color: white;
  width: 20rem;

  td {
    text-align: center;
    padding: 0.1rem;
  }

  th {
    color: rgb(50,197,233);
    text-align: center;
    padding: 0.3rem;
  }
}

.concrete-information {
  margin-left: 1rem;

}

.green-flag {
  color: green;
}

.yellow-flag {
  color: yellow;
}

.red-flag {
  color: red;
}

.white-flag {
  color: white;
}

.team-inform {
  margin-top: 1.3rem;
  color: white;
}

.score-table {
  color: white;
  font-size: 0.875rem;
  margin-top: 0.8rem;

  th {
    padding: 0.375rem;
    color: rgb(79, 209, 221);
    text-align: center;
  }

  td {

    padding: 0.375rem;
    font-size: 1.0625rem;
    font-weight: 900;
    text-align: center;

  }
}

.score-table1 {
  color: white;
  font-size: 0.875rem;
  margin: 0.3rem auto;

  th {
    padding: 0.375rem;
    color: rgb(79, 209, 221);
    text-align: center;
  }

  td {

    padding: 0.375rem;
    font-size: 0.875rem;
    font-weight: 200;
    text-align: center;

  }
}


.rank-top {
  width: 24.375rem;
  height: 18.75rem;
  margin-bottom: 1.25rem;
}

.rank-bottom {

  width: 24.375rem;
  height: 30rem;
}


.team-second-title,
.team-third-title {
  color: white;
  font-size: 1.1875rem;
  margin-left: 2.8125rem;
}

.team-view {
  margin-left: 9.375rem;
  margin-top: 1.875rem;
  margin-bottom: 1.25rem;

}

.team-border2 {
  position: absolute;
  left: 6.25rem;
  top: 6.25rem;
}

.team-border {

  position: absolute;
  left: 6.25rem;


}


.team-first {
  margin-left: 2.5rem;
  margin-bottom: 1.875rem;
  position: relative;
  display: flex;
}

.team-logo {
  height: 5rem;
  width: 5rem;
  margin-top: 1rem;

}

.team-information,
.team-log,
.get-rw {
  color: white;
  font-weight: 800;
  margin-left: 0.625rem;
  font-size: 1.125rem;

  margin-top: 0.625rem;
  ;
  margin-bottom: 1.875rem;
}

.pro-getScore {
  margin-left: 1.875rem;
  margin-top: 0.625rem;
  box-sizing: border-box;

}

.li-container {
  display: flex;
}

.pro-concrete {
  left: 0.625rem;

}

.pro-list {
  color: white;
  margin-top: 3.5625rem;

}

.CTF-title {
  margin: 0.625rem 0;
  color: white;
  font-weight: 800;
  font-size: 1.125rem;
  margin-bottom: 1.875rem;
}

.frame-container {
  display: flex;
}

.container {
  height: 6.25rem;
}

.border-frame {
  position: absolute;


}

.region {
  margin-top: 4.375rem;
  ;
}

.first {
  width: 24.375rem;
  height: 50rem;
  margin-left: 1.25rem;
}

.third {
  width: 24.375rem;
  height: 50rem;
  margin-left: 1.25rem;
}

.second {
  width: 35.625rem;
  height: 50rem;
  margin-left: 1.25rem;
}
</style>