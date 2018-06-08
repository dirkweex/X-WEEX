<template>
  <div class="hemo-wrapper">
    <!-- 我的电站 -->
    <div class="toobar">
      <div class="title">
        <text class="title-text">我的电站</text>
      </div>
      <image class="toobar-rightimage" src="/web/assets/img/add.png" />
    </div>
    <!-- 今日发电和今日总收益 -->
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

    <!-- 分割线 -->
    <div style="height:20px;margin:30px;background-color:#EEEEEE" />

    <!-- 收益曲线图之3个按钮 -->
    <div class="button-warpper">
      <button class="button">功率</button>
      <button class="button">发电量</button>
      <button class="button">收益</button>
    </div>

    <!-- 收益曲线图之曲线图 -->

    <!-- 收益曲线图之年月日 -->
    <div class="button-warpper2">
      <button class="button2">日</button>
      <button class="button3">月</button>
      <button class="button3">年</button>
      <button class="button3">总</button>
      <image class="year-img" src="/web/assets/img/calendar.png" />
    </div>

    <!-- 分割线 -->
    <div style="height:20px;margin:30px;background-color:#EEEEEE"></div>

    <div>
      <list @loadmore="fetch" loadmoreoffset="10">
        <cell v-for="news in lists" :key="news">
          <div class="panel">
            <text class="text">{{news.newsTitle}}</text>
            <text class="text">{{news.newsContent}}</text>
          </div>
        </cell>
      </list>
    </div>
  </div>

</template>

<script>
const modal = weex.requireModule("modal");
const stream = weex.requireModule("stream");
export default {
  data() {
    return {
      lists: []
    };
  },
  created() {
    let url = "http://www.jspang.com/DemoApi/newsApi.php";
    this.getNews(url, res => {
      modal.toast({ message: "请求成功！", duration: 1 });
      this.lists = res.data;
      console.log(res.data);
    });
  },
  methods: {
    getNews(url, callback) {
      return stream.fetch(
        {
          method: "GET",
          type: "json",
          Url: url
        },
        callback
      );
    }
    // fetch(event) {
    //     modal.toast({
    //         meassger: "loadmore",
    //         duration: 1
    //     });
    //     setTimeout(() => {
    //         const length = this.lists.length;
    //         for (let i = length; i < length + 4; i++) {
    //             this.lists.push(i + 1);
    //         }
    //     }, 800);
    // }
  }
};
</script>


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
.rightData {
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
.du-color {
  font-size: 25px;
  color: #9f9f9f;
  margin-top: 10px;
  margin-bottom: 10px;
}
.du-color2 {
  color: #555555;
  font-size: 30px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 8px;
}
.button-warpper {
  /* margin-top: 10px; */
  flex-direction: row;
  justify-content: space-around;
}
.button-warpper2 {
  flex-direction: row;
  /* justify-content: space-around; */
  margin-top: 30px;
}
.button {
  font-size: 30px;
  width: 200px;
  text-align: center;
  padding: 15px;
  border-width: 2px;
  border-style: solid;
  color: #ffffff;
  border-color: #ffffff;
  background-color: #3fa2f9;
  border-radius: 50px;
}
.button2 {
  margin-left: 30px;
  font-size: 30px;
  width: 90px;
  height: 90px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  color: #ffffff;
  border-color: #ffffff;
  background-color: #31d7fe;
  border-radius: 100px;
}
.button3 {
  margin-left: 60px;
  font-size: 30px;
  width: 90px;
  height: 90px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  color: #ffffff;
  border-color: #ffffff;
  background-color: #31d7fe;
  border-radius: 100px;
}
.year-img {
  margin-top: 15px;
  margin-left: 60px;
  width: 60px;
  height: 60px;
}
.panel {
  width: 600px;
  height: 250px;
  margin-left: 50px;
  margin-top: 35px;
  margin-bottom: 35px;
  /* flex-direction: column; */
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
.text {
  font-size: 36px;
  text-align: center;
  color: #41b883;
}
</style>
