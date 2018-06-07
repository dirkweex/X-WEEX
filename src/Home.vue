<template>
  <div class="hemo-wrapper">
    <div class="toobar">
      <div class="title">
        <text class="title-text">我的电站</text>
      </div>
      <image class="toobar-rightimage" src="./src/img/add.png" />
    </div>
    <div class="all-data">
      <div class="leftData">
        <text>今日发电总量<br/> 0.00 瓦时<br/>累计总发电0.00瓦时</text>
      </div>
      <div style="width:1px;height:120px;margin:30px;background-color:#000" />
      <div class="rightData">
        <text>今日发电总量<br/> 0.00 瓦时<br/>累计总发电0.00瓦时</text>
      </div>

    </div>
  </div>
</template>
<style scoped>
.toobar {
    /* 垂直居中 */
    justify-content: center;
    align-items: center;
    background-color: #1E90FF;
    height: 100px;
}
.title {
    /* 水平居中 */
    align-items: center;
}
.title-text {
    font-size: 45px;
    color: #ffffff;
}

.toobar-rightimage {
    /* 类似帧布局的效果，叠加于上 */
    position: absolute;
    width: 35px;
    height: 35px;
    margin-left: 300px;
}
.all-data {
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
