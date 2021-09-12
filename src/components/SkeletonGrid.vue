<template>
  <div class="container">
    <div class="row">
      <div
        :key="{ index }"
        v-for="index in 4"
        class="col-lg-3 col-md-4 col-sm-6 col-12"
      >
        <div :key="{ index2 }" v-for="index2 in 3" class="Skeleton-wrapper">
          <Skeleton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "./Skeleton.vue";
export default {
  name: "SkeletonGrid",
  components: {
    Skeleton,
  },
};
</script>

<style lang="scss" scoped>
.Skeleton-wrapper {
  width: 100%;
  margin-block-end: 10px;
}
</style>
