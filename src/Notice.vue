<template>
<div class="warpper">
  <list>
    <cell v-for="item in lists" :key="item">
      <div class="panel">
        <div class="text-warpper">
          <text class="text1">{{item.title}}</text>
          <text class="text1">{{item.date}}</text>
        </div>
        <text class="text2">{{item.message}}</text>
      </div>
    </cell>
  </list>
</div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                {
                    title: "温度偏高",
                    date: "2018-06-06 10:41:25",
                    message: "逆变器22222222226，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-01-06 10:41:25",
                    message: "逆变器1111，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                },
                {
                    title: "温度偏高",
                    date: "2018-03-06 10:41:25",
                    message: "逆变器555555，所属电站特斯电站。。。"
                }
            ]
        };
    }
};
</script>

<style scoped>
.text2{
    font-size: 25px;
}
.text1{
    font-size: 35px;
}

.text-warpper {
    flex-direction: row;
    justify-content: space-between;
    
}
.panel {
    margin: 15px;
    border-width: 2px;
    border-color: #007ACC;
    padding: 15px;
    background-color: #ffffff;
}
</style>
