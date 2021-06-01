<template>
<form v-on:submit.prevent="submitForm">
<div class="row no-gutters unauthorized-box">
<div class="col-5">
Access after Authorization only.
</div>
<div class="col-3">
<input class="form-control" id="exampleInputEmail1" placeholder="username" v-model="username">
</div>
<div class="col-3">
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="password" v-model="password">
</div>
<div class="col-1">
<button type="submit" class="btn btn-primary">Submit</button>
</div>
</div>
</form>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      server: this.$store.state.server,
      username: "",
      password: ""
    }
  },
  methods: {
    submitForm() {
      let data = { username: this.username, password: this.password };
      this.$store.commit("axios_load");
      axios({
        method: 'post',
        url: '/api' + window.location.pathname,
        responseType: 'json',
        data: data
      })
          .then(() => {
              this.$store.commit('authorize');
          })
          .catch((error) => {
              console.log(error);
              if (error.response.status == 403) {
                this.$store.commit('deauthorize');
              }
          }).finally(() => {
            console.log(this.$store.state.authorized);
            this.$store.commit("axios_unload");
          });
      }
  }
};
</script>