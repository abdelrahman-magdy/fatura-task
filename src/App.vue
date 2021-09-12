<template>
  <div class="container" ref="app">
    <div class="row">
      <Search />
      <SkeletonGrid v-if="this.$store.getters.loading" />
      <Grid v-else />
    </div>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
// import { Header } from "./components";

// // test search term
// var search_term = "cat"; //excited
// // using default locale of en_US
// var search_url = search_term + "&key=" + apikey + "&limit=" + lmt;

import SkeletonGrid from "./components/SkeletonGrid.vue";
import Search from "./components/Search.vue";
import Grid from "./components/Grid.vue";
// import axios from "axios";
import { serviceApi } from "./utilies/api.service";

var apikey = "E47ORNG4I93X";
var lmt = 8;

export default {
  name: "App",
  components: {
    Search,
    Grid,
    SkeletonGrid,
  },
  data() {
    return {
      data: [],
      pos: 16,
    };
  },
  methods: {
    async handleScroll(e) {
      let element = this.$refs.app;
      if (element.getBoundingClientRect().bottom - 200 < window.innerHeight) {
        console.log(
          "scrolled",
          element.getBoundingClientRect().bottom,
          window.innerHeight
        );
        console.log(this.$store.getters.searchInput);

        let response = await serviceApi.get("", {
          params: {
            q: this.$store.getters.searchInput,
            media_filter: "gif",
            key: apikey,
            limit: 16,
            pos: this.pos,
          },
        });
        console.log("response.data.next", response.data);
        this.pos = response.data.next;
        this.$store.commit("addImagesData", response.data.results);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
@import "./assets/styles/_global.scss";
body {
  background: #ebedf4;
  font-family: sans-serif;
}
@media (max-width: 767px) {
  body {
    padding-block-start: 104px;
  }
}
</style>
