<<template>
    <div class="wrapper">
    <div class="register">
    
        <div class="toobar">

    <image class="toobar-leftimage" src="./src/img/arrow_left.png"/>
     <div class="title">
     <text class="title-text">注册</text>
     </div>       
            </div>
        </div>
    <input v-model="userName" type="text" class="input" @change="changeUserName" placeholder="用户名(英文、数字和_)" autofocus="true" value=""/>
     <div style="height:1px;background-color:#000" />
    <input v-model="phoneNumber" type="tel" class="input" @change="changePhoneNumber" placeholder="手机号" autofocus="true" value="">
     <div style="height:1px;background-color:#000" />
    <input v-model="Email" type="email" class="input" @change="changeEmail" placeholder="邮箱" autofocus="true" value="">
   <div style="height:1px;background-color:#000" />
    <input v-model="UserPassword" type="password" class="input" @change="changeUserPassword" placeholder="密码(至少8位)" autofocus="true" value="">
  <div style="height:1px;background-color:#000" />
    <input v-model="ConfirmPassword" type="password" class="input" @change="changeConfirmPassword" placeholder="确认密码"  autofocus="true" value="">
    <div style="height:1px;background-color:#000" />
    <input v-model="IdentifyingCode" type="text" class="input" @change="changeIdentifyingCode" placeholder="验证码" autofocus="true" value="">
   <div style="height:1px;background-color:#000" />  

       <text class="button" @click="login">注册</text>
    </div>

    
    </div>
</template>
<style scoped >
.wrapper {
    /* background-image: linear-gradient(to bottom, #f35bb6, #7b79f9); */
    background-color: #ffffff;
    flex: 1;
}
.toobar {
    /* 垂直居中 */
    justify-content: center;
    /* align-items: center; */
    background-color: dodgerblue;
    height: 100px;
}
.title {
    /* 水平居中 */
    align-items: center;
}
.title-text {
    font-size: 35px;
    color: #ffffff;
}
.toobar-leftimage {
    position: absolute;
    width: 35px;
    height: 35px;
}
.input {
    font-size: 35px;
    height: 80x;
    width: 550px;
    padding-left: 90px;
    color: #fff;
    padding-top: 35px;
    placeholder-color: #000;
    margin-bottom: 35px;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
}
.button {
    font-size: 45px;
    text-align: center;
    padding: 15px;
    margin: 10px;
    border-width: 2px;
    border-style: solid;
    color: #fff;
    border-color: #ffffff;
    background-color: dodgerblue;
    border-radius: 10px;
    margin-top: 40px;
}
</style>
