<template>
    <div class="warpper">
        <div class="Station-warpper">
            <!-- 标题栏 -->
            <div class="toolbar-warpper">
                <image class="toolbar-image" @click="leftback" src="/web/assets/img/arrow_left.png" />
                <text class="toolbar-text">电站详情</text>
                <image class="toolbar-image" @click="rightback" src="/web/assets/img/add.png" />
            </div>
            <!-- 轮播图 -->
            <div>
                <slider class="slider" interval="3000" show-indicators="true" auto-play="true" :index="0">
                    <div class="frame" v-for="(img,idx) in imageList" :key="(img,idx)">
                        <image class="image" resize="cover" :src="img.src" />
                        <text style="top:20px;color:red;position:absolute">{{idx}}</text>
                        <text class="title">{{img.title}}</text>
                    </div>
                    <indicator class="indicator"></indicator>
                </slider>
            </div>
            <!-- 轮播图悬浮固定显示天气 -->
            <text style="left:20px;top:220px;color:red;position:absolute">天气信息</text>

            <!-- 顶部标签页 -->
            <div>
                <div class="tabbar">
                    <div class="tab active" :style="{left:activeTab*150+'px'}">
                    </div>
                    <div v-for="(tab,i) in tabs" :key="i" class="tab" @click="activeTab=i">
                        <text class="title">{{tab.title}}</text>
                    </div>
                </div>
                <div class="tab-panels" :style="{left:activeTab* -750+'px'}">
                    <div class="panel" v-for="(panel,pi) in panels" :key="pi">
                        <!-- <text class="content">{{panel.content}}</text> -->
                        <div :is="componentName"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
const dom = weex.requireModule("dom");

import { WxcTabPage, WxcPanItem, Utils, BindEnv } from "weex-ui";
import Config from "./stationconfig.js";
import ItemStation from "./ItemStation.vue";
import ItemOverview from "./ItemOverview.vue";
import ItemDevice from "./ItemDevice.vue";
export default {
    components: { ItemStation, ItemOverview, ItemDevice },
    data() {
        return {
            imageList: [
                {
                    src:
                        "/platforms/android/app/src/main/res/drawable-hdpi/penguins.jpg"
                },
                {
                    src:
                        "/platforms/android/app/src/main/res/drawable-hdpi/pic_house.png"
                },
                { src: "/web/assets/img/zlg_logo.png" }
            ],
            activeTab: 0,
            tabs: [
                {
                    title: "电站",
                    name: "ItemStation"
                },
                {
                    title: "概览",
                    name: "ItemOverview"
                },
                {
                    title: "设备",
                    name: "ItemDevice"
                }
            ]
        };
    },
    computed: {
        panels() {
            return this.tabs.map(tab => ({
                content: tab.title
            }));
        },
        componentName() {
            return this.tabs[this.activeTab].name;
        }
    }
};
</script>
 
<style scoped>
.tabbar {
    flex-direction: row;
    justify-content: center;
    background-color: #ffffff;
}
.tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
}
.active {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
}
.icon {
    width: 45px;
    height: 45px;
}
.title {
    font-size: 35px;
    color: #1e90ff;
    margin-top: 10px;
}
.tab-panels {
    position: relative;
    width: 3750;
    flex: 1;
    flex-direction: row;
    align-items: stretch;
    background-color: #f5f5f5;
    transition: left 0.2s ease-in-out;
}

.panel {
    width: 750px;
}
.content {
    font-size: 100px;
    color: #707070;
}
.border-cell {
    background: #f2f3f4;
    width: 750px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
}
.cell {
    border-color: #ffffff;
}
.content {
    widows: 750px;
    height: 300px;
    border-bottom-width: 1px;
    align-items: center;
    justify-content: center;
}
.image {
    width: 800px;
    height: 300px;
}
.slider {
    height: 300px;
    border-width: 2px;
    justify-content: flex-end;
    align-items: center;
    border-style: solid;
    border-color: #41b883;
}
.title {
    position: absolute;
    top: 20px;
    left: 20px;
    padding-left: 20px;
    width: 200px;
    color: "#FFFFFF";
    font-size: 36px;
    line-height: 60px;
    background-color: rgba((0), 0, 0, 0);
}
.frame {
    position: relative;
}
.indicator {
    padding: 20px;
    /* height: 300px;  */
    item-color: gteen;
    item-selected-color: #1e90ff;
    item-size: 20px;
    /* position: absolute; */
    /* top: 200px;
    left: 200px; */
}
.warpper {
    /* background-image: linear-gradient(to bottom, #f35bb6, #7b79f9); */
    background-color: #ffffff;
    flex: 1;
}
.toolbar-warpper {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #1e90ff;
}

.toolbar-text {
    font-size: 35px;
    color: #ffffff;
}
.toolbar-image {
    width: 35px;
    margin-left: 15px;
    margin-right: 15px;
    height: 35px;
}
</style>