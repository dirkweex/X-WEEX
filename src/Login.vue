<template>
  <div class="login-bg">
    <image :style="imageStyle" :src="getUrl('login_bg.png')" />
    <div class="login-warpper">
      <image class="logo" src="local:///logo_login" />
      <text class="title-text">登录</text>
      <input class="input" v-model="userNumber" type="text" @change="changeUserNumber" placeholder="用户名、手机号或邮箱" autofocus="false" value="" />
      <div style="width:500px;height:1px;background-color:rgb(235, 223, 223)" />
      <input class="input" v-model="userPassword" type="password" @change="changeUserPassword" placeholder="密码(至少8位)" value="" />
      <div style="width:500px;height:1px;background-color:rgb(235, 223, 223)" />
      <div class="remember-warpper">
        <image class="remember-img" @click="remember" src="local:///select1_select" />
        <text class="remember-text">记住我</text>
        <text class="forget-text" @click="forget">忘记密码？</text>
      </div>
      <text class="button" @click="login">登录</text>
      <text class="button" @click="register">注册</text>
      <div class="chat-warpper">
        <div class="chat-line" style="width:120px;height:1px;background-color:#A4D3FC" />
        <text class="chat-text">社交账号登录</text>
        <div class="chat-line" style="width:120px;height:1px;background-color:#A4D3FC" />
      </div>
      <div class="chat-warpper">
        <image class="chat-img" @click="wechat" src="local:///wechat" />
        <image class="chat-img" @click="qq" src="local:///qq" />
        <image class="chat-img" @click="weibo" src="local:///weibo" />
      </div>
    </div>
    <!-- <div class="input-wrapper">
                        <text class="input-forget" onclick="findPassword">找回密码</text>
                        <text class="input-register" onclick="register">立即注册</text>
                    </div> -->
  </div>
</template>
<script>
const modal = weex.requireModule("modal");
const navigator = weex.requireModule("navigator");
import mixin from "./mixins/mixin.js"
export default {
  data() {
    return {
      userNumber: "",
      userPassword: "",
      imageStyle: {
        position: "absolute",
        width: "750px",
        height:
          weex.config.env.deviceHeight * 750 / weex.config.env.deviceWidth +
          "px"
      }
    };
  },
  mixins: [mixin],
  methods: {
    changeUserNumber: function(event) {
      this.userNumber = event.value;
    },
    changeUserPassword: function(event) {
      this.userPassword = event.value;
    },
    // 记住我
    remember: function() {
      modal.toast({
        message: "记住我！"
      });
    },
    forget: function() {
      modal.toast({
        message: "忘记密码！"
      });
    },
    // 登录
    login: function() {
      if (this.userNumber.length < 1) {
        modal.toast({
          message: "请输入手机号。"
        });
      } else if (this.userPassword.length < 1) {
        modal.toast({
          message: "请输入密码。"
        });
      } else if (this.userNumber === "weihao" && this.userPassword === "123") {
        // modal.toast({ message: '登录成功' })
        console.log("will jupm");
        navigator.push(
          {
            url: "http://192.168.12.75:8081/BottomTab.html",
            animated: "true"
          },
          event => {
            modal.toast({
              message: "callback:" + event
            });
          }
        );
      } else if (this.userNumber === "add" && this.userPassword === "123") {
        // modal.toast({ message: '登录成功' })
        console.log("will jupm");
        navigator.push({
            url: "http://192.168.12.75:8081/NewBuild.html",
            animated: "true"
          },
          event => {
            modal.toast({
              message: "callback:" + event
            });
          }
        );
      }else {
        modal.toast({ message: "用户名或密码不正确，请重新输入！" });
      }
    },
    // 注册
    // register: function () {
    //   modal.toast({
    //     message: 'Hello，注册暂时未开发，后续我会进行完善。'
    //       // navigator:push({url:this.getJumpBaseUrl('Register')})
    //   })
    //   // navigator.push({
    //   //     url: "http://192.168.12.75:8081/dist/Register.js"
    //   // })
    // },

    register: function(event) {
      console.log("will jupm");
      navigator.push(
        {
          // url: "http://192.168.0.101:8083/Register.html",
          // url:"./platforms/android/app/src/main/assets/dist/Register.js",
          url:"file://assets/dist/Register.js",
          animated: "true"
        },
        event => {
          modal.toast({
            message: "callback:" + event
          });
        }
      );
    },
    wechat: function() {
      modal.toast({
        message: "微信登录！"
      });
    },
    qq: function() {
      modal.toast({
        message: "QQ登录！"
      });
    },
    weibo: function() {
      modal.toast({
        message: "微博登录！"
      });
    }
  }
};
</script>
<style scoped >
.login-bg {
  flex: 1;
}
.login-warpper {
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.logo {
  width: 160px;
  height: 160px;
}
.title-text {
  height: 80px;
  width: 550px;
  text-align: center;
  color: rgb(235, 223, 223);
  margin-top: 35px;
  font-size: 55px;
}
.button {
  font-size: 35px;
  width: 500px;
  text-align: center;
  padding: 15px;
  border-width: 2px;
  border-style: solid;
  color: #3fa2f9;
  border-color: #ffffff;
  background-color: #ffffff;
  border-radius: 50px;
  margin-top: 50px;
}
.input {
  font-size: 35px;

  width: 550px;
  padding-left: 50px;
  color: #000000;
  placeholder-color: #a4d3fc;
  padding-top: 50px;

  background-color: rgba(0, 0, 0, 0);
  /* outline: none; */
}
.input-img {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 50px;
  height: 50px;
}
.remember-warpper {
  flex-direction: row;
  /* justify-content: flex-start; */
  top: 20px;
  margin: 10px;
}
.remember-img {
  margin-top: 2px;
  width: 35px;
  height: 35px;
}
.remember-text {
  margin-left: 10px;
  color: #a4d3fc;
  font-size: 27px;
}
.forget-text {
  margin-left: 200px;
  color: #a4d3fc;
  font-size: 27px;
}
.chat-warpper {
  flex-direction: row;
  justify-content: space-between;
  top: 80px;
}
.chat-text {
  margin-left: 35px;
  margin-right: 35px;
  color: #a4d3fc;
  font-size: 25px;
}
.chat-line {
  margin-top: 15px;
}
.chat-img {

  width: 60px;
  height: 60px;
}
</style> 