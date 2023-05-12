<template>
  <div class="opacity-bg"></div>
</template>

<style scoped>
.opacity-bg {
  padding: 300px;
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1) 100%
    );
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px;
}
</style>
