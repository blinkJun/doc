<template>
  <div class="card-box">
    <div class="card-border"></div>
    <div class="card-obverse"></div>
    <div class="card-positive"></div>
  </div>
</template>

<style>
/* 基本样式 */
.card-box {
  width: 100%;
  height: 312.5px;
  position: relative;
}
.card-border {
  width: 189.5px;
  height: 315px;
  border: 2px solid #ffe560;
  border-radius: 10px;
  margin: 0 auto;
  opacity: 0.5;
}
.card-obverse {
  width: 186.5px;
  height: 307px;
  background: url(../images/card-obverse.png) no-repeat center;
  background-size: 100% auto;
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  z-index: 0;
  margin: auto;
}
.card-positive {
  width: 186.5px;
  height: 307px;
  background: url(../images/card-positive.png) no-repeat center;
  background-size: 100% auto;
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  z-index: 10;
  margin: auto;
}

/* 动画样式 */
.card-box {
  /* 容器添加视距，即3d内容在离你眼睛多远距离时应该呈现的效果 */
  perspective: 900px;
}
.card-border {
  transform-style: preserve-3d;
  transition: transform 2s 0s ease;
  transform-origin: 50% 50%;
  transform: rotate3d(0, 1, 0, 180deg);
}
.card-obverse {
  transform-style: preserve-3d;
  transition: transform 2s 0s ease;
  transform-origin: 50% 50%;
  transform: rotate3d(0, 1, 0, 0deg);
  /* 关键：元素旋转后元素背面隐藏 */
  backface-visibility: hidden;
}
.card-positive {
  transform-style: preserve-3d;
  transition: transform 2s 0s ease;
  transform-origin: 50% 50%;
  transform: rotate3d(0, 1, 0, -180deg);
  backface-visibility: hidden;
}

/* 鼠标滑入开始过度 */
.card-box:hover .card-obverse {
  transform: rotate3d(0, 1, 0, 180deg);
}
.card-box:hover .card-border,
.card-box:hover .card-positive {
  transform: rotate3d(0, 1, 0, 0deg);
}
</style>
