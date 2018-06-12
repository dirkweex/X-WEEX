<template>
  <div class="warpper">
    <!-- 表-1 -->
    <div class="list">
      <!-- left -->
      <div>
        <tex class="list-text">当前发电功率</tex>
        <!-- 度数 -->
        <div class="left-data">
          <text class="left-text">42.77</text>
          <text class="left-unit">元</text>
        </div>
      </div>
      <!-- right -->
      <div class="round">
        <text>0.00%</text>
        <text>发电效率</text>
        <text>0.00瓦</text>
        <text>装机容量</text>
      </div>
    </div>
    <div style="margin-top:15px;height:1px;background-color:#A5A5A5" />
    <!-- 表-2 -->
    <div class="list">
      <!-- left -->
      <div>
        <tex class="list-text">当前发电量</tex>
        <!-- 度数 -->
        <div class="left-data">
          <text class="left-text">93.75</text>
          <text class="left-unit">瓦时</text>
        </div>
      </div>
      <!-- right -->
      <div>
        <div class="list-style">
          <text>累计发电</text>
          <text>3712.43</text>
          <text>度</text>
        </div>
        <div class="list-style">
          <text>日均满发电</text>
          <text>0.00</text>
          <text>小时</text>
        </div>
      </div>
    </div>
    <div style="margin-top:15px;height:1px;background-color:#A5A5A5" />
    <!-- 表-3 -->
    <div class="list">
      <!-- left -->
      <div>
        <tex class="list-text">今日收益</tex>
        <!-- 度数 -->
        <div class="left-data">
          <text class="left-text">￥0.06</text>
          <text class="left-unit"></text>
        </div>
      </div>
      <!-- right -->
      <div>
        <div class="list-style">
          <text>累计发电</text>
          <text>3712.43</text>
          <text>度</text>
        </div>
        <div class="list-style">
          <text>日均满发电</text>
          <text>0.00</text>
          <text>小时</text>
        </div>
      </div>
    </div>
    <div style="margin-top:15px;height:1px;background-color:#A5A5A5" />
    <!-- 曲线图部分 -->
  </div>

</template>
<style scoped>
.left-unit {
    margin-top: 15px;
    margin-left: 15px;
}
.list-text {
    font-size: 35px;
}
.round {
    justify-content: center;
    width: 250px;
    align-items: center;
    height: 250px;
    background-color: #ffffff;
    border-radius: 250px;
    border-style: solid;
    border-width: 3px;
    border-color: #e1e0e0;
}
.left-text {
    color: #0f88f9;
    font-size: 65px;
}
.left-data {
    flex-direction: row;
}
.list {
    margin-left: 30px;
    margin-right: 30px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
.warpper {
    background-color: #ffffff;
}
.list-style {
    flex-direction: row;
}
</style>
