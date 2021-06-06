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
  data() {
    return {};
  },
  methods: {},
};
</script>
