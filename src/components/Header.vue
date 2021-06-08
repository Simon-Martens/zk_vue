<template>
  <div class="row no-gutters heading">
    <div class="col-1">
      {{ title }}
    </div>
    <div class="col float-right">
      <span v-if="$store.state.axios_loading"
        ><div class="loadingDot">·</div>
        Loading</span
      >
      <span v-else>{{ $store.state.d.appstate.time }}</span>
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
.loadingDot {
  display: inline-block;
  animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 0.9s; /* don't forget to set a duration! */
  animation-iteration-count: infinite;
  animation-direction: reverse;
  font-weight: bolder;
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
