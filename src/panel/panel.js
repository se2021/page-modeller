import Vue from 'vue/dist/vue.runtime.esm';
import vuetify from '../plugins/vuetify';
import App from './App';

import 'vuetify/dist/vuetify.min.css';
import './panel.scss';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
