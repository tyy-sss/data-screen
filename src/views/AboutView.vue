<template>
  <dv-full-screen-container>


    <dv-border-box-11 class="border-frame" :color="['rgb(41,148,187)', 'rgb(41,148,187)']" backgroundColor="black"
      title="数据大屏--赛题详情">

    </dv-border-box-11>
    <div class="container-pro">
      <div class="region" v-for="i in 4" :key="i"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
          <dv-decoration-11 class="pro-information" :color="['rgba(41,148,187,0.1)']"
            style="width:9.375rem;height:3.125rem; font-size: 0.875rem;">赛题信息</dv-decoration-11>
          <dv-decoration-9 class="pro-view-logo" style="width:6.25rem;height:6.25rem;">赛题{{ i }}</dv-decoration-9>
          <dv-capsule-chart class="center" :config="{
      data: [
        {
          name: '南阳',
          value: 167
        },
        {
          name: '周口',
          value: 123
        },
        {
          name: '漯河',
          value: 98
        }
      ],
      colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
      unit: '单位',
      showValue: true
    }" style="width:17rem;height:13rem" />
            <table class="score-table">
            <tr>
              <th>答题</th>
              <th>队伍</th>
              <th>时间</th> 
              <th>得分</th>

            </tr>
            <tr v-for="i in 3" :key="i">
              <td class="yellow-flag">第一血</td>
              <td>队伍20</td>
              <td>6-21 12:22:00</td>
              <td>1234</td>


            </tr>


          </table>
          <div class="ask-min flex">
            <div class="avg-frame"> 
              <dv-water-level-pond class="time-view" :config="{ data: [55], shape: 'round' }"
              style="width:6rem;height:6rem" />
              <div class="text-avg">
                平均攻破时长
              </div>
            </div>
           <div class="avg-frame">
                <dv-water-level-pond class="score-view" :config="{ data: [55], shape: 'round' }"
              style="width:6rem;height:6rem" />
              <div class="text-avg">
                最后一次得分
              </div>


           </div>
        

          </div>
        </dv-border-box-7></div>


    </div>


  </dv-full-screen-container>

</template>

<style scoped lang="less">

.text-avg{
  color: rgb(38,148,187);
  font-weight: 800;
  margin-top: 1rem;
  margin-left: 2rem;
}
.yellow-flag{
  color: yellow;
}
.red-flag{
  color: red;
}
.white-flag{
  color: white;
}

.score-table{
  margin: 0 auto;

  color: white;
  width: 20rem;

  td {
    text-align: center;
    padding: 0.3rem;
  }

  th {
    color: rgb(50,197,233);
    text-align: center;
    padding: 0.6rem;
  }
}
.time-view,
.score-view {
  margin-top: 2.5rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.center {

  margin: 1rem auto;
}

.pro-view-logo {
  color: white;
  margin: 1.5rem auto;
}

.pro-information {
  color: white;
  margin: 1rem auto;
  margin-bottom: 2rem;

}

.container-pro {
  display: flex;
}

.region {
  width: 20.8125rem;
  height: 50rem;
  margin-left: 1.25rem;
  margin-top: 4.375rem;
  ;
}

.border-frame {
  position: absolute;


}
</style>
