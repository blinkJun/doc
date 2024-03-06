<template>
  <div class="radius">
    <div class="shape"></div>
    <div class="range">
      <div class="shadow ani"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scale {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}
.radius {
  width: 15px;
  height: 15px;
  position: relative;
  margin: 100px;
}
.shape {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
  border-radius: 50%;
  box-shadow: 0 5px 5px var(--shadow-color), 0 -5px 5px var(--shadow-color),
    10px 0px 10px var(--shadow-color), -10px 0 10px var(--shadow-color);
  background-color: #f3c800;
}

.range {
  width: 500%;
  height: 500%;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.range .shadow {
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 50%;
  background-color: rgba(243, 200, 0, 0.5);
}
.range .shadow.ani {
  animation: scale 4s 0s ease infinite;
}
</style>
