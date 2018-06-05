<template>

    <div class="login-bg">
        <image :style="imageStyle" src="./src/img/login_bg.jpg" />

        <div class="login-wrapper">

            <image class="logo" src="./src/img/logo.jpg" />
            <text class="title-text">玩Android</text>
            <input class="input" v-model="userNumber" type="text" @change="changeUserNumber" placeholder="用户名" autofocus="true" value="" />
            <div style="width:500px;height:1px;background-color:rgb(235, 223, 223)" />
            <input class="input" v-model="userPassword" type="password" @change="changeUserPassword" placeholder="密码" value="" />
            <div style="width:500px;height:1px;background-color:rgb(235, 223, 223)" />
            <text class="button" @click="login">登录</text>
            <text class="button" @click="register">注册</text>

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
export default {
    data() {
        return {
            userNumber: "",
            userPassword: "",
            imageStyle: {
                position: "absolute",
                width: "750px",
                height:
                    weex.config.env.deviceHeight *
                        750 /
                        weex.config.env.deviceWidth +
                    "px"
            }
        };
    },
    methods: {
        changeUserNumber: function(event) {
            this.userNumber = event.value;
        },
        changeUserPassword: function(event) {
            this.userPassword = event.value;
        },
        //登录
        login: function() {
            if (this.userNumber.length < 1) {
                modal.toast({
                    message: "请输入手机号。"
                });
                return;
            } else if (this.userPassword.length < 1) {
                modal.toast({
                    message: "请输入密码"
                });
                return;
            } else if (
                this.userNumber == "weihao" &&
                this.userPassword == "123"
            ) {
                modal.toast({ message: "登录成功" });
                return;
            } else {
                modal.toast({ message: "用户名或密码不正确，请重新输入！" });
            }
        },
        //注册
        register: function() {
            modal.toast({
                message: "Hello，注册暂时未开发，后续我会进行完善。"
            });
            // navigator.push({
            //     url: "http://192.168.12.75:8081/dist/Register.js"
            // });
        }

        // //找回密码
        // fingPassword: function() {
        //     modal.toast({
        //         message: "Hello，找回密码暂时未开发，后续我们会进行完善。"
        //     });
        // },
    }
};
</script>


<style scoped >
.login-bg {
    flex: 1;
}
.login-wrapper {
    justify-content: center;
    align-items: center;
    margin-top: 180px;
}
.logo {
    width: 600px;
    height: 300px;
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
    font-size: 50px;
    width: 500px;
    text-align: center;
    padding: 15px;
    border-width: 2px;
    border-style: solid;
    color: green;
    border-color: #ffffff;
    background-color: #fff;
    border-radius: 50px;
    margin-top: 40px;
}
.input {
    font-size: 35px;
    height: 80x;
    width: 550px;
    padding-left: 90px;
    color: #fff;
    placeholder-color:rgb(235, 223, 223);
    padding-top: 50px;
    margin-bottom: 15px;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
}
.input-img {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 50px;
    height: 50px;
}

</style>
