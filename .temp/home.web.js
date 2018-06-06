import Vue from 'vue'
import weex from 'weex-vue-render'

weex.init(Vue)

import foo from './src/foo.vue'
import router from './src/Router.js'

foo.el='#root'

foo.router = router

export default new Vue(foo);

router.push('me')

const App = require('..\\src\\home.vue');
new Vue(Vue.util.extend({el: '#root'}, App));
