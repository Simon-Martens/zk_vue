<template>
  <div class="row no-gutters heading">
    <div class="col-1 apptitle">
      <a href="/" v-on:click.prevent="link('/')">{{ title }}</a>
    </div>
    <div class="col float-right">
      <span v-if="$store.state.axios_loading"><div class="loadingDot state-wait">•</div>
        Loading</span>
      <span v-else>
        <span v-if="$store.state.s === 200">
        <div class="loadingDot state-ok">•</div>
        Ok
        </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  
  components: {},

  data() {
    return {};
  },

  // Alternative Setup & Config:
  // setup() {},
  // inheritAttrs: true,

  // Methods:
  computed: {},
  methods: {},
  props: {
    title: String,
    subtitle: String,
  },
  watch: {},
  emits: {},
  directives: {},

  // Extending and injecting:
  // mixins: [],
  // extends: string,
  // inject: [],
  // provide: [],

  // Hooks:
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  // beforeUnmount() {},
  // unmounted() {},
  // errorCaptured() {},
  // renderTracked() {},
  //renderTriggered() {}
};
</script>
<style scoped>
.apptitle a {
  color: black;
}

.apptitle a:hover {
  color: black;
}

.loadingDot {
  display: inline-block;
  font-weight: bold;
  color: #fff;
}

.state-ok {
  text-shadow: 0px 0px 1px green, 0px 0px 1px green, 0px 0px 7px green;
  color: green;
}

.state-wait {
  color: blue;
  text-shadow: 0px 0px 1px blue, 0px 0px 1px blue, 0px 0px 7px blue;
  animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 0.9s; /* don't forget to set a duration! */
  animation-iteration-count: infinite;
  animation-direction: reverse;
}

.float-right {
  margin-left: auto;
  margin-right: 0;
  float: right;
  text-align: right;
}

.heading {
  border-bottom: 2px solid black;
  padding: 0;
  padding-bottom: 0.3rem;
  font-family: Arial Black;
}
</style>
