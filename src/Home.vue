<template>
  <div class="hemo-wrapper">
    <div class="toobar">
      <div class="title">
        <text class="title-text">我的电站</text>
      </div>
      <image class="toobar-rightimage" src="/web/assets/img/add.png" />
    </div>
    <div class="all-data">
      <div class="leftData">
        <text class="du-color">今日发电总量</text>
        <div class="du-warpper">
          <text class="du-text">3712.37</text>
          <text class="du-color">度</text>
        </div>
           <div class="du-warpper">
        <text class="du-color">累计总发电</text>
        <text class="du-color2">3712.37</text>
        <text class="du-color">度</text>
           </div>
      </div>
      <div style="width:1px;height:120px;margin:30px;background-color:#9F9F9F" />
          <div class="rightData">
        <text class="du-color">今日总收益</text>
        <div class="du-warpper">
          <text class="du-text">2413.04</text>
          <text class="du-color"></text>
        </div>
           <div class="du-warpper">
        <text class="du-color">累计总收益</text>
        <text class="du-color2">2413.04</text>
        <text class="du-color"></text>
           </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.toobar {
    /* 垂直居中 */
    justify-content: center;
    align-items: center;
    background-color: #1e90ff;
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
    margin-top: 30px;
}
.rightData{
  margin-left: 20px;
}
.du-warpper {
    flex-direction: row;
}
.du-text {
    font-size: 50px;
    color: #1e90ff;
    margin-right: 10px;
}
.du-color{
  font-size: 25px;
  color:#9F9F9F;
  margin-top: 10px;
  margin-bottom: 10px;
}
.du-color2{
  color:#555555;
  font-size: 30px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 8px;
 
}
</style>
