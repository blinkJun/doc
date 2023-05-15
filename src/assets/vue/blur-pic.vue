<template>
  <div class="box">
    <div class="card">hello kitty</div>
  </div>
</template>

<style>
.box {
  width: 100%;
  height: 600px;
  position: relative;
  background: url('../images/poster.jpg') center top no-repeat;
  background-size: cover;
  background-attachment: fixed;
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
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.3),
    -2px 2px 2px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: #fff;

  /* z-index重要，要设置高于默认的层级，否则作为毛玻璃的伪元素设置-1后将会被默认层级覆盖而看不到 */
  z-index: 1;

  /* filter效果在边缘将会减弱，在使用margin溢出容器的同时使用这个属性将溢出的减弱效果覆盖 */
  overflow: hidden;
}
.card::after {
  content: '';

  /* 伪元素作为毛玻璃和卡片背景 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  /* filter效果在边缘将会减弱，将减弱的部分溢出容器，再使用overflow隐藏 */
  margin: -20px;

  /* 模糊 */
  filter: blur(20px);

  background: url('../images/poster.jpg') center top no-repeat;
  background-size: cover;

  /* 与大背景重合 */
  background-attachment: fixed;
}
</style>
