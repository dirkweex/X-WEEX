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
                <wxc-tab-page ref="wxc-tab-page"  :tab-titles="tabTiles" :tab-styles="tabStyles" title-type="icon" :tab-page-height="tabPageHeight" @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
                    <list v-for="(v,index) in tabList" :key="index" class="item-container" :style="{height:(tabPageHeight-tabStyles.height)+'px'}">
                        <cell v-for="(demo,key) in v" class="cell" :key="key">
                            <wxc-pan-item :ext-id="'1-'+(v)+'-'+(key)"
                                            @wxcPanItemPan="wxcPanItemPan"
                                            >
                                <div class="content">
                                    <text>{{key}}</text>
                                </div>
                            </wxc-pan-item>
                        </cell>
                    </list>
                </wxc-tab-page>
            </div>
        </div>
    </div>
 
</template>
<script>
const dom=weex.requireModule('dom');
import {WxcTabPage,WxcPanItem,Utils,BindEnv} from 'weex-ui';
// import Config from "./bottomtabconfig.js";
import bottomtabconfig from './bottomtabconfig.js';
export default {
    components:{WxcTabPage,WxcPanItem},
    data:()=>({
        tabTitles:bottomtabconfig.tabTitles,
        tabStyles:bottomtabconfig.tabStyles,
        tabList:[],
        demoList:[1,2,3,4],
        tabPageHeight:1334
    }),
    created(){
        this.tabPageHeight=Utils.env.getPageHeight();
        this.tabList=[...Array(this.tabTitles.length).keys()].map(i=>[]);
        Vue.set(this.tabList,0,this.demoList);
    },
    methods:{
        wxcTabPageCurrentTabSelected(e){
            const self =this;
            const index =e.page;
            if(!Utils.isNonEmptyArray(self.tabList[index])){
                setTimeout(()=>{
                    Vue.set(self.tabList,index,self.demoList);
                },100);
            }

        },
        wxcPanItemPan(e){
            if(BindEnv.supportsEBForAndroid()){
                this.$refs['wxc-tab-page'].bindExp(e.element);
            }
        }
    },
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
            ]
        };
    }
};
</script>
 
<style scoped>
.item-container {
    widows: 750px;
    background-color: #f2f3f4;
}
.border-cell {
    background: #f2f3f4;
    width: 750px;
    height: 24px;
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
    item-selected-color: red;
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