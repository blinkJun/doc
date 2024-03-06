<template>
  <div class="loading-radius-pass">
    <div class="fragments">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.loading-radius-pass {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fragments {
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  box-sizing: border-box;
  > div {
    width: 12px;
    height: 12px;
    margin: 0 5px;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: rgb(67, 174, 255);
    }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    @keyframes move {
      0% {
        opacity: 0;
        transform: translateX(-(12px + 5px) * 3);
      }
      14.28% {
        opacity: 0;
        transform: translateX((12px + 5px) * 3);
      }
      57.12% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 0;
        transform: translateX(-(12px + 5px) * 3);
      }
    }
    @keyframes scale {
      0% {
        transform: scale(0);
      }
      14.28% {
        transform: scale(0);
      }
      57.12% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    &:first-child {
      animation: move 6000ms -5000ms linear infinite;
      &::after {
        animation: scale 6000ms -5000ms linear infinite;
      }
    }
    &:nth-child(2) {
      animation: move 6000ms -4000ms linear infinite;
      &::after {
        animation: scale 6000ms -4000ms linear infinite;
      }
    }
    &:nth-child(3) {
      animation: move 6000ms -3000ms linear infinite;
      &::after {
        animation: scale 6000ms -3000ms linear infinite;
      }
    }
    &:nth-child(4) {
      animation: move 6000ms -2000ms linear infinite;
      &::after {
        animation: scale 6000ms -2000ms linear infinite;
      }
    }
    &:nth-child(5) {
      animation: move 6000ms -1000ms linear infinite;
      &::after {
        animation: scale 6000ms -1000ms linear infinite;
      }
    }
    &:nth-child(6) {
      animation: move 6000ms 0ms linear infinite;
      &::after {
        animation: scale 6000ms 0ms linear infinite;
      }
    }
  }
}
</style>
