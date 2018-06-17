/**
 * Created by Tw93 on 2016/11/4.
 */
//  :src="getUrl('login_bg.png')" 
import mixin from "./mixins/mixin.js";
export default {

  // 正常模式的tab title配置
  tabTitles: [
    {
      title: '主页',
      icon: mixin.methods.getUrl('home_normal.png'),
      activeIcon: mixin.methods.getUrl('home_select.png')
    },
    {
      title: '消息',
      icon: mixin.methods.getUrl('message_normal.png'),
      activeIcon: mixin.methods.getUrl('message_select.png')
    },
    {
      title: '设置',
      icon: mixin.methods.getUrl('setting_normal.png'),
      activeIcon: mixin.methods.getUrl('setting_select.png'),
      //设置类似于QQ聊天界面右上角显示消息的数量
      // badge: 5
      //   },
      //   {
      //     title: '我的主页',
      //     icon: 'https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png',
      //     activeIcon: 'https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png',
      //     dot: true
    }
  ],
  tabStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#3D3D3D',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    iconWidth: 50,
    iconHeight: 50,
    // width: 160,
    // height: 120,

    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10
    // },

    // // 使用 iconFont 模式的tab title配置
    // tabIconFontTitles: [
    //   {
    //     title: '首页',
    //     codePoint: '\ue623'
    //   },
    //   {
    //     title: '特别推荐',
    //     codePoint: '\ue608'
    //   },
    //   {
    //     title: '消息中心',
    //     codePoint: '\ue752',
    //     badge: 5
    //   },
    //   {
    //     title: '我的主页',
    //     codePoint: '\ue601',
    //     dot: true
    //   }
    // ],
    // tabIconFontStyles: {
    //   bgColor: '#FFFFFF',
    //   titleColor: '#666666',
    //   activeTitleColor: '#3D3D3D',
    //   activeBgColor: '#FFFFFF',
    //   isActiveTitleBold: true,
    //   width: 160,
    //   height: 120,
    //   fontSize: 24,
    //   textPaddingLeft: 10,
    //   textPaddingRight: 10,
    //   iconFontSize: 50,
    //   iconFontMarginBottom: 8,
    //   iconFontColor: '#333333',
    //   activeIconFontColor: 'red',
    //   iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
  }
}