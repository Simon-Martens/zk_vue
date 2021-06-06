<template>
  <div class="container-sm site-container" v-if="!$store.state.firstget">
    <Header title="zk" subtitle="" />
    <component v-bind:is="'S' + $store.state.s"></component>
  </div>
</template>

<script>
import S401 from "./components/S401.vue";
import Header from "./components/Header.vue";
import S200 from "./components/S200.vue";
import S404 from "./components/S404.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    S200,
    S401,
    S404,
  },
  data() {},
  beforeCreate() {
    this.$store.commit("get_data_for_url");
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./scss/site.scss";

@media (min-width: 768px) {
  .site-container {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

@media (max-width: 768px) {
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
