<template>
  <div class="container-sm site-container" v-if="!firstget">
    <Header title="zk" subtitle="" />
    <div>
      <component v-bind:is="scode"></component>
    </div>
  </div>
</template>

<script>
import S401 from "./components/S401.vue";
import Header from "./components/Header.vue";
import S200 from "./components/S200.vue";
import S404 from "./components/S404.vue";
import { mapActions, mapState } from 'vuex';

export default {
  name: "App",

  components: {
    Header,
    S200,
    S401,
    S404,
  },

  data() {
    return {}
  },

  // Alternative Setup & Config
  // setup() {},
  // inheritAttrs: true,

  // Methods:
  computed: {
    scode: function() {
      return 'S' + this.s;
    },
    ...mapState(['firstget', 's']),
  },
  methods: {
    preventNav: function(event) {  // TODO This does not work
      if (!this.$store.state.editing) return
      confirm("By reloading this you might lose some changes.")
      event.returnValue = ""
    },
    ...mapActions([
      'post',
      'get'
    ]),
  },
  props: {},
  watch: {},
  emits: {},
  directives: {},

  // Extending and injecting:
  // mixins: [],
  // extends: string,
  // inject: [],
  // provide: [],

  // Hooks:
  // beforeCreate() { },
  // created() {},
  // beforeMount() {},
  mounted() {
    this.get(window.location.pathname);
    window.addEventListener("beforeunload", this.preventNav);
    window.addEventListener('popstate', (event) => {
      this.$store.commit("set_d", event.state);
      this.$store.commit("set_s", 200);
      this.$store.commit('calculate_data_from_response');
    });
  },
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.preventNav);
  },
  // unmounted() {},
  // errorCaptured() {},
  // renderTracked() {},
  // renderTriggered() {}
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
