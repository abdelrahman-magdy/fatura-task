<template>
  <div class="container">
    <form @submit="onSubmit" class="searchBar">
      <input
        class="searchBar__input"
        type="text"
        v-model="text"
        name="text"
        placeholder="search ..."
      />
      <button class="searchBar__button">
        <span class="searchBar__button-icon">
          <svg id="search" viewBox="0 0 512 512">
            <path
              d="M507.5 469.3c0 10.5-3.8 19.5-11.5 27.2s-16.7 11.5-27.2 11.5c-10.9 0-20-3.8-27.2-11.5l-103.7-103.4c-36.1 25-76.3 37.5-120.6 37.5-28.8 0-56.4-5.6-82.7-16.8s-49-26.3-68-45.3-34.2-41.7-45.3-68c-11.2-26.3-16.8-53.9-16.8-82.7s5.6-56.4 16.8-82.7 26.3-49 45.3-68 41.7-34.2 68-45.3c26.3-11.2 53.9-16.8 82.7-16.8s56.4 5.6 82.7 16.8c26.3 11.2 49 26.3 68 45.3s34.2 41.7 45.3 68c11.2 26.3 16.8 53.9 16.8 82.7 0 44.3-12.5 84.5-37.5 120.6l103.7 103.7c7.5 7.5 11.2 16.5 11.2 27.2zm-154.8-251.5c0-37.3-13.2-69.2-39.8-95.7-26.5-26.5-58.4-39.8-95.7-39.8s-69.2 13.3-95.7 39.8-39.8 58.4-39.8 95.7 13.2 69.2 39.8 95.7c26.5 26.5 58.4 39.8 95.7 39.8s69.2-13.2 95.7-39.8c26.6-26.5 39.8-58.4 39.8-95.7z"
            ></path>
          </svg>
        </span>
        <span> search </span>
      </button>
    </form>
  </div>

  <!-- <ul>
      <li :key="image.id" v-for="image in data">
        <img :src="image.media[0].gif.url" alt="" />
      </li>
      <li>
      </li>
    </ul> -->

  <div class="container">
    <!-- i will put resuils here -->
    <div class="images-list row">
      <div :key="{ index }" v-for="index in 4" class="images-column col-lg-3">
        <div :key="{ index2 }" v-for="index2 in 4" class="images__item">
          <img
            src="https://media.tenor.com/images/5738658e35fa01ace094ce17ec2f4f9d/tenor.gif"
            alt=""
          />
          <ul class="tags__list">
            <li class="tags__item">
              <span class="tags__hash"> #fatdog </span>
              <span class="tags__hash"> #cat </span>
              <span class="tags__hash"> #world </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <!-- i will put resuils here -->
    <div class="images-list row">
      <div :key="{ index }" v-for="index in 4" class="images-column col-lg-3">
        <div :key="{ index2 }" v-for="index2 in 4" class="images__item">
          <Skeleton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "./Skeleton.vue";

import axios from "axios";

var apikey = "E47ORNG4I93X";
var lmt = 16;
// test search term
var search_term = "cat"; //excited
// using default locale of en_US
var search_url = search_term + "&key=" + apikey + "&limit=" + lmt;
var nextPos = "pos=8";

export default {
  name: "SearchBar",
  components: {
    Skeleton,
  },
  data() {
    return {
      text: "",
      data: [],
    };
  },
  methods: {
    __onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please enter what you think to get it");
        return;
      }

      axios
        .get(
          `https://g.tenor.com/v1/search?q=${
            this.text
          }"&media_filter=gif&key="${apikey + "&limit=" + lmt}`
        )
        .then((res) => {
          console.log("res", res);
          this.data = res.data.results;
        })
        .catch((err) => {
          console.log("err", err);
        });

      this.text = "";
    },
    onSubmit(e) {
      e.preventDefault();

      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=KL1uVltq0q93AHLhFeewJsx3N8jKAvYt&q=cat&limit=8`
        )
        .then((res) => {
          console.log("res", res);
          // this.data = res.data.results;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>

<style lang="scss">
.images__item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-block-end: 15px;
  img {
    display: block;
    width: 100%;
  }

  &:hover {
    .tags__list {
      opacity: 1;
    }
  }
}

.tags {
  &__list {
    opacity: 0;
    position: absolute;
    inset-block-end: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    margin: 0;
    list-style: none;
    padding-inline-start: 10px;
    padding-block: 15px;
    transition: 0.3s ease-in opacity;
  }

  &__item {
    color: #fff;
  }
}
</style>
