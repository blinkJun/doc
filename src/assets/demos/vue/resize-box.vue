<template>
  <div class="resize-box" :class="[props.resize]">
    <template v-if="leftBar">
      <div class="resize-bar-left" ref="resizeBarLeftEl"></div>
      <div class="dividing-line-left"></div>
    </template>
    <template v-if="rightBar">
      <div class="resize-bar-right" ref="resizeBarRightEl"></div>
      <div class="dividing-line-right"></div>
    </template>
    <template v-if="topBar">
      <div class="resize-bar-top" ref="resizeBarTopEl"></div>
      <div class="dividing-line-top"></div>
    </template>
    <template v-if="bottomBar">
      <div class="resize-bar-bottom" ref="resizeBarBottomEl"></div>
      <div class="dividing-line-bottom"></div>
    </template>

    <div class="real-content" ref="contentRef">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, computed, onUnmounted, onMounted } from 'vue';
const props = defineProps({
  // 同 CSS resize
  resize: {
    type: String,
    default: 'both',
  },
  bar: {
    type: Array,
    default: () => ['bottom', 'right'],
  },
});

const leftBar = computed(() => {
  return (
    (props.resize === 'horizontal' || props.resize === 'both') &&
    props.bar.includes('left')
  );
});
const rightBar = computed(() => {
  return (
    (props.resize === 'horizontal' || props.resize === 'both') &&
    props.bar.includes('right')
  );
});
const topBar = computed(() => {
  return (
    (props.resize === 'vertical' || props.resize === 'both') &&
    props.bar.includes('top')
  );
});
const bottomBar = computed(() => {
  return (
    (props.resize === 'vertical' || props.resize === 'both') &&
    props.bar.includes('bottom')
  );
});

const bindObserve = (el, updateBoxSize) => {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
  const resizeBarObserver = new MutationObserver((mutationList) => {
    const width = getComputedStyle(el).getPropertyValue('width');
    const height = getComputedStyle(el).getPropertyValue('height');
    updateBoxSize(width, height);
  });
  resizeBarObserver.observe(el, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true,
  });
  return resizeBarObserver;
};
const clearObserve = (observe) => {
  if (observe) {
    observe.disconnect();
    observe.takeRecords();
  }
};

const resizeBarLeftEl = ref();
const resizeBarRightEl = ref();
const resizeBarTopEl = ref();
const resizeBarBottomEl = ref();
const contentRef = ref();
const updateBoxWidth = (width, height) => {
  contentRef.value.style.width = width;
  if (resizeBarLeftEl.value) {
    resizeBarLeftEl.value.style.width = width;
  }
  if (resizeBarRightEl.value.style) {
    resizeBarRightEl.value.style.width = width;
  }
};
const updateBoxHeight = (width, height) => {
  contentRef.value.style.height = height;
  if (resizeBarTopEl.value) {
    resizeBarTopEl.value.style.height = height;
  }
  if (resizeBarBottomEl.value) {
    resizeBarBottomEl.value.style.height = height;
  }
};

const resizeWidthLeftObserve = ref(null);
const resizeWidthRightObserve = ref(null);
const resizeHeightTopObserve = ref(null);
const resizeHeightBottomObserve = ref(null);
onMounted(() => {
  watch(
    props,
    () => {
      clearObserve(resizeWidthLeftObserve.value);
      clearObserve(resizeWidthRightObserve.value);
      clearObserve(resizeHeightTopObserve.value);
      clearObserve(resizeHeightBottomObserve.value);

      resizeWidthLeftObserve.value = null;
      resizeWidthRightObserve.value = null;
      resizeHeightTopObserve.value = null;
      resizeHeightBottomObserve.value = null;

      if (leftBar.value) {
        resizeWidthLeftObserve.value = bindObserve(
          resizeBarLeftEl.value,
          updateBoxWidth
        );
      }
      if (rightBar.value) {
        resizeWidthRightObserve.value = bindObserve(
          resizeBarRightEl.value,
          updateBoxWidth
        );
      }
      if (topBar.value) {
        resizeHeightTopObserve.value = bindObserve(
          resizeBarTopEl.value,
          updateBoxHeight
        );
      }
      if (bottomBar.value) {
        resizeHeightBottomObserve.value = bindObserve(
          resizeBarBottomEl.value,
          updateBoxHeight
        );
      }
    },
    {
      immediate: true,
    }
  );
  onUnmounted(() => {
    clearObserve(resizeWidthLeftObserve.value);
    clearObserve(resizeWidthRightObserve.value);
    clearObserve(resizeHeightTopObserve.value);
    clearObserve(resizeHeightBottomObserve.value);
  });
});
</script>
<style lang="less" scoped>
@resizeBarWidth: 8px;
.resize-box {
  display: inline-block;
  position: relative;
  border: 1px solid #666;
}
.resize-bar-left,
.resize-bar-right,
.resize-bar-top,
.resize-bar-bottom {
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: absolute;
  opacity: 0;
  z-index: 1;
}
.resize-bar-left,
.resize-bar-right {
  top: 0;
  resize: horizontal;
  &::-webkit-scrollbar {
    width: @resizeBarWidth;
    height: 99999px;
    opacity: 0;
  }
}
.resize-bar-top,
.resize-bar-bottom {
  left: 0;
  resize: vertical;
  &::-webkit-scrollbar {
    width: 99999px;
    height: @resizeBarWidth;
    opacity: 0;
  }
}
.resize-bar-left {
  transform-origin: 50% 50%;
  transform: rotate(180deg);
  left: -@resizeBarWidth;
  &:hover,
  &:active {
    & ~ .dividing-line-left {
      border-left: 1px dashed skyblue;
    }
  }
}
.resize-bar-right {
  left: @resizeBarWidth;
  &:hover,
  &:active {
    & ~ .dividing-line-right {
      border-right: 1px dashed skyblue;
    }
  }
}
.resize-bar-top {
  transform-origin: 50% 50%;
  transform: rotate(180deg);
  top: -@resizeBarWidth;
  &:hover,
  &:active {
    & ~ .dividing-line-top {
      border-top: 1px dashed skyblue;
    }
  }
}
.resize-bar-bottom {
  top: @resizeBarWidth;
  &:hover,
  &:active {
    & ~ .dividing-line-bottom {
      border-bottom: 1px dashed skyblue;
    }
  }
}

.dividing-line-left,
.dividing-line-right,
.dividing-line-top,
.dividing-line-bottom {
  position: absolute;
  z-index: 5;
  pointer-events: none;
}
.dividing-line-left {
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-left: 1px solid transparent;
}
.dividing-line-right {
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  border-right: 1px solid transparent;
}
.dividing-line-top {
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  border-top: 1px solid transparent;
}
.dividing-line-bottom {
  bottom: 0;
  left: 0;
  height: 0;
  width: 100%;
  border-bottom: 1px solid transparent;
}

.real-content {
  display: inline-block;
  position: relative;
  z-index: 6;
  overflow: hidden;
}
</style>
