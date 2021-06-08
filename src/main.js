import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'


var h = createApp(App).use(store).use(VueAxios, axios);
h.mount('#app');
