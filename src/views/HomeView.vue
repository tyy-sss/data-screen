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
          <dv-decoration-7 class="CTF-title" style="width:150px;height:30px;">CTF 题</dv-decoration-7>
          <div class="pro-list" v-for="i in 5" :key="i">
            <div class="li-container">
              <dv-decoration-9 class="pro-concrete" style="width:90px;height:90px;">{{ i }}</dv-decoration-9>
              <dv-border-box-8 class="pro-getScore" style="width:240px;height:80px;">
                <table class="score-table">
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
          <dv-decoration-7 class="team-information" style="width:150px;height:30px;">队伍信息</dv-decoration-7>
          <div class="team-first">
            <dv-decoration-2 class="team-border" style="width:400px;height:5px;" />
            <img class="team-logo"
              src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oC9ZmasIzoCw0Bo2cpmsgAHaNK?w=115&h=187&c=7&r=0&o=5&dpr=2&pid=1.7">
              <dv-decoration-7 class="team-information" style="width:150px;height:30px;" :color="['rgba(256,256,256,0.4),rgba(256,256,256,0.4)','white']">    队伍5    </dv-decoration-7>

            <dv-decoration-2 class="team-border" style="width:400px;height:5px;" />
          </div>
          <div class="team-second">
            <div class="team-second-title">能力分布</div>
            <dv-active-ring-chart class="team-view"
              :config="{ radius: '80%', activeRadius: '85%', data: [{ name: '周口', value: 120 }, { name: '南阳', value: 100 }], lineWidth: 40, digitalFlopStyle: { fontSize: 20 } }"
              style="width:250px;height:250px" />
          </div>
          <div class="team-third">
            <div class="team-third-title">排名变化曲线</div>

            <lineChart></lineChart>
          </div>
        </dv-border-box-7></div>
      <div class="third region">

        <dv-border-box-7 class="rank-top" :color="['rgba(41,148,187,0.4)']">
          <dv-decoration-7 class="team-log" style="width:150px;height:30px;">日志信息</dv-decoration-7>

        </dv-border-box-7>
        <dv-border-box-7 class="rank-bottom" :color="['rgba(41,148,187,0.4)']">
          <dv-decoration-7 class="get-rw" style="width:150px;height:30px;">rw总得分</dv-decoration-7>

        </dv-border-box-7>
      </div>

    </div>

  </dv-full-screen-container>



</template>

<style lang="less" scoped>
.score-table {
  color: white;
  font-size: 14px;
  margin: 4px auto;



  th{
    padding: 6px;
    color: rgb(79, 209, 221);
  }
  td {

    padding: 6px;
  }
}


  .rank-top {
    width: 390px;
    height: 300px;
    margin-bottom: 20px;
  }

  .rank-bottom {

    width: 390px;
    height: 480px;
  }


  .team-second-title,
  .team-third-title {
    color: white;
    font-size: 19px;
    margin-left: 45px;
  }

  .team-view {
    margin-left: 150px;
    margin-top: 30px;
    margin-bottom: 20px;

  }

  .team-border {

    position: absolute;
    left: 100px;
  }


  .team-first {
    margin-left: 40px;
    margin-bottom: 30px;
    position: relative;
    display: flex;
  }

  .team-logo {
    height: 80px;
    width: 80px;

  }

  .team-information,
  .team-log,
  .get-rw {
    color: white;
    font-weight: 800;
    margin-left: 10px;
    font-size: 18px;

    margin-top: 10px;
    ;
    margin-bottom: 30px;
  }

  .pro-getScore {
    margin-left: 30px;
    margin-top: 10px;
    box-sizing: border-box;

  }

  .li-container {
    display: flex;
  }

  .pro-concrete {
    left: 10px;

  }

  .pro-list {
    color: white;
    margin-top: 57px;

  }

  .CTF-title {
    margin: 10px 0;
    color: white;
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .frame-container {
    display: flex;
  }

  .container {
    height: 100px;
  }

  .border-frame {
    position: absolute;


  }

  .region {
    margin-top: 70px;
    ;
  }

  .first {
    width: 390px;
    height: 800px;
    margin-left: 20px;
  }

  .third {
    width: 390px;
    height: 800px;
    margin-left: 20px;
  }

  .second {
    width: 570px;
    height: 800px;
    margin-left: 20px;
  }</style>