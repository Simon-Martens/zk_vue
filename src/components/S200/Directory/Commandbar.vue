<template>
<div class="row no-gutters site-search-bar">
                <div class="col-7 ">
                    <div class="row no-gutters site-search-bar-icon-message">
                        <div class="col-auto site-search-bar-icon">
                            〉
                        </div>
                        <div class="col site-search-bar-inputform">
                            <form class="site-search-form" id="sform" name="sform" autocomplete="off" v-on:submit.prevent="submitForm">
                                <input class="site-search-input" type="text" id="fname" name="fname" v-model="command" v-focus>
                              </form> 
                        </div>
                    </div>
                    
                </div>
                <div class="col-5 site-search-bar-message">
                    <a class="" href="greet" v-on:click.prevent="hello('first/note.md')">{{ message }}</a>
                </div>
            </div>
</template>
<script>
export default {
  name: "Commandbar",
  
  components: {},

  data() {
    return {
      command: "",
      message: "",
      empty_message: "Type to filter. Enter to select. Shift + Enter to create.",
      search_message: "Type to search.",
      deleted_message: "Showing deleted files.",
      found_message: " items found. Enter and/or arrowkeys to select.",
      wrong_start_char_message: "Only alphanumeric characters allowed at the beginning of a name.",
      wrong_char_message: "Forbidden characters include ', \", /, , *, ?, |, <, >, |, :",
    };
  },

  // Alternative Setup & Config:
  // setup() {},
  // inheritAttrs: true,

  // Methods:
  computed: {},
  methods: {
    intlink: function (event) {
      if (event) {
        event.preventDefault()
        event.returnValue = ""
      }
    },
    hello: function(e) {
      this.$store.commit("get", e)
    }
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
  mounted() {
    this.message = this.empty_message;
    if (this.$store.state.last_site_data.component === 'commandbar') {
      Object.assign(this.$data, this.$tore.state.last_site_data.data);
    }
  },
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  beforeUnmount() {
    this.$store.commit("set_last_site_data", { component: 'commandbar', data: this.$data })
  },
  // unmounted() {},
  // errorCaptured() {},
  // renderTracked() {},
  // renderTriggered() {}

  directives: {
    focus: {
      // directive definition
      mounted(el) {
        el.focus()
      }
    }
  }
};
</script>
<style scoped>
.disabled{
    pointer-events:none
}

.site-float-right {
    margin-left: auto;
    margin-right: 0;
    float: right;
    text-align: right;
}

.site-search-bar {
    margin-left: -0.3rem;
    margin-right: -0.3rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    background-color: cornsilk;
    border-radius: 7px;
    
}

.site-search-bar-icon {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
    font-weight: 900;
}

.site-search-bar-inputform,
.site-search-bar-icon {
    background-color: transparent;
}

.site-search-bar-message {
    border-left: 4px solid white;
    padding-left: 0.5rem !important;
}

.site-search-bar-icon-message {
    border-radius: 7px;
    background-color: rgb(252, 244, 180);
}

form.site-search-form {
    margin: 0;
    padding: 0;
}

form.site-search-form input.site-search-input {
    background-color: transparent;
    border: none;
    border-radius: 7px;
    padding-left: 3px;
    width: 100%;
    -webkit-appearance: none;
    outline: none;
}
</style>
