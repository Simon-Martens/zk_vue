import { createStore } from 'vuex'
import axios from 'axios'
import { setTransitionHooks } from '@vue/runtime-core';

export default createStore({
  state: {
    authorized: false,
    server: 'http://localhost:8000/api',
    axios_loading: false,
    d: {}
  },
  mutations: {

    get_data_for_url(state) {
      state.axios_loading = true;

      axios({
        method: 'get', // TODO: prevent CSRF
        url: state.server + window.location.pathname,
        responseType: 'json',
        withCredentials: true,
        headers: {'XSRF-TOKEN': this.state.d.token},
      })
      .then((response) => {
          state.authorized = true;
          state.d = response.data;
          if (response.data.history) {
            history.pushState(response.data, "", response.data.url);
            // this.commit('get_data_for_url');
          }
      })
      .catch((error) => {
          console.log(error);
          state.authorized = false;
      }).finally(() => {
        console.log(state.authorized);
        state.axios_loading = false;
      });
    },


    authorize(state, credentials) {
      state.axios_loading = true;
      console.log(credentials);
      axios({
        method: 'post',
        url: state.server + window.location.pathname,
        responseType: 'json',
        data: credentials,
        withCredentials: true
      })
          .then((response) => {
              state.authorized = true;
              state.d = response.data;
              if (response.data.history) {
                history.pushState(response.data, "", response.data.url);
                // this.commit('get_data_for_url');
              }
              this.commit("get_data_for_url");
          })
          .catch((error) => {
              console.log(error);
              state.authorized = false;
          }).finally(() => {
              console.log(state.authorized);
              state.axios_loading = false;
          });
      }
  },
  actions: {
  },
  modules: {
  }
})
