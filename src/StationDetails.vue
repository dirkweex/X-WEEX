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
        </div>
    </div>
</template>
<script>
export default {
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
.image {
    width: 600px;
    height: 300px;
}
.slider {
    width: 700px;
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
    item-color:gteen;
    item-selected-color:red;
    item-size:15px;
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