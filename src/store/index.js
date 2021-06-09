import { createStore } from "vuex";
import axios from "axios";
import { setTransitionHooks } from "@vue/runtime-core";

export default createStore({
  state: {
    firstget: true,
    server: "http://localhost:8000/api/",
    axios_loading: false,
    s: "401",
    d: {},

    editing: false,

    last_site_data: {},
  },
  mutations: {
    set_d(state, d) {
      state.d = d;
    },

    set_s(state, s) {
      state.s = s;
    },

    set_axios_loading(state, b) {
      state.axios_loading = b;
    },

    set_last_site_data(state, d) {
      state.last_site_data = d;
    },

    on_first_get(state) {
      state.firstget = false;
    },

    calculate_data_from_response() { 

    },
    
  },
  actions: {
    get: function({ state, commit }, url) {
      commit('set_axios_loading', true);

      axios({
        method: "get",
        url: state.server + url,
        responseType: "json",
        withCredentials: true,
        headers: { "XSRF-TOKEN": this.state.d.token },
      })
        .then((response) => {
          if (response.data.history && !(Object.keys(state.d).length === 0)) {
            history.pushState(response.data, "", "/" + response.data.url);
          }
          commit('set_d', response.data);
          commit('set_s', response.status);
          commit('calculate_data_from_response');
        })
        .catch((error) => {
          if (!(Object.keys(error.response.data).length === 0)) {
            commit('set_d', error.response.data);
            commit('set_s', error.response.status);
          }
          else {
            console.log(error);
          }
        })
        .finally(() => {
          commit('set_axios_loading', false);
          commit("on_first_get");
        });
    },

    post: function({state, commit}, j) {
      commit('set_axios_loading', true);

      axios({
        method: "post",
        url: state.server + window.location.pathname + '?' + j.method,
        responseType: "json",
        data: j.body,
        withCredentials: true,
        headers: { "XSRF-TOKEN": this.state.d.token },
      })
        .then((response) => {
          if (response.data.history && !(Object.keys(state.d).length === 0)) {
            history.pushState(response.data, "", response.data.url);
          }
          commit('set_d', response.data);
          commit('set_s', response.status);
          commit('calculate_data_from_response');
        })
        .catch((error) => {
          if (!(Object.keys(error.response.data).length === 0)) {
            commit('set_d', error.response.data);
            commit('set_s', error.response.status);
          }
          else {
            console.log(error);
          }
        })
        .finally(() => {
          commit('set_axios_loading', false);
          commit("on_first_get");
        });
    },

  },
  modules: {},
});
