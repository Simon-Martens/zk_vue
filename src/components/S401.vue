<template>
  <form v-on:submit.prevent="submitForm">
    <div class="row no-gutters unauthorized-box">
      <div class="col-5">
        Access after Authorization only.
      </div>
      <div class="col-3">
        <input
          class="form-control"
          id="exampleInputEmail1"
          placeholder="username"
          v-model="username"
        />
      </div>
      <div class="col-3">
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="password"
          v-model="password"
        />
      </div>
      <div class="col-1">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "S401",
  
  components: {},

  data() {
    return {
      username: "",
      password: "",
    };
  },

  // Alternative Setup & Config:
  // setup() {},
  // inheritAttrs: true,

  // Methods:
  computed: {},
  methods: {
    submitForm() {
      let c = { username: this.username, password: this.password };
      let m = "auth";
      this.$store.commit("post", { body: c, method: m });
      this.username = "";
      this.password = "";
    },
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
