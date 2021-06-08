<template>
  <component v-bind:is="$store.state.d.datatype"></component>
</template>
<script>
import Directory from "./S200/Directory.vue";
import MD from "./S200/MD.vue";

export default {
  name: "S200",
  
  components: {
    Directory,
    MD,
  },

  data() {
    return {};
  },

  // Alternative Setup & Config:
  // setup() {},
  // inheritAttrs: true,

  // Methods:
  computed: {},
  methods: {},
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
