<template>
  <div class="image-skeleton"></div>
</template>

<script>
export default {
  name: "Skeleton",
};
</script>

<style lang="scss">
.image-skeleton {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}

.image-skeleton:empty::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(#ccc 100%, transparent 0),
    linear-gradient(#ccc 100%, transparent 0),
    linear-gradient(white 100%, transparent 0);

  background-size: 20% 100%, /* animation */ 100% 220px, /* Image */ 90% 50px,
    /* title */ 100% 100%; /* card bg */

  background-position: -150% 0, /*animation*/ 0 0, /* Image */ 12px 240px,
    /* title */ 0 0 /* card */;

  background-repeat: no-repeat;
  animation: loadingAIDS 1.5s infinite;
}

@keyframes loadingAIDS {
  to {
    background-position: 350% 0, 0 0, /* Image */ 12px 240px, /* title */ 0 0;
  }
}
</style>