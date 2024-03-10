<template>
  <dv-full-screen-container>


    <dv-border-box-11 class="border-frame" :color="['rgb(41,148,187)', 'rgb(41,148,187)']" backgroundColor="black"
      title="数据大屏--赛题详情">

    </dv-border-box-11>
    <div class="container-pro">
      <div class="region" v-for="i in 4" :key="i"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
          <dv-decoration-11 class="pro-information" :color="['rgba(41,148,187,0.1)']"
            style="width:150px;height:50px; font-size: 14px;">赛题信息</dv-decoration-11>
          <dv-decoration-9 class="pro-view-logo" style="width:100px;height:100px;">赛题{{ i }}</dv-decoration-9>
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
        },
        {
          name: '郑州',
          value: 75
        },
        {
          name: '西峡',
          value: 66
        },
      ],
      colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
      unit: '单位',
      showValue: true
    }" style="width:250px;height:200px" />
    <dv-scroll-board class="center" :config="{  header: ['列1', '列2', '列3'],
  data: [
    ['行1列1', '行1列2', '行1列3'],
    ['行2列1', '行2列2', '行2列3'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '行4列2', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '行6列3'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '行8列3'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3']
  ]}" style="width:300px;height:220px" />
  <div class="ask-min flex">
    <dv-water-level-pond class="time-view" :config="{data:[55],shape:'round'}" style="width:100px;height:100px" />
    <dv-water-level-pond class="score-view" :config="{data:[55],shape:'round'}" style="width:100px;height:100px" />

  </div>
        </dv-border-box-7></div>


    </div>


  </dv-full-screen-container>

</template>

<style scoped lang="less">
.time-view, .score-view{
  margin-top:40px;
  margin-left: 40px;
}

.flex{
  display: flex;
}
.center{

  margin: 0 auto;
}
.pro-view-logo {
  color: white;
  margin: 20px auto;
}

.pro-information {
  color: white;
  margin: 0 auto;
  margin-top: 10px;
}

.container-pro {
  display: flex;
}

.region {
  width: 333px;
  height: 800px;
  margin-left: 20px;
  margin-top: 70px;
  ;
}

.border-frame {
  position: absolute;


}
</style>
