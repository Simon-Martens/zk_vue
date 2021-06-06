<template>
  Hallo
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
};
</script>
