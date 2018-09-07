<template>
    <div class="warpper">
        <scroller>
            <div class="adddevice">
                <!-- 标题栏——我的电站 , 待封装。 -->
                <div class="toobar" style="justify-content:space-between;align-items:center;flex-direction:row;background-color:#309bf8;height:100px;">
                    <image class="toobar-left" style="width:35px;height:35px;margin-left:35px" @click="back" :src="getUrl('arrow_left.png')" />
                    <text class="title-text" style=" font-size:45px;color: #ffffff">电站参数</text>
                    <!-- :src="getUrl('add.png')" -->
                    <image class="toobar-left" style="width:35px;height:35px;margin-right:35px" @click="add" />
                </div>
                <!-- 输入框 -->
                <div class="ep-warpper">
                    <text class="text">电站名称</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入设备ID" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">电站位置</text>
                    <div class="location-warpper">
                        <image class="location-image" src="/web/assets/img/adress.png" />
                        <text class="text">地图选点 </text>
                        <image class="location-image" src="/web/assets/img/position.png" />
                        <text class="text">自动定位</text>
                    </div>

                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text></text>
                    <div class="location-warpper">
                        <text class="text">纬度</text>
                        <text class="text">13.12144 </text>
                        <text class="text">经度</text>
                        <text class="text">113.38835</text>
                    </div>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">所在地区</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="广东省广州市天河区" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">详细地址</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="平安银行（广州骏景花园社区支行）附近" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">时区</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="（UTC+08:00）北京、重庆、香港特别行政区、乌鲁木齐" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">电站类型</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="家用屋顶" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">并网类型 </text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="分布式全额上网" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">装机容量</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入装机容量" autofocus="false" value="" />
                    <text class="text">千瓦</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">安装面积</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入电站面积（单位）" autofocus="false" value="" />
                    <text class="text">平米</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">朝向</text>
                    <wxc-slider-bar v-bind="sliderBarCfg"></wxc-slider-bar>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">朝向</text>

                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">安装商</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="广州致远电子" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">运营商</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="广州致远电子" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">用电电价</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入用电电价" autofocus="false" value="" />
                    <text class="text">元/度</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">脱硫上网电价</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入上网电价" autofocus="false" value="" />
                    <text class="text">元/度</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">发电国补</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入发电国补" autofocus="false" value="" />
                    <text class="text">元/度</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">国补年限</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">发电省补</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入发电省补" autofocus="false" value="" />
                    <text class="text">元/度</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">省补年限</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">发电市补</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入发电市补" autofocus="false" value="" />
                    <text class="text">元/度</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">市补年限</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">建设成本</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入建站费用" autofocus="false" value="" />
                    <text class="text">元</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">建设补贴</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入建站补贴" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">贷款比例</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">贷款年利率</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入贷款年利率" autofocus="false" value="" />
                    <text>%</text>
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="ep-warpper">
                    <text class="text">贷款年限</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />

                <div class="ep-warpper">
                    <text class="text">还款类型</text>
                    <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="等额本息" autofocus="false" value="" />
                </div>
                <div style="height:1px;background-color:#A5A5A5" />
                <div class="button-warpper">
                    <wxc-button text="保存" type="blue" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
const navigator = weex.requireModule("navigator");
import { WxcSliderBar } from "weex-ui";
import { WxcButton } from "weex-ui";
import mixin from "./mixins/mixin.js";
export default {
    mixins: [mixin],
    components: {
        WxcButton,
        data: () => ({
            sliderBarCfg: {
                length: 400,
                height: 30,
                range: false,
                min: 0,
                max: 360,
                value: 0,
                defaultValue: 0,
                disabled: false
            }
        })
    },
    data() {},
    methods: {
        back: function() {
            navigator.pop({
                animated: "true"
            });
        },
        wxcButtonClicked(e) {
            navigator.push(
                {
                    url: this.toVue("BottomTab"),
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
.text {
    font-size: 35px;
}
.warpper {
    /* background-image: linear-gradient(to bottom, #f35bb6, #7b79f9); */
    /* background-color: #ffffff; */
    flex: 1;
}
.toolbar-warpper {
    /* position: absolute; */
    /* 垂直居中 */
    justify-content: center;
    align-items: center;
    background-color: #2e9bf6;
    height: 100px;
    /* width: 100px; */
}
.toolbar-leftimage-warpper {
    position: absolute;
    /* 垂直居中 */
    justify-content: center;
    /* align-items: center; */
    height: 100px;
}
.toolbar-text {
    font-size: 35px;
    color: #ffffff;
}
.toolbar-leftimage {
    margin-left: 35px;
    width: 35px;
    height: 35px;
}
.button-warpper {
    margin-top: 35px;
    margin-bottom: 35px;
    justify-content: center;
    align-items: center;
}
.button {
    /* align-content: flex-end; */
    width: 800px;
    font-size: 35px;
    text-align: center;
    /* padding: 15px; */
    height: 100px;
    border-width: 2px;
    /* border-style: solid; */
    color: #ffffff;
    border-color: #ffffff;
    background-color: #1e90ff;
    /* border-radius: 10px; */
}
.ep-warpper {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 50px;
    padding: 20px;
}
.input {
    /* 设置输入文字的方向，靠右 */
    text-align: end;
    font-size: 35px;
    color: #000000;
    /* placeholder-color: #a4d3fc; */
    /* margin-bottom: 35px; */
    background-color: #ffffff;
    /* outline: none; */
}
.location-image {
    width: 35px;
    height: 35px;
}
.location-warpper {
    flex-direction: row;
}
</style>