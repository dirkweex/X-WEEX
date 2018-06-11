<template>
    <div class="wrapper">
        <div class="register">
            <div class="toolbar-warpper">
                <image class="toolbar-image" @click="leftback" src="/web/assets/img/arrow_left.png" />
                <text class="toolbar-text">电站详情</text>
                <image class="toolbar-image" @click="leftback" src="/web/assets/img/add.png" />
            </div>
        </div>
    </div>
</template>
    
<style scoped>
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