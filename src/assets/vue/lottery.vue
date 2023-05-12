<template>
  <div class="lottery-box">
    <ul class="prize-list">
      <li v-for="index in 8" :key="index" :class="{ focus: index === current }">
        {{ index }}
      </li>
    </ul>
    <div class="prize-btn" @click="onStart">点击开始</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const prizeIndexMap = [0, 1, 2, 3, 5, 8, 7, 6, 4];
const current = ref(1);
const params = reactive({
  startIndex: 1,
  prizeIndex: 5, // 顺时针第5个
  presetLoop: 2,
  acceleration: 30,
  minSpeed: 60,
});
const isRunning = ref(false);

const start = (callback) => {
  if (isRunning.value) return false;
  isRunning.value = true;
  let index = params.startIndex;
  const prizeIndex = params.prizeIndex;
  var speedType = 'up';
  var speed = params.minSpeed + params.acceleration * 8;
  var loop = params.presetLoop;
  var isEnd = false;
  var setSpeed = {
    up: function () {
      return (speed -= params.acceleration);
    },
    uniform: function () {
      return speed;
    },
    down: function () {
      return (speed += params.acceleration);
    },
  };
  var animation = function () {
    setTimeout(() => {
      if (index === 8) {
        index = 1;
      } else {
        index++;
      }
      current.value = prizeIndexMap[index];
      // 点击开始后进入加速运动
      if (speedType === 'up') {
        // 未达到最高速度
        if (speed > params.minSpeed) {
          setSpeed[speedType]();
        } else {
          // 达到最高速度后进入匀速
          speedType = 'uniform';
        }
      }
      // 进入匀速
      else if (speedType === 'uniform') {
        // 到达触发奖项时进行减速
        if (index === prizeIndex) {
          loop--;
          loop === 0 ? (speedType = 'down') : console.log(`剩余${loop}圈`);
        } else {
          setSpeed[speedType]();
        }
      }
      // 进入减速
      else if (speedType === 'down') {
        if (index !== prizeIndex) {
          setSpeed[speedType]();
        } else {
          // 到达触发奖项时停止
          isEnd = true;
          isRunning.value = false;
        }
      }
      isEnd ? callback() : animation();
    }, speed);
  };
  animation();
};

const onStart = () => {
  start(() => {
    console.log('恭喜！');
    params.startIndex = params.prizeIndex;
    params.prizeIndex = parseInt(Math.random() * 8);
  });
};
</script>

<style scoped>
.lottery-box {
  width: 300px;
  height: 300px;
  position: relative;
  padding: 10px;
  background-color: teal;
}

.prize-list {
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.prize-list > li,
.prize-btn {
  width: 84px;
  height: 84px;
  flex: none;
  display: flex;
  border-radius: 5px;
  background-color: silver;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.prize-btn {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.prize-list > li:nth-child(5) {
  margin-left: 30%;
}
.prize-list > li + li {
  margin-top: 0;
}
.prize-list > li.focus {
  background-color: bisque;
}
</style>
