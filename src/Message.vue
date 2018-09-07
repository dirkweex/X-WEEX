<template>
    <div class="warpper">
        <div class="Station-warpper">
            <!-- 消息 , 待封装。 -->
            <div class="toobar" style="justify-content:space-between;align-items:center;flex-direction:row;background-color:#309bf8;height:100px;">
                <image class="toobar-left" style="width:35px;height:35px;margin-left:35px" @click="back" />
                <text class="title-text" style=" font-size:45px;color: #ffffff">消息</text>
                <!-- :src="getUrl('add.png')"  -->
                <image class="toobar-left" style="width:35px;height:35px;margin-right:35px" @click="add" />
            </div>

            <!-- 顶部菜单栏-2个页面 -->
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
import Warn from "./Warn.vue";
import Notice from "./Notice.vue";

export default {
    components: { Warn, Notice },
    data() {
        return {
            activeTab: 0,
            tabs: [
                {
                    title: "报警",
                    name: "Warn"
                },
                {
                    title: "通知",
                    name: "Notice"
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
.warpper {
    /* background-image: linear-gradient(to bottom, #f35bb6, #7b79f9); */
    background-color: #ffffff;
    flex: 1;
}
.toolbar-warpper {
    flex-direction: row;
    justify-content: center;
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
    /* position: relative; */
    width: 3750px;
    flex: 1;
    flex-direction: row;
    /* align-items: stretch; */
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
</style>

            