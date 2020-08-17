import axios from 'axios';
import VueAxios from 'vue-axios';
import './bus';
import Lightbox from 'vue-easy-lightbox'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import { ValidationProvider, extend, localize } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.component('calendar', Calendar);
Vue.component('date-picker', DatePicker);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('VueEasyLightbox', Lightbox);
localize('zh_TW', zhTW);


Vue.use(VueAxios, axios);
Vue.use(Lightbox);
Vue.config.productionTip = false;

extend('required', {
  ...required,
  message: '必須輸入資料',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
