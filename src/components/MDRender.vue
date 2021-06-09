<template>
    <div v-html="compiledmd"></div>
</template>
<script>
import DOMPurify from 'dompurify';
import marked from 'marked';

export default {
  name: "MDRender",

  components: {},

  data() {
    return {};
  },

  // Alternative Setup & Config:
  // setup() {},
  // inheritAttrs: true,

  // Methods:
  computed: {
    compiledmd: function() {
      return marked(this.md, { sanitize: true });
    }
  },
  methods: {},
  props: ['md'],
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