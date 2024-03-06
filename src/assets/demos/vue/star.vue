<template>
  <ul class="star-box" :class="{ trans: useTransision }">
    <li class="wrap"></li>
    <li
      class="circle"
      ref="starEl"
      v-for="starItem in starList"
      :key="starItem.label"
    >
      <div>{{ starItem.label }}</div>
    </li>
    <li class="inner"></li>
  </ul>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const useTransision = ref(false);
const starEl = ref();
const starList = reactive([
  {
    label: '😊',
  },
  {
    label: '😁',
  },
  {
    label: '😉',
  },
  {
    label: '😜',
  },
  {
    label: '😎',
  },
  {
    label: '😆',
  },
]);

const itemUnit = 360 / starList.length;
const duration = 1000;
const transition = `transform ${duration}ms 0s linear`;

// 更新位置
const updatePosisiton = function (list) {
  const newList = [...list];
  const last = newList.pop();
  newList.unshift(last);

  // 移动完成后重置为初始位置
  const handlePositionReset = function () {
    this.removeEventListener('transitionend', handlePositionReset);
    // 避免出现过渡动画
    this.style.transition = 'none';
    this.style.transform = `rotateX(70deg) rotateZ(0deg)`;
    this.querySelector('div').style.transition = 'none';
    this.querySelector('div').style.transform = `rotateX(-90deg) rotateY(0deg)`;

    // 恢复过渡动画
    setTimeout(() => {
      this.style.transition = transition;
      this.querySelector('div').style.transition = transition;
      updatePosisiton(newList);
    }, 0);
  };

  newList.forEach((item, index) => {
    if (index === 0) {
      item.addEventListener('transitionend', handlePositionReset);
      item.classList.remove('no-border');
      item.style.transform = `rotateX(70deg) rotateZ(360deg)`;
      item.querySelector(
        'div'
      ).style.transform = `rotateX(-90deg) rotateY(360deg)`;
    } else {
      item.classList.add('no-border');
      item.style.transform = `rotateX(70deg) rotateZ(${itemUnit * index}deg)`;
      item.querySelector('div').style.transform = `rotateX(-90deg) rotateY(${
        itemUnit * index
      }deg)`;
    }
    item.style.zIndex = index;
  });
};

// 初始化位置
const initPosition = (list) => {
  list.forEach((item, index) => {
    if (index !== 0) {
      item.classList.add('no-border');
    }
    item.style.transform = `rotateX(70deg) rotateZ(${itemUnit * index}deg)`;
    item.querySelector('div').style.transform = `rotateX(-90deg) rotateY(${
      itemUnit * index
    }deg)`;
    item.style.zIndex = index;
  });
  useTransision.value = true;
};

onMounted(() => {
  initPosition(starEl.value);
  setTimeout(() => {
    updatePosisiton(starEl.value);
  }, 1000);
});
</script>

<style scoped>
ul {
  width: 100%;
  padding-top: 100%;
  list-style: none;
  position: relative;
  list-style: none;
}
li {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 1px solid #999;
  border-radius: 50%;
  /* 3d */
  transform-origin: center center;
  transform-style: preserve-3d;
  /* 倾斜角度 */
  transform: rotateX(70deg);
}
.star-box li + li {
  margin-top: auto;
}

.trans li {
  transition: transform 1s 0s linear;
}

.wrap {
  width: 100%;
  height: 100%;
}
.circle {
  width: 80%;
  height: 80%;
}
.circle.no-border {
  border: none;
}
.inner {
  width: 60%;
  height: 60%;
}
.circle div {
  position: absolute;
  top: -22px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  font-size: 36px;
  transition: all 1s 0s linear;
}
</style>
