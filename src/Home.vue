<template>
    <div class="home-wrapper">

        <!-- 标题栏——我的电站 , 待封装。 -->
        <div class="toobar" style="justify-content:space-between;align-items:center;flex-direction:row;background-color:#309bf8;height:100px;">
            <image class="toobar-left" style="width:35px;height:35px;margin-left:35px" @click="back" />
            <text class="title-text" style=" font-size:45px;color: #ffffff">我的电站</text>
            <image class="toobar-left" style="width:35px;height:35px;margin-right:35px" @click="add" :src="getUrl('add.png')" />
        </div>
        <!-- 电站列表 -->
        <div>
            <list class="list-warpper">
                <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                    <loading-indicator class="indicator"></loading-indicator>
                    <text class="indicator-text">正在刷新...</text>

                </refresh>
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
                        <wxc-button text="功率" type="blue" size="medium" @wxcButtonClicked="wxcButtonClicked1"></wxc-button>
                        <wxc-button text="发电量" type="blue" size="medium" @wxcButtonClicked="wxcButtonClicked2"></wxc-button>
                        <wxc-button text="收益" type="blue" size="medium" @wxcButtonClicked="wxcButtonClicked3"></wxc-button>
                    </div>

                    <!-- 收益曲线图之曲线图 -->

                    <div class="chart" ref="chartOne" :style="{top:'0',left:'0',height:'450px'}"></div>

                    <!-- 收益曲线图之年月日 -->
                    <div class="button-warpper2">

                        <wxc-button text="日" class="button2" size="small" backgroundColor="#309bf8" borderRadius="90px" @wxcButtonClicked="wxcButtonClicked4"></wxc-button>
                        <wxc-button text="月" class="button3" size="small" backgroundcolor="#309bf8" borderRadius="90px" @wxcButtonClicked="wxcButtonClicked5"></wxc-button>
                        <wxc-button text="年" class="button3" size="small" backgroundcolor="#309bf8" borderRadius="90px" @wxcButtonClicked="wxcButtonClicked6"></wxc-button>
                        <wxc-button text="总" class="button3" size="small" backgroundcolor="#309bf8" borderRadius="90px" @wxcButtonClicked="wxcButtonClicked7"></wxc-button>

                        <image class="year-img" :src="getUrl('calendar.png')" />
                    </div>

                    <!-- 分割线 -->
                    <div style="height:20px;margin:30px;background-color:#EEEEEE"></div>

                </cell>
                <cell v-for="item in lists" :key="item">
                    <div class="station-warpper" @click="itemClick">
                        <!-- left -->
                        <div class="a">
                            <image class="station-img" :src="getUrl('pic_house_small.png')" />
                            <div class="aa">
                                <text class="item-text">{{item.title}}</text>
                                <div class="b">
                                    <text class="item-text">功率</text>
                                    <text class="item-text">{{item.wa}}瓦</text>
                                </div>
                                <div class="b">
                                    <text class="item-text">发电量</text>
                                    <text class="item-text">{{item.dianliang}}瓦</text>
                                </div>
                                <div class="b">
                                    <text class="item-text">发电效率</text>
                                    <text class="item-text">{{item.xiaolv}}瓦</text>
                                </div>
                            </div>

                        </div>
                        <!-- right -->
                        <div class="ccc">
                            <text class="right-text">￥{{item.money}}</text>
                            <text class="item-text">发电收益</text>

                        </div>
                    </div>
                </cell>
                <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
                    <text class="indicator-text">加载中 ...</text>
                    <loading-indicator class="indicator"></loading-indicator>
                </loading>
            </list>
        </div>
    </div>
</template>
<script>
const modal = weex.requireModule("modal");
// const stream = weex.requireModule("stream");
const navigator = weex.requireModule("navigator");
import mixin from "./mixins/mixin.js";
import { WxcButton } from "weex-ui";
// //引入Echarts主模块
// let echarts = require("echarts/lib/echarts");
// //引入柱状图
// require("echarts/lib/chart/bar");
// //引入圆饼图
// // require('echarts/lib/chart/pie');
// //引入所需组件
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/legend");

export default {
    components: { WxcButton },
    mixins: [mixin],
    data() {
        return {
            refreshing: false,
            loadinging: false,
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
                },
                {
                    title: "AAA电站",
                    wa: "297",
                    dianliang: "110",
                    xiaolv: "22",
                    money: "445.02"
                },
                {
                    title: "AAA电站",
                    wa: "297",
                    dianliang: "110",
                    xiaolv: "22",
                    money: "445.02"
                },
                {
                    title: "AAA电站",
                    wa: "297",
                    dianliang: "110",
                    xiaolv: "22",
                    money: "445.02"
                },
                {
                    title: "AAA电站",
                    wa: "297",
                    dianliang: "110",
                    xiaolv: "22",
                    money: "445.02"
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
        //     /*创建图表一*/
        //     createChartOne() {
        //         let chartOne = echarts.init(this.$refs.chartOne);

        //         chartOne.setOption({
        //             title: { text: "在Vue中使用echarts" },
        //             tooltip: {},
        //             xAxis: {
        //                 data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        //             },
        //             yAxis: {},
        //             series: [
        //                 {
        //                     name: "销量",
        //                     type: "bar",
        //                     data: [5, 20, 36, 10, 10, 20]
        //                 }
        //             ]
        //         });
        //     }
        // },
        mounted() {
            this.createChartOne();
        },
        itemClick: function() {
            // modal.toast({
            //   message: "这是itemClick",
            //   duration: 2
            // });
            navigator.push(
                {
                    url: this.toVue("StationDetails"),
                    animated: "true"
                },
                event => {
                    modal.toast({
                        message: "callback:" + event
                    });
                }
            );
        },
        add: function() {
            navigator.push(
                {
                    // url: "http://192.168.0.101:8083/Register.html",
                    // url:"./platforms/android/app/src/main/assets/dist/Register.js",
                    //   url: "http://192.168.12.75:8081/NewBuild.html",
                    url: this.toVue("AddDevice"),
                    animated: "true"
                },
                event => {
                    modal.toast({
                        // message: "callback:" + event
                    });
                }
            );
        },
        onrefresh(event) {
            modal.toast({ message: "正在刷新...", duration: 1 });
            this.refreshing = true;
            setTimeout(() => {
                this.refreshing = false;
            }, 2000);
        },
        onpullingdown(event) {
            console.log("dy: " + event.dy);
            console.log("pullingDistance: " + event.pullingDistance);
            console.log("viewHeight: " + event.viewHeight);
            console.log("type: " + type);
        },
        onloading(event) {
            modal.toast({ message: "Loading", duration: 1 });
            this.loadinging = true;
            setTimeout(() => {
                this.loadinging = false;
            }, 2000);
        }
    }
};
</script>
<style scoped>
/* .list-warpper{
  background-color: #ffffff;
  flex: 1;
} */
.refresh {
    width: 750;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
}
.indicator-text {
    color: #888888;
    font-size: 35px;
    text-align: center;
}
.indicator {
    margin-top: 16px;
    height: 50px;
    width: 50px;
    margin-bottom: 16px;
    color: #309bf8;
}
.item-text {
    font-size: 35px;
}
.ccc {
    margin-top: 35px;
    margin-right: 15px;
}
.right-text {
    color: #ff0000;
    font-size: 35px;
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
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;
}
.button-warpper2 {
    flex-direction: row;
    /* justify-content: space-around; */
    margin-top: 30px;
}
.button {
    font-size: 35px;
    width: 200px;
    text-align: center;
    padding: 15px;
    border-width: 2px;
    border-style: solid;
    color: #ffffff;
    border-color: #ffffff;
    background-color: #309bf8;
    border-radius: 50px;
}
.button2 {
    margin-left: 30px;
    width: 90px;
    height: 90px;
    text-align: center;
}
.button3 {
    margin-left: 60px;
    width: 90px;
    height: 90px;
    text-align: center;
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
