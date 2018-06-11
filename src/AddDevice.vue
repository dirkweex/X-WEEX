<template>
    <div class="wrapper">
        <div class="adddevice">
            <div class="toolbar-warpper">
                <!-- <div class="title"> -->
                <text class="toolbar-text">配置设备</text>
                <!-- </div> -->
            </div>
            <div class="toolbar-leftimage-warpper">
                <image class="toolbar-leftimage" @click="leftback" src="/web/assets/img/arrow_left.png" />
            </div>
            <!-- 输入框 -->
            <input class="input" v-model="deviceID" type="text" @change="changeDeviceID" placeholder="请输入设备ID" autofocus="true" value="" />
            <div class="button-warpper">
                <button class="button" @click="configDevice">一键配置设备</button>
            </div>
        </div>

    </div>

</template>
<script>
const navigator = weex.requireModule("navigator");
export default {
    data() {},
    methods: {
        leftback: function() {
            navigator.push({
            url: "http://192.168.12.75:8081/NewBuild.html",
            animated: "true"
          },
          event => {
            modal.toast({
              message: "callback:" + event
            });
          }
        );
        },
        configDevice:function(){
                       navigator.push({
            url: "http://192.168.12.75:8081/ElectricParameter.html",
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
.input {
    font-size: 35px;
    height: 80px;
    width: 550px;
    padding-left: 100px;
    color: #000000;
    /* placeholder-color: #a4d3fc; */
    padding-top: 50px;
    /* margin-bottom: 35px; */
    background-color: #ffffff;
    /* outline: none; */
}
.button-warpper {
    /* justify-content: center;
    align-items: center; */
}
.button {
    font-size: 35px;
    text-align: center;
    padding: 15px;
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
