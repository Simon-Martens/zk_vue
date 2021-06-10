<template>
  <div class="list">
      <Listitemdirectory
        v-for="dir in dirs"
        :dir="dir"
        :key="dir.name"
      ></Listitemdirectory>
  </div>
</template>
<script>
import Listitemdirectory from "./Listitemdirectory.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Listview",

  components: {
    Listitemdirectory,
  },

  data() {
    return {};
  },

  // Alternative Setup & Config:
  // setup() {},
  // inheritAttrs: true,

  // Methods:
  computed: {
    dirs: function() {
      return this.inner.dirs;
    },
  },
  methods: {},
  props: ["inner"],
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
<style>

</style>
