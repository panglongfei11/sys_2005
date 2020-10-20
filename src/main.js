import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
 
// 引入公共样式
import "./assets/styles/base.css"
import "./assets/styles/el-reset.css"

// 引入完整的 Element。
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//按需加载
// import { Carousel,CarouselItem} from 'element-ui';
// Vue.use(Carousel);
// Vue.use(CarouselItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
