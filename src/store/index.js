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
    set_last_site_data(state, d) {
      state.last_site_data = d;
    },

    get(state, url) {
      state.axios_loading = true;

      axios({
        method: "get",
        url: state.server + url,
        responseType: "json",
        withCredentials: true,
        headers: { "XSRF-TOKEN": this.state.d.token },
      })
        .then((response) => {
          if (response.data.history && !(Object.keys(state.d).length === 0) ) {
            history.pushState(response.data, "", "/" + response.data.url);
          }
          state.d = response.data;
          state.s = response.status;
        })
        .catch((error) => {
          state.d = error.response.data;
          state.s = error.response.status;
        })
        .finally(() => {
          state.axios_loading = false;
          state.firstget = false;
        });
    },

    post(state, j) {
      state.axios_loading = true;
      axios({
        method: "post",
        url: state.server + window.location.pathname + '?' + j.method,
        responseType: "json",
        data: j.body,
        withCredentials: true,
        headers: { "XSRF-TOKEN": this.state.d.token },
      })
        .then((response) => {
          if (response.data.history && !(Object.keys(state.d).length === 0) ) {
            history.pushState(response.data, "", response.data.url);
          }
          state.d = response.data;
          state.s = response.status;
        })
        .catch((error) => {
          state.s = error.response.status;
          state.d = error.response.data;
        })
        .finally(() => {
          state.axios_loading = false;
          state.firstget = false;
        });
    },
  },
  actions: {},
  modules: {},
});
