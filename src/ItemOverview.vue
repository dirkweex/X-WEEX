<template>
    <div class="warpper">
        <div class="adddevice">
            <div class="ep-warpper">
                <text>电站基本信息</text>
            </div>

            <!-- 输入框 -->
            <div class="ep-warpper">
                <text>电站名称</text>
                <text>xxxxxxxx</text>/>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>电站地址</text>
                <div class="location-warpper">
                    <image class="location-image" src="/web/assets/img/adress.png" />
                    <text>地图选点 </text>
                    <image class="location-image" src="/web/assets/img/position.png" />
                    <text>自动定位</text>
                </div>

            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text></text>
                <div class="location-warpper">
                    <text>纬度</text>
                    <text>13.12144 </text>
                    <text>经度</text>
                    <text>113.38835</text>
                </div>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>所在地区</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="广东省广州市天河区" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>详细地址</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="平安银行（广州骏景花园社区支行）附近" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>时区</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="（UTC+08:00）北京、重庆、香港特别行政区、乌鲁木齐" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>电站类型</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="家用屋顶" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>并网类型 </text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="分布式全额上网" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>装机容量</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入装机容量" autofocus="true" value="" />
                <text>千瓦</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>安装面积</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入电站面积（单位）" autofocus="true" value="" />
                <text>平米</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>朝向</text>
                <wxc-slider-bar v-bind="sliderBarCfg"></wxc-slider-bar>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>朝向</text>

            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>安装商</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="广州致远电子" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>运营商</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="广州致远电子" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>用电电价</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入用电电价" autofocus="true" value="" />
                <text>元/度</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>脱硫上网电价</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入上网电价" autofocus="true" value="" />
                <text>元/度</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>发电国补</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入发电国补" autofocus="true" value="" />
                <text>元/度</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>国补年限</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>发电省补</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入发电省补" autofocus="true" value="" />
                <text>元/度</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>省补年限</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>发电市补</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入发电市补" autofocus="true" value="" />
                <text>元/度</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>市补年限</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>建设成本</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入建站费用" autofocus="true" value="" />
                <text>元</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>建设补贴</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入建站补贴" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>贷款比例</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>贷款年利率</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="请输入贷款年利率" autofocus="true" value="" />
                <text>%</text>
            </div>
            <div style="height:1px;background-color:#A5A5A5" />
            <div class="ep-warpper">
                <text>贷款年限</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="进度条实现" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />

            <div class="ep-warpper">
                <text>还款类型</text>
                <input class="input" v-model="name" type="text" @change="changeDeviceID" placeholder="等额本息" autofocus="true" value="" />
            </div>
            <div style="height:1px;background-color:#A5A5A5" />

         
        </div>

    </div>

</template>
<script>
const navigator = weex.requireModule("navigator");
import { WxcSliderBar } from "weex-ui";
export default {};
</script>

    
<style scoped>
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
    background-color: #1e90ff;
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
    /* justify-content: center;
    align-items: center; */
    flex: 1;
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

    font-size: 35px;
    color: #000000;
    /* placeholder-color: #a4d3fc; */
    /* margin-bottom: 35px; */

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
