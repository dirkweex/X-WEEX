<template>
  <div class="wrapper">

    <div class="adddevice">
      <!-- 标题栏——我的电站 , 待封装。 -->
      <div class="toobar" style="justify-content:space-between;align-items:center;flex-direction:row;background-color:#309bf8;height:100px;">
        <image class="toobar-left" style="width:35px;height:35px;margin-left:35px" @click="back" :src="getUrl('arrow_left.png')" />
        <text class="title-text" style=" font-size:45px;color: #ffffff">配置设备</text>
        <!-- :src="getUrl('add.png')" -->
        <image class="toobar-left" style="width:35px;height:35px;margin-right:35px" @click="add" />
      </div>

      <!-- 输入框 -->
      <input class="input" v-model="deviceID" type="text" @change="changeDeviceID" placeholder="请输入设备ID" autofocus="true" value="" />
      <div class="button-warpper">
        <wxc-button text="一键配置设备" type="blue" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
      </div>

    </div>

  </div>

</template>
<script>
const navigator = weex.requireModule("navigator");
import mixin from "./mixins/mixin.js";
import { WxcButton } from "weex-ui";
export default {
    components: { WxcButton },
    mixins: [mixin],
    data() {},
    methods: {
        wxcButtonClicked(e) {
            navigator.push(
                {
                    // url: "http://192.168.12.75:8081/AddDevice.html",
                    url: this.toVue("ElectricParameter"),
                    animated: "true"
                },
                event => {
                    modal.toast({
                        message: "callback:" + event
                    });
                }
            );
        },
        back: function() {
            // navigator.push(
            //     {
            //         // url: "http://192.168.12.75:8081/NewBuild.html",
            //         url: this.toVue("NewBuild"),
            //         animated: "true"
            //     },
            //     event => {
            //         modal.toast({
            //             message: "callback:" + event
            //         });
            //     }
            // );
            navigator.pop({ animated: "true" });
        }
    }
};
</script>

    
<style scoped>
.button-warpper {
    justify-content: center;
    align-items: center;
}
.warpper {
    /* background-image: linear-gradient(to bottom, #f35bb6, #7b79f9); */
    /* background-color: #ffffff; */
    flex: 1;
}

.input {
    font-size: 35px;
    height: 180px;
    padding-left: 100px;
    color: #000000;
    /* placeholder-color: #a4d3fc; */
    padding-top: 50px;
    /* margin-bottom: 35px; */
    background-color: #ffffff;
    /* outline: none; */
}

.button {
    font-size: 35px;
    text-align: center;
    top: 0;
    left: 0;
    padding: 35px;
    margin: 10px;
    border-width: 2px;
    border-style: solid;
    color: #ffffff;
    border-color: #ffffff;
    background-color: #1e90ff;
    border-radius: 10px;
    margin-top: 140px;
}
</style>
