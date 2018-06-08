<template>
  <wxc-tab-bar :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="icon" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle">
      <!-- <text>主页</text>
        <text class="message">Now, let's use Vue.js to build your Weex app.</text>
       -->
    
      <home></home>
    </div>

    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle">
      <Message />
    </div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle">
      <Setting />
    </div>

    <!-- 第四个页面内容-->
    <!-- <div class="item-container" :style="contentStyle"><text>我的主页</text></div> -->
  </wxc-tab-bar>
</template>

<style scoped>
.item-container {
    width: 750px;
    background-color: #f2f3f4;
    /* align-items: center;
    justify-content: center; */
}
</style>
<script>
import { WxcTabBar, Utils } from "weex-ui";
import Home from "./Home.vue";
import Message from "./Message.vue";
import Setting from "./Setting.vue";
// https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js
import Config from "./bottomtabconfig.js";

export default {
    components: { WxcTabBar, Home,Message,Setting },
    data: () => ({
        tabTitles: Config.tabTitles,
        tabStyles: Config.tabStyles
    }),
    created() {
        const tabPageHeight = Utils.env.getPageHeight();
        // 如果页面没有导航栏，可以用下面这个计算高度的方法
        // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
        const { tabStyles } = this;
        this.contentStyle = { height: tabPageHeight - tabStyles.height + "px" };
    },
    methods: {
        wxcTabBarCurrentTabSelected(e) {
            const index = e.page;
            // console.log(index);
        }
    }
};
</script>
