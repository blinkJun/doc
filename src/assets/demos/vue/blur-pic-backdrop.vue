<template>
  <div class="box">
    <div class="card">hello kitty</div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 600px;
  position: relative;
  background: url('../../images/poster.jpg') center top no-repeat;
}

.card {
  width: 40%;
  height: 40%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 2px 2px 2px 3px rgba(22, 19, 19, 0.3),
    -2px 2px 2px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: #fff;

  /* z-index重要，要设置高于默认的层级，否则作为毛玻璃的伪元素设置-1后将会被默认层级覆盖而看不到 */
  z-index: 1;

  /* filter效果在边缘将会减弱，在使用margin溢出容器的同时使用这个属性将溢出的减弱效果覆盖 */
  overflow: hidden;

  backdrop-filter: blur(20px);
}
</style>
