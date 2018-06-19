<template>
  <div class="wrapper">
    <div class="setting-warpper">
      <!-- 标题栏 -->
            <!-- 设置 , 待封装。 -->
            <div class="toobar" style="justify-content:space-between;align-items:center;flex-direction:row;background-color:#309bf8;height:100px;">
                <image class="toobar-left" style="width:35px;height:35px;margin-left:35px" @click="back" />
                <text class="title-text" style=" font-size:45px;color: #ffffff">设置</text>
                <!-- :src="getUrl('add.png')"  -->
                <image class="toobar-left" style="width:35px;height:35px;margin-right:35px" @click="add" />
            </div>

      <!-- 下部分 -->

      <div class="userinfo">
        <image class="userimage" src="/web/assets/img/demo.jpg" />
        <div>
          <text class="usertext">jjjjjjj</text>
          <text class="usertext">任性签名</text>
        </div>

      </div>

      <div class="setting-text">
        <text class="setting-item-text">账户安全</text>
      </div>
      <div class="setting-text">
        <text class="setting-item-text">消息设置</text>
      </div>
      <div class="setting-text">
        <text class="setting-item-text">通用</text>
      </div>
      <div class="setting-text">
        <text class="setting-item-text">关于光伏小致</text>
      </div>
      <div class="setting-text">
        <text class="setting-item-text">清理缓存</text>
      </div>
      <div class="setting-text">
        <text class="setting-item-text">退出</text>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>

    </div>
  </div>
</template>
<style scoped>
.setting-item-text {
    font-size: 35px;
    padding: 30px;
}
.setting-text {
    justify-content: center;
    background-color: #ffffff;
    margin-top: 2px;
    margin-bottom: 2px;
}
.usertext {
    margin-top: 75px;
    font-size: 35px;
    margin-left: 45px;
}
.userimage {
    width: 300px;
    height: 300px;
}

.userinfo {
    margin-bottom: 35px;
    flex-direction: row;
    background-color: #ffffff;
}
.setting-warpper {
    background-color: #eeeeee;
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
.toolbar-text {
    font-size: 35px;
    color: #ffffff;
}
</style>
