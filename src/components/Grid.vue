<template>
  <div class="images-list">
    <div
      :key="img.id"
      v-for="img of this.$store.getters.images"
      class="images-item"
    >
      <img :src="img.media[0].tinygif.url" loading="lazy" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "grid",
};
</script>

<style lang="scss" scoped>
.images {
  &-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  &-item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:nth-child(1) {
      grid-column: span 4;
      grid-row: span 2;
    }
    &:nth-child(3),
    &:nth-child(2) {
      grid-column: span 2;
    }

    &:nth-child(4),
    &:nth-child(5) {
      grid-column: span 3;
    }
  }
}
</style>
