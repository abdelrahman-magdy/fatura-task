<template>
  <form @submit="handleSubmit" class="searchBar">
    <input
      class="searchBar__input"
      type="text"
      v-model="searchValue"
      @change="handleChange"
      name="search"
      placeholder="Search GIFS"
      autocomplete="off"
    />
    <button type="submit" class="searchBar__button">
      <span class="searchBar__button-icon">
        <svg id="search" viewBox="0 0 512 512">
          <path
            d="M507.5 469.3c0 10.5-3.8 19.5-11.5 27.2s-16.7 11.5-27.2 11.5c-10.9 0-20-3.8-27.2-11.5l-103.7-103.4c-36.1 25-76.3 37.5-120.6 37.5-28.8 0-56.4-5.6-82.7-16.8s-49-26.3-68-45.3-34.2-41.7-45.3-68c-11.2-26.3-16.8-53.9-16.8-82.7s5.6-56.4 16.8-82.7 26.3-49 45.3-68 41.7-34.2 68-45.3c26.3-11.2 53.9-16.8 82.7-16.8s56.4 5.6 82.7 16.8c26.3 11.2 49 26.3 68 45.3s34.2 41.7 45.3 68c11.2 26.3 16.8 53.9 16.8 82.7 0 44.3-12.5 84.5-37.5 120.6l103.7 103.7c7.5 7.5 11.2 16.5 11.2 27.2zm-154.8-251.5c0-37.3-13.2-69.2-39.8-95.7-26.5-26.5-58.4-39.8-95.7-39.8s-69.2 13.3-95.7 39.8-39.8 58.4-39.8 95.7 13.2 69.2 39.8 95.7c26.5 26.5 58.4 39.8 95.7 39.8s69.2-13.2 95.7-39.8c26.6-26.5 39.8-58.4 39.8-95.7z"
          ></path>
        </svg>
      </span>
      <span>Search</span>
    </button>
  </form>
</template>

<script>
// import axios from "axios";
import { serviceApi } from "../utilies/api.service";

const apikey = "E47ORNG4I93X";
const lmt = 8;

export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    handleChange(e) {
      this.$store.commit("setSearchVal", e.target.value);
      this.searchValue = "";
    },
    handleSubmit: async function (e) {
      e.preventDefault();

      this.$store.commit("pending", true);

      let response = await serviceApi.get("", {
        params: {
          q: this.$store.getters.searchInput,
          media_filter: "gif",
          key: apikey,
          limit: 16,
        },
      });

      this.$store.commit("setNewImagesData", response.data.results);

      // // let response = await serviceApi.get(
      // //   `${this.$store.getters.searchInput}"&media_filter=gif&key="${
      // //     apikey + "&limit=" + lmt
      // //   }`
      // // );

      // console.log(response);
      // // add images data to state
      // this.$store.commit("setNewImagesData", response.data.results);
    },
  },
};
</script>

<style lang="scss" scoped>
.searchBar {
  width: 100%;
  position: relative;
  margin-block-start: 10px;
  margin-block-end: 20px;
  height: 74px;
  font-size: 18px;
  &__input {
    width: 100%;
    height: 100%;
    padding: 10px 145px 10px 20px;
    border-radius: 8px;
    color: grey;
    border: none;
    box-shadow: #ccc 0 5px 16px;
    box-sizing: border-box;
    &:focus-visible {
      border: none;
      outline: none;
    }
  }
  &__button {
    background: #6ca12b;
    color: #fff;
    position: absolute;
    inset-inline-end: 15px;
    inset-block-start: 50%;
    transform: translateY(-50%);
    border-radius: 5px;
    width: 115px;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    &-icon {
      display: block;
      width: 16px;
      height: 16px;
      margin-inline-end: 8px;
      svg {
        fill: #fff;
      }
    }
  }
}
@media (max-width: 767px) {
  .searchBar {
    position: fixed;
    z-index: 99;
    width: calc(100% - 20px);
    inset-block-start: 10px;
    inset-inline-start: 0;
    margin-block-start: 0;
    margin-inline-start: 10px;
  }
}
</style>
