<template>
<a :href="dir.url" v-on:click.prevent="link(dir.url)">
<div class="directory row no-gutters">
  <div class="col-4">
    {{ dir.name }}
    </div>
  </div>
</a>
</template>
<script>
export default {
  name: "Listitemdirectory",

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
  props: [
    'dir'
  ],
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
</style>
