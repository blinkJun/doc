<template>
  <ul class="ratio-list">
    <li
      v-for="(item, index) in computedList"
      :key="index"
      :style="item.style.item"
    >
      <i class="placeholder" :style="item.style.placeholder"></i>
    </li>
  </ul>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
const baseSize = 100;
function getItemStyle(item) {
  const radio = item.ratio;
  const width = radio * baseSize + 'px';
  const flexGrow = radio * baseSize;
  const paddingBottom = (1 / radio) * 100 + '%';
  return {
    item: {
      width,
      flexGrow,
      backgroundColor: 'skyblue',
    },
    placeholder: {
      paddingBottom,
    },
  };
}
const computedList = computed(() => {
  return props.list.map((item) => {
    return {
      ...item,
      style: getItemStyle(item),
    };
  });
});
</script>
<style lang="less" scoped>
.ratio-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-right: -12px;
  list-style: none;
  &::after {
    content: '';
    flex-grow: 999999999;
  }
  > li {
    margin: 0 12px 20px 0;
    > .placeholder {
      display: block;
    }
  }
}
</style>
