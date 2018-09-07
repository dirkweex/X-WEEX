<template>
    <div class="newbuild-bg">
        <image :style="imageStyle"  :src="getUrl('page1_bg.png')" />
        <div class="a">
            <image class="a-img"  :src="getUrl('head_1.png')" />
            <div class="a-a">
                <text class="a-a-text">aw11sad2214asdasd12123</text>
                <div class="a-a-a">
                    <text class="a-a-a-text1">0 电站</text>
                    <text class="a-a-a-text2">0 设备</text>
                </div>
            </div>
        </div>

        <div class="b">
            <image class="b-img"  :src="getUrl('search.png')"  />
            <text class="b-text">咦？还没有自己的电站？</text>
            <text class="b-text"> 立即新建一个吧！</text>
            <div class="b-button">
              <wxc-button  text="新建电站" type="blue" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
             <image class="b-button-img"  :src="getUrl('add2x.png')"/>

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
  data() {
    return {
      imageStyle: {
        position: "absolute",
        width: "750px",
        height:
          weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth +
          "px"
      }
    };
  },
  methods: {
    wxcButtonClicked(e) {
      navigator.push(
        {
          // url: "http://192.168.12.75:8081/AddDevice.html",
          url: this.toVue("AddDevice"),
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
.newbuild-bg {
  flex: 1;
}
.a {
  margin-top: 150px;
  margin-left: 80px;
  flex-direction: row;
}
.b {
  justify-content: center;
  align-items: center;
  margin-top: 250px;
}
.a-img {
  width: 100px;
  height: 100px;
}
.a-a {
  margin-left: 50px;
}
.a-a-text {
  font-size: 30px;
  color: #ffffff;
}
.a-a-a {
  margin-top: 10px;
  flex-direction: row;
}
.a-a-a-text1 {
  font-size: 40px;
  color: #ffffff;
}
.a-a-a-text2 {
  font-size: 40px;
  color: #ffffff;
  margin-left: 100px;
}
.b-img {
  width: 150px;
  height: 150px;
}
.b-text {
  margin-top: 45px;
  color: #6f6f6f;
  font-size: 35px;
}
.b-button {
  flex-direction: row;
  margin-top: 50px;
}
.b-button-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  margin-top: 23px;
  margin-left: 85px;
  height: 35px;
}
.b-button-text {
  font-size: 35px;
  width: 400px;
  text-align: center;
  padding: 35px;
  border-width: 2px;
  border-style: solid;
  color: #ffffff;
  border-color: #ffffff;
  background-color: #2e9bf6;
  border-radius: 50px;
}
</style>
