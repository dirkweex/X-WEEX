<template>
    <div class="home-wrapper">

        <!-- 标题栏——我的电站 , 待封装。 -->
        <div class="toobar" style="justify-content:space-between;align-items:center;flex-direction:row;background-color:#309bf8;height:100px;">
            <image class="toobar-left" style="width:35px;height:35px;margin-left:35px"  @click="back" />
            <text class="title-text" style=" font-size:45px;color: #ffffff">我的电站</text>
            <image class="toobar-left" style="width:35px;height:35px;margin-right:35px"  @click="add"  :src="getUrl('add.png')"/>
        </div>



        <!-- 电站列表 -->
        <div>
            <list>
              <cell>
                      <!-- 今日发电和今日总收益 -->
        <div class="all-data">
            <div class="leftData">
                <text class="du-color">今日发电总量</text>
                <div class="du-warpper">
                    <text class="du-text">3712.37</text>
                    <text class="du-color">度</text>
                </div>
                <div class="du-warpper">
                    <text class="du-color">累计总发电</text>
                    <text class="du-color2">3712.37</text>
                    <text class="du-color">度</text>
                </div>
            </div>
            <div style="width:1px;height:120px;margin:30px;background-color:#9F9F9F" />
            <div class="rightData">
                <text class="du-color">今日总收益</text>
                <div class="du-warpper">
                    <text class="du-text">2413.04</text>
                    <text class="du-color"></text>
                </div>
                <div class="du-warpper">
                    <text class="du-color">累计总收益</text>
                    <text class="du-color2">2413.04</text>
                    <text class="du-color"></text>
                </div>
            </div>

        </div>

        <!-- 分割线 -->
        <div style="height:20px;margin:30px;background-color:#EEEEEE" />

        <!-- 收益曲线图之3个按钮 -->
        <div class="button-warpper">
            <button class="button">功率</button>
            <button class="button">发电量</button>
            <button class="button">收益</button>
        </div>

        <!-- 收益曲线图之曲线图 -->

        <!-- 收益曲线图之年月日 -->
        <div class="button-warpper2">
            <button class="button2">日</button>
            <button class="button3">月</button>
            <button class="button3">年</button>
            <button class="button3">总</button>
            <image class="year-img"  :src="getUrl('calendar.png')" />
        </div>

        <!-- 分割线 -->
        <div style="height:20px;margin:30px;background-color:#EEEEEE"></div>

              </cell>
                <cell v-for="item in lists" :key="item">
                    <div class="station-warpper">
                        <!-- left -->
                        <div class="a">
                            <image class="station-img" :src="getUrl('pic_house_small.png')"/>
                            <div class="aa">
                                <text>{{item.title}}</text>
                                <div class="b">
                                    <text>功率</text>
                                    <text>{{item.wa}}瓦</text>
                                </div>
                                <div class="b">
                                    <text>发电量</text>
                                    <text>{{item.dianliang}}瓦</text>
                                </div>
                                <div class="b">
                                    <text>发电效率</text>
                                    <text>{{item.xiaolv}}瓦</text>
                                </div>
                            </div>

                        </div>
                        <!-- right -->
                        <div class="ccc">
                            <text class="right-text">￥{{item.money}}</text>
                            <text>发电收益</text>

                        </div>
                    </div>
                </cell>
            </list>
        </div>
    </div>
</template>
<script>
// const modal = weex.requireModule("modal");
// const stream = weex.requireModule("stream");
const navigator = weex.requireModule("navigator");
import mixin from "./mixins/mixin.js";
export default {
  mixins: [mixin],
  data() {
    return {
      lists: [
        {
          title: "特斯电站",
          wa: "200.3",
          dianliang: "1500",
          xiaolv: "69",
          money: "99445"
        },
        {
          title: "zzzzz电站",
          wa: "100.3",
          dianliang: "23",
          xiaolv: "61",
          money: "1200"
        },
        {
          title: "xxx电站",
          wa: "10.3",
          dianliang: "30",
          xiaolv: "78",
          money: "200.30"
        },
        {
          title: "rrrr电站",
          wa: "211.3",
          dianliang: "900",
          xiaolv: "99",
          money: "1445"
        },
        {
          title: "AAA电站",
          wa: "297",
          dianliang: "110",
          xiaolv: "22",
          money: "445.02"
        }
      ]
    };
  },
  methods: {
    add: function() {
      navigator.push(
        {
          // url: "http://192.168.0.101:8083/Register.html",
          // url:"./platforms/android/app/src/main/assets/dist/Register.js",
          //   url: "http://192.168.12.75:8081/NewBuild.html",
          url: this.toVue("NewBuild"),
          animated: "true"
        },
        event => {
          modal.toast({
            message: "callback:" + event
          });
        }
      );
    }
  }
};
</script>
<style scoped>
.ccc {
  margin-top: 35px;
  margin-right: 15px;
}
.right-text {
  color: #ff0000;
}
.aa {
  margin-left: 25px;
}
.b {
  width: 250px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
}
.a {
  flex-direction: row;
  margin: 35px;
}
.station-img {
  width: 200px;
  height: 200px;
}
.home-wrapper {
  background-color: #ffffff;
  flex: 1;
}

.title {
  /* 水平居中 */
  align-items: center;
}
.all-data {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.rightData {
  margin-left: 20px;
}
.du-warpper {
  flex-direction: row;
}
.du-text {
  font-size: 50px;
  color: #1e90ff;
  margin-right: 10px;
}
.du-color {
  font-size: 25px;
  color: #9f9f9f;
  margin-top: 10px;
  margin-bottom: 10px;
}
.du-color2 {
  color: #555555;
  font-size: 30px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 8px;
}
.button-warpper {
  /* margin-top: 10px; */
  flex-direction: row;
  justify-content: space-around;
}
.button-warpper2 {
  flex-direction: row;
  /* justify-content: space-around; */
  margin-top: 30px;
}
.button {
  font-size: 30px;
  width: 200px;
  text-align: center;
  padding: 15px;
  border-width: 2px;
  border-style: solid;
  color: #ffffff;
  border-color: #ffffff;
  background-color: #3fa2f9;
  border-radius: 50px;
}
.button2 {
  margin-left: 30px;
  font-size: 30px;
  width: 90px;
  height: 90px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  color: #ffffff;
  border-color: #ffffff;
  background-color: #31d7fe;
  border-radius: 100px;
}
.button3 {
  margin-left: 60px;
  font-size: 30px;
  width: 90px;
  height: 90px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  color: #ffffff;
  border-color: #ffffff;
  background-color: #31d7fe;
  border-radius: 100px;
}
.year-img {
  margin-top: 15px;
  margin-left: 60px;
  width: 60px;
  height: 60px;
}
.station-warpper {
  flex-direction: row;
  justify-content: space-between;
}
.text {
  font-size: 36px;
  text-align: center;
  color: #41b883;
}
</style>
