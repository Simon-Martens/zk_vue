import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    authorized: false,
    server: 'localhost:8000/',
    axios_loading: false
  },
  mutations: {
    authorize () {
      this.state.authorized = true;
    },
    deauthorize() {
      this.state.authorized = false;
    },
    axios_load() {
      this.state.axios_loading = true;
    },
    axios_unload() {
      this.state.axios_loading = false;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
