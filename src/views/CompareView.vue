<script lang="ts" setup>

import { BorderBox11 as DvBorderBox11, BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3'


</script>

<template>
  <dv-full-screen-container>
    <dv-border-box-11 class="border-frame" :color="['rgb(41,148,187)', 'rgb(41,148,187)']" backgroundColor="black"
      title="数据大屏--战队比较"></dv-border-box-11>

    <div class="logo-team-compare">
      <div class="logo-pack"><img class="team-logo"
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.oC9ZmasIzoCw0Bo2cpmsgAHaNK?w=115&h=187&c=7&r=0&o=5&dpr=2&pid=1.7">
        <div class="i-name">队伍20</div>
      </div>
      <dv-percent-pond :config="{ value: 66 }" style="width:9.375rem;height:3.125rem;margin-right: 1.25rem;" />

    </div>
    <div class="region-frame">
      <div class="left-frame">
        <div class="first region"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
            <dv-decoration-7 class="broadcast-frame" style="width:6.25rem;height:1.875rem;">公告栏</dv-decoration-7>
            <div class="announcement">
              <div class="li-an">这是一条公告~</div>
            </div>


          </dv-border-box-7></div>
        <div class="second region"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
            <dv-decoration-7 class="broadcast-frame" style="width:9.375rem;height: 1.875rem;;">RW排队列表</dv-decoration-7>
            <div class="pro-heat-frame">
              <div class="pro-outer" v-for="i in 10" :key="i"> <dv-water-level-pond class="score-view"
                  :config="{ data: [55], shape: 'round' }" style="width:6.25rem;height:6.25rem" />
                <dv-border-box-8 class="pro-getScore" style="width:8.75rem;height:5rem;">
          
                  <div class="i white-flag">
                    {{ i }}
                  </div>
                  <div class="pro-heat red-flag">热度值：50%</div>
                
                </dv-border-box-8>
              </div>
            </div>



          </dv-border-box-7></div>

      </div>

      <div class="right-frame">

        <div class="third region"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
            <dv-decoration-7 class="broadcast-frame score-information" style="width:7.5rem;height:1.875rem;">分值信息</dv-decoration-7>
            <table class="score-table">
              <tr>
                <th>总分</th>
                <th>CTF题得分</th>
                <th>RW题得分</th>
                <th>当前排名</th>
                <th>与前一队分差</th>
             
              </tr>
            
              <tr>
                <td>11122</td>
                <td>2222</td>
                <td>111</td>
                <td>2</td>
                <td>11</td>
             
              </tr>
            </table>

          </dv-border-box-7></div>
        <div class="fourth region"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
            <dv-decoration-7 class="broadcast-frame" style="width:6.25rem;height:1.875rem;">积分榜</dv-decoration-7>
            <dv-scroll-ranking-board :config="{
      data: [
        {
          name: '周口',
          value: 55
        },
        {
          name: '南阳',
          value: 120
        },
        {
          name: '西峡',
          value: 78
        },
        {
          name: '驻马店',
          value: 66
        },
        {
          name: '新乡',
          value: 80
        },
        {
          name: '信阳',
          value: 45
        },
        {
          name: '漯河',
          value: 29
        }
      ]
    }" style="width:28.125rem;height:17.5rem;margin: 0 auto;" />


          </dv-border-box-7></div>
        <div class="fifth region"><dv-border-box-7 :color="['rgba(41,148,187,0.4)']">
            <dv-decoration-7 class="broadcast-frame" style="width:7.5rem;height:1.875rem;">实时信息</dv-decoration-7>
            <div class="concrete-information"><span class="white-flag">6 -25 12:19:22</span><span class="yellow-flag"> 队伍7 </span><span class="red-flag">攻击了</span><span>2 </span><span class="white-flag">题目的答案</span></div>


          </dv-border-box-7></div>
      </div>

    </div>






  </dv-full-screen-container>

</template>

<style lang="less" scoped>
.pro-getScore{
  box-sizing: border-box;
  padding: 1rem;
}
.i{
  margin-left: 2.5rem;
  margin-bottom: 0.2rem;
}
.concrete-information{
  margin-left: 1.25rem;
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
  color: white;
	border: 0.0625rem solid white;
  border-collapse:collapse;
  margin: 0 auto;
 
  th,td{
	border: 0.0625rem solid white;
  padding: 0.625rem;
  }
		
}
.li-an {
  color: red;
  margin-left: 0.625rem;
  font-size: 0.875rem;
}

.pro-outer {

  width: 9.375rem;
  height: 13rem;



}

.pro-heat-frame {
  margin: 0 auto;
  width: 50rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.broadcast-frame {
  color: white;
  margin-top: 0.3125rem;
  margin-left: 0.625rem;
  margin-bottom: 1.5625rem;
}
.score-information{
  margin-bottom: 0.9375rem;

}

.logo-pack {
  display: flex;
}

.region-frame {
  display: flex;
}

.logo-team-compare {

  font-weight: 70;
  margin-top: 3.125rem;
  margin-left: 1.5625rem;
  margin-bottom: 0.9375rem;
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
}

.team-logo {
  width: 3.125rem;
  height: 3.125rem;

}

.i-name {
  color: white;
  align-self: center;
}

.frame-container {
  display: flex;
  margin-top: 4.375rem;
}

.container {
  height: 6.25rem;
}

.score-view {
  margin: 0.625rem auto;
}

.border-frame {
  position: absolute;
  z-index: -1;

}

.first {
  width: 53.75rem;
  height: 15.625rem;
  margin-left: 1.5625rem;

}

.third {
  width: 32.5rem;
  height: 9.375rem;
  margin-left: 0.625rem;

}

.fourth {
  width: 32.5rem;
  height: 21.875rem;
  margin-left: 0.625rem;
  margin-top: 0.625rem;

}

.fifth {
  width: 32.5rem;
  height: 25rem;
  margin-left: 0.625rem;
  margin-top: 0.625rem;

}

.second {
  width: 53.75rem;
  height: 31.25rem;
  margin-left: 1.5625rem;
  margin-top: 0.625rem;
}
</style>