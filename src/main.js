import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 引入ElementUI样式

Vue.use(ElementUI); // 全局注册ElementUI组件

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
