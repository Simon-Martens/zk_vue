<template>
  <form v-on:submit.prevent="submitForm">
    <div class="row no-gutters unauthorized-box">
      <div class="col">
        Path not found.
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "S404",
  components: {},

  data() {
    return {};
  },

  // Alternative Setup & Config
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
