<template>
  <div class="row no-gutters site-search-bar">
    <div class="col-7 site-search-bar-front">
      <div class="row no-gutters site-search-bar-icon-message">
        <div class="col-auto site-search-bar-icon">
          <div class="site-foldername" v-if="!isRoot">
             {{ d.url }}
          </div>
          〉
          </div>
        <div class="col site-search-bar-inputform">
          <form
            class="site-search-form"
            id="sform"
            name="sform"
            autocomplete="off"
            v-on:submit.prevent="submitForm"
          >
            <input
              class="site-search-input"
              type="text"
              id="fname"
              name="fname"
              v-model="command"
              v-focus
            />
          </form>
        </div>
      </div>
    </div>
    <div class="col-5 site-search-bar-back">
          <MDRender class="mdtext no-p" :md="message"/>
    </div>
  </div>
  <Listview :inner="d.inner"/>
</template>
<script>
import Listview from "./Listview.vue";
import MDRender from '../../MDRender.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: "Commandbar",

  components: {
    MDRender,
    Listview
  },

  data() {
    return {
      command: "",
      message: "",
      empty_message:
        "__Type__ to filter. __Enter__ to select. __Shift__ + __Enter__ to create.",
      search_message: "__Type__ to search.",
      deleted_message: "Showing deleted files.",
      found_message: " items found. __Enter__ and/or __arrowkeys__ to select.",
      wrong_start_char_message:
        "Only alphanumeric characters allowed at the beginning of a name.",
      wrong_end_char_message:
        "A name can't end with any of these characters: >, <, :.",
      wrong_char_message:
        "Forbidden/reserved characters include / and \\.",
    };
  },

  // Alternative Setup & Config:
  // setup() {},
  // inheritAttrs: true,

  // Methods:
  computed: {
    isRoot: function() {
      if (this.d.url === "./") return true;
      return false;
    },
    ...mapState([
      'd',
    ])
  },
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
  mounted() {
    this.message = this.empty_message;
    if (this.$store.state.last_site_data.component === "commandbar") {
      Object.assign(this.$data, this.$store.state.last_site_data.data);
    }
  },
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  beforeUnmount() {
    this.$store.commit("set_last_site_data", {
      component: "commandbar",
      data: this.$data,
    });
  },
  // unmounted() {},
  // errorCaptured() {},
  // renderTracked() {},
  // renderTriggered() {},

  directives: {
    focus: {
      // directive definition
      updated(el) {
        el.focus()
      }
    }
  }
};
</script>
<style scoped>
.disabled {
  pointer-events: none;
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
  line-height: 1rem;
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

.site-search-bar-back {
  border-left: 4px solid white;
  padding-left: 0.5rem !important;
  padding-top: 3px;
}

.site-search-bar-icon-message {
  border-radius: 7px;
  background-color: rgb(252, 244, 180);
}

.site-search-bar-front {
  background-color: rgb(252, 244, 180);
  padding-top: 3px;
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

.site-foldername {
  display: inline-block;
  font-weight: normal;
  font-size: 0.8rem;
  padding-right: 0.4rem;
}
</style>
