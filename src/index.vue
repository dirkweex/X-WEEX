<template>
  <div>
  <!-- <Login/> -->
    <!--设置启动页 : 第一步，写下vue文件名，如<Login/> -->
  <Login/>
  <!-- <Register/> -->
  <!-- <Home/> -->
  <!-- <BottomTab/> -->
  </div>
</template>

<script>
// 第二步: 使用import xxx form "./activity/xxx.vue" 方式注入页面。

// import HelloWorld from "./components/HelloWorld.vue";
import Login from './activity/Login.vue'
// import Register from "./activity/Register.vue";
// import Home from "./activity/Home.vue";
// import BottomTab from './activity/BottomTab.vue'
export default {
  name: 'App',
  components: {
    // 第三步 ：写下页面名，并注释掉其他页面名。
    Login
    //    Register
    // Home
    // BottomTab
  }
}
</script>

<style scoped>
/* .wrapper {
    justify-content: center;
    align-items: center;
}
.logo {
    width: 424px;
    height: 200px;
}
.greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41b883;
}
.message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
} */
</style>
