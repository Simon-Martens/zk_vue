<template>
  <div class="container-sm site-container">
    <Header title="zk" subtitle=""/>
      <div class="spinner-mid" v-if="$store.state.axios_loading">
        <div class="d-flex align-items-center">
          <div class="spinner-border" role="status">
          <span class="visually-hidden"></span>
          </div>
          </div>
      </div>
      <div v-else>
        <Authorized v-if="$store.state.authorized"/>
        <Authorize v-else/>
      </div>
  </div>
</template>

<script>
import Authorize from './components/Authorize.vue'
import Header from './components/Header.vue'
import Authorized from './components/Authorized.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Authorize,
    Authorized
  },
  data () {

  },
  beforeCreate() {
    this.$store.commit("axios_load");
    axios({
        method: 'get',
        url: '/api' + window.location.pathname,
        responseType: 'json'
      })
      .then(() => {
          this.$store.commit('authorize');
      })
      .catch((error) => {
          console.log(error);
          this.$store.commit('deauthorize');
      }).finally(() => {
        console.log(this.$store.state.authorized);
        this.$store.commit("axios_unload");
      });
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import './scss/site.scss';

@media (min-width:768px) {
    .site-container {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
}

@media (max-width:768px) {
    .site-container {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

</style>

<!--
Konzept:
<template>
<header>...</header>
<div v-if="authorized">
  <div v-if="lalala">..(Components) </div> -> Views
  <div v-if="lilili">..(Components) </div>
</div>
<div v-if="unauthorized">
  ...
</div>
<footer></footer>
</template>
-->
