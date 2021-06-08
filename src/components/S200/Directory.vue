<template>
  <div class="directoryview">
    <Commandbar />
    <Listview />
  </div>
</template>
<script>
import Commandbar from "./Directory/Commandbar.vue";
import Listview from "./Directory/Listview.vue";

export default {
  name: "Directory",

  components: {
    Commandbar,
    Listview,
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
